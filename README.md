# Static Resume Website

A dynamic resume website built with Eleventy (11ty) that generates content from Markdown files.

## ✨ Features

- **Content-First Architecture**: All content managed via Markdown files in the `content/` directory
- **Dynamic Tab Navigation**: Auto-generated tabs from folder structure
- **Responsive Design**: Mobile-first responsive layout with Tailwind CSS
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **SEO Optimized**: Semantic HTML structure with proper meta tags
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🚀 Quick Start

### Adding Content

1. **Create a new tab**: Add a folder in `content/` (e.g., `content/Skills/`)
2. **Add items**: Create subfolders for each item (e.g., `content/Skills/JavaScript/`)
3. **Write content**: Add an `index.md` file with front matter:

```markdown
---
title: "JavaScript Development"
description: "Advanced JavaScript and ES6+ features"
start: "2020"
end: "Present"
image: "js-logo.png"
---

### Skills & Experience
- Modern JavaScript (ES6+)
- React, Vue, Angular
- Node.js backend development
- Testing with Jest/Mocha
```

### Project Structure

```
content/
├── Education/
│   └── MIT-Degree/
│       ├── index.md
│       └── images/
├── Experience/
│   └── Google-Internship/
│       ├── index.md
│       └── images/
└── Projects/
    └── Resume-Builder/
        ├── index.md
        └── images/
```

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Clean build directory
npm run clean
```

## 📁 File Structure

```
├── .eleventy.js          # Eleventy configuration
├── package.json          # Dependencies and scripts
├── src/                  # Source templates
│   ├── _includes/
│   │   └── layout.njk    # Main layout template
│   ├── css/
│   │   └── style.css     # Custom styles
│   ├── js/
│   │   └── app.js        # JavaScript functionality
│   ├── tab/
│   │   └── tab.njk       # Tab page template
│   ├── item/
│   │   └── item.njk      # Item detail template
│   └── index.njk         # Homepage template
├── content/              # Content directory (Markdown files)
├── docs/                 # Built site (GitHub Pages)
└── .github/workflows/    # GitHub Actions
```

## 🎨 Customization

### Styling
- Modify `src/css/style.css` for custom styles
- Update Tailwind configuration in `src/_includes/layout.njk`
- Add custom color schemes in the Tailwind config

### Navigation
- Tab names are automatically generated from folder names
- Customize tab order by prefixing folder names with numbers
- Override display names in the Eleventy configuration

### Content Types
- Add new frontmatter fields in `index.md` files
- Modify templates in `src/tab/tab.njk` and `src/item/item.njk`
- Extend the Eleventy configuration for custom data processing

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. The site will auto-deploy on every push to main branch

### Manual Deployment
1. Run `npm run build`
2. Upload the `docs/` folder to your web server
3. Configure your server to serve static files

## 🔧 Configuration

### Front Matter Fields
- `title`: Display title
- `description`: Short description
- `start`: Start date
- `end`: End date (optional)
- `image`: Preview image filename (optional)

### Eleventy Configuration
- Collections are auto-generated from the file system
- Markdown processing with syntax highlighting
- Image passthrough for content images
- Custom filters for date formatting and slugification

## 🎯 Use Cases

- **Personal Portfolio**: Showcase projects and experience
- **Academic CV**: Research, publications, and achievements
- **Professional Resume**: Work history and skills
- **Creative Portfolio**: Art, design, and creative work

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build process
5. Submit a pull request

## 📄 License

MIT License - feel free to use this for your own resume website!

---

**Built with ❤️ using Eleventy, Tailwind CSS, and GitHub Pages**
