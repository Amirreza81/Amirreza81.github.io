# Duration Feature Documentation

## Overview
The duration feature allows you to automatically calculate and display the duration of any item (experience, education, teaching, etc.) by adding a simple flag to the item's frontmatter.

## How to Use

### 1. Add the `showDuration` flag to any item's frontmatter:

```markdown
---
title: "Your Item Title"
organization: "Your Organization"
description: "Your description"
start: "Nov 2023"
end: "Nov 2024"
showDuration: true  # Add this flag
image: ""
---
```

### 2. The duration will be automatically calculated and displayed:

- **For ongoing items**: Use `end: "Present"` and the duration will be calculated from start date to current date
- **For completed items**: Use specific end dates
- **Duration formats**:
  - Less than 1 month: "Less than 1 month"
  - 1-11 months: "X months"
  - 1+ years: "X years, Y months" or "X years" (if no remaining months)

## Examples

### Example 1: Ongoing Position
```markdown
---
title: "Teaching Assistant"
organization: "University"
start: "Feb 2023"
end: "Present"
showDuration: true
---
```
**Result**: Shows "1 year, 11 months" (calculated to current date)

### Example 2: Completed Position
```markdown
---
title: "Team Lead"
organization: "Company"
start: "Nov 2023"
end: "Nov 2024"
showDuration: true
---
```
**Result**: Shows "1 year"

### Example 3: Short-term Project
```markdown
---
title: "Project Manager"
start: "Jul 2024"
end: "Feb 2025"
showDuration: true
---
```
**Result**: Shows "7 months"

## Where Duration Appears

The duration appears in:
1. **Main homepage** - Below the date range in blue text
2. **Tab pages** - Below the date range in blue text  
3. **Item detail pages** - Below the date range in the header

## Supported Date Formats

- Full month/year: "Nov 2023", "January 2022"
- Year only: "2021", "2024"
- Present: "Present" (uses current date)

## Visual Styling

The duration appears in a smaller, blue-colored font that stands out from the regular date information, making it easy to spot while maintaining visual hierarchy.
