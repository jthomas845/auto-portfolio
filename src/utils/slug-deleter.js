const fs = require('fs');
const path = require('path');

// Set the exact folder paths
const targetDirs = ['content/pages/projects', 'content/pages/work'];

// Function to get all Markdown files in a directory
function getMarkdownFiles(dir) {
    if (!fs.existsSync(dir)) return []; // Skip if directory doesn't exist

    return fs
        .readdirSync(dir)
        .filter((file) => file.endsWith('.md'))
        .map((file) => path.join(dir, file)); // Get full file paths
}

// Function to remove slug entries from a file
function removeSlug(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove any line that starts with "slug:"
    const updatedContent = content
        .split('\n')
        .filter((line) => !line.trim().startsWith('slug:'))
        .join('\n');

    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated: ${filePath}`);
}

// Process all markdown files in target directories
targetDirs.forEach((dir) => {
    const markdownFiles = getMarkdownFiles(dir);
    markdownFiles.forEach(removeSlug);
});

console.log("✅ All incorrect slug entries removed from 'projects' and 'work'.");
