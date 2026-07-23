const { DateTime } = require("luxon");
const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("content/**/*.{png,jpg,jpeg,gif,svg}");
  eleventyConfig.addPassthroughCopy("public");

  // Set up Markdown
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after"
    })
  });

  eleventyConfig.setLibrary("md", md);

  // Add markdown filter
  eleventyConfig.addFilter("markdown", function(content) {
    return md.render(content);
  });

  // Date filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Slug filter
  eleventyConfig.addFilter("slug", (str) => {
    return str.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
  });

  // Duration calculation filter
  eleventyConfig.addFilter("calculateDuration", (startDate, endDate) => {
    if (!startDate) return "";
    
    const start = parseDate(startDate);
    const end = endDate ? parseDate(endDate) : new Date();
    
    const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    
    if (diffInMonths < 1) {
      return "Less than 1 month";
    } else if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(diffInMonths / 12);
      const months = diffInMonths % 12;
      
      if (months === 0) {
        return `${years} year${years > 1 ? 's' : ''}`;
      } else {
        return `${years} year${years > 1 ? 's' : ''}, ${months} month${months > 1 ? 's' : ''}`;
      }
    }
  });

  // Helper function to parse dates
  function parseDate(dateString) {
    if (!dateString) return new Date(0); // Default to earliest date if no date
    
    // Handle "Present" as current date
    if (dateString.toLowerCase() === 'present') {
      return new Date();
    }
    
    // Handle year only (e.g., "2021")
    if (/^\d{4}$/.test(dateString)) {
      return new Date(parseInt(dateString), 0, 1); // January 1st of that year
    }
    
    // Handle month year (e.g., "Nov 2023", "January 2022")
    const monthYearMatch = dateString.match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (monthYearMatch) {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const fullMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
      const monthStr = monthYearMatch[1];
      const year = parseInt(monthYearMatch[2]);
      
      let monthIndex = monthNames.findIndex(m => m.toLowerCase() === monthStr.toLowerCase());
      if (monthIndex === -1) {
        monthIndex = fullMonthNames.findIndex(m => m.toLowerCase() === monthStr.toLowerCase());
      }
      
      if (monthIndex !== -1) {
        return new Date(year, monthIndex, 1);
      }
    }
    
    // Try to parse as a regular date
    const parsed = new Date(dateString);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
    
    // Default to earliest date if parsing fails
    return new Date(0);
  }

  // Collection for tabs (main categories)
  eleventyConfig.addCollection("tabs", function(collection) {
    const contentDir = "./content";
    const tabs = [];
    
    try {
      const tabDirs = fs.readdirSync(contentDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      // Sort tabs by number prefix if present, otherwise alphabetically
      const sortedTabDirs = tabDirs.sort((a, b) => {
        // Extract number prefix from folder names (e.g., "1-Education" -> 1)
        const getOrderNumber = (name) => {
          const match = name.match(/^(\d+)-/);
          return match ? parseInt(match[1]) : 999; // Put non-numbered folders at the end
        };
        
        const orderA = getOrderNumber(a);
        const orderB = getOrderNumber(b);
        
        if (orderA !== orderB) {
          return orderA - orderB;
        }
        
        // If both have same order number (or both are 999), sort alphabetically
        return a.localeCompare(b);
      });

      sortedTabDirs.forEach(tabName => {
        const tabPath = path.join(contentDir, tabName);
        const items = [];
        
        try {
          const itemDirs = fs.readdirSync(tabPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

          itemDirs.forEach(itemName => {
            const itemPath = path.join(tabPath, itemName);
            const indexPath = path.join(itemPath, "index.md");
            console.log(indexPath, fs.existsSync(indexPath));
            
            if (fs.existsSync(indexPath)) {
              const content = fs.readFileSync(indexPath, "utf-8");
              const frontMatterMatch = content.match(/^---\s*\n(.*?)\n---\s*\n(.*)$/s);
              // console.log(indexPath);
              // console.log(frontMatterMatch);
              if (frontMatterMatch) {
                const frontMatter = frontMatterMatch[1];
                const body = frontMatterMatch[2];
                
                const item = {
                  name: itemName,
                  slug: itemName.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''),
                  content: body,
                  tabSlug: tabName.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')
                };
                
                // Parse front matter
                frontMatter.split(/\r?\n/).forEach(line => {
                  const idx = line.indexOf(":");
                  if (idx === -1) return;
                
                  const key = line.slice(0, idx).trim();
                  let value = line.slice(idx + 1).trim();
                
                  // Remove surrounding quotes
                  if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.slice(1, -1);
                  }
                
                  if (value === "true") value = true;
                  if (value === "false") value = false;
                
                  item[key] = value;
                });
                
                // console.log("=================================");
                // console.log(indexPath);
                // console.log(item);
                // console.log("TITLE:", item.title);
                // console.log("=================================");

                items.push(item);
              }
            }
          });
        } catch (err) {
          console.log(`Error reading items in ${tabName}:`, err.message);
        }
        
        // Sort items by date (most recent first)
        items.sort((a, b) => {
          const dateA = parseDate(a.end || a.start);
          const dateB = parseDate(b.end || b.start);
          return dateB.getTime() - dateA.getTime(); // Descending order (most recent first)
        });
        
        // Clean tab name for display (remove number prefix and dash)
        const cleanTabName = (name) => {
          return name.replace(/^\d+-/, '');
        };
        
        tabs.push({
          name: cleanTabName(tabName),
          slug: cleanTabName(tabName).toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''),
          items: items
        });
      });
    } catch (err) {
      console.log("Error reading content directory:", err.message);
    }
    
    return tabs;
  });

  // Collection for all items
  eleventyConfig.addCollection("allItems", function(collection) {
    const contentDir = "./content";
    const allItems = [];
    
    try {
      const tabDirs = fs.readdirSync(contentDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      tabDirs.forEach(tabName => {
        const tabPath = path.join(contentDir, tabName);
        
        try {
          const itemDirs = fs.readdirSync(tabPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

          itemDirs.forEach(itemName => {
            const itemPath = path.join(tabPath, itemName);
            const indexPath = path.join(itemPath, "index.md");
            console.log(indexPath, fs.existsSync(indexPath));
            
            if (fs.existsSync(indexPath)) {
              const content = fs.readFileSync(indexPath, "utf-8");
              const frontMatterMatch = content.match(/^---\s*\n(.*?)\n---\s*\n(.*)$/s);
              
              if (frontMatterMatch) {
                const frontMatter = frontMatterMatch[1];
                const body = frontMatterMatch[2];
                
                // Clean tab name for display (remove number prefix and dash)
                const cleanTabName = (name) => {
                  return name.replace(/^\d+-/, '');
                };
                
                const item = {
                  name: itemName,
                  slug: itemName.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''),
                  content: body,
                  tab: cleanTabName(tabName),
                  tabSlug: cleanTabName(tabName).toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')
                };
                
                // Parse front matter
                frontMatter.split(/\r?\n/).forEach(line => {
                  const idx = line.indexOf(":");
                  if (idx === -1) return;
                
                  const key = line.slice(0, idx).trim();
                  let value = line.slice(idx + 1).trim();
                
                  // Remove surrounding quotes
                  if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.slice(1, -1);
                  }
                
                  if (value === "true") value = true;
                  if (value === "false") value = false;
                
                  item[key] = value;
                });
                
                // console.log("=================================");
                // console.log(indexPath);
                // console.log(item);
                // console.log("TITLE:", item.title);
                // console.log("=================================");
                allItems.push(item);
              }
            }
          });
        } catch (err) {
          console.log(`Error reading items in ${tabName}:`, err.message);
        }
      });
    } catch (err) {
      console.log("Error reading content directory:", err.message);
    }
    
    // Sort all items by date (most recent first)
    allItems.sort((a, b) => {
      const dateA = parseDate(a.end || a.start);
      const dateB = parseDate(b.end || b.start);
      return dateB.getTime() - dateA.getTime(); // Descending order (most recent first)
    });
    
    return allItems;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "docs"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
