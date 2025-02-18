const fs = require('fs');
const path = require('path');

// Directories to scan
const directories = ['content/pages/projects'];

// Function to process files
const processFiles = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file);

        if (file.endsWith('.md')) {
            let content = fs.readFileSync(filePath, 'utf8');

            // Extract filename without extension
            const slug = path.basename(file, '.md');

            // Check if slug already exists
            if (content.includes("slug:'work/") || content.includes("slug:'projects/")) {
                console.log(`Skipping ${file} (slug already exists)`);
                return;
            }

            // Find the index of "title:" and insert "slug:" before it
            const titleIndex = content.indexOf('title: ');
            if (titleIndex !== -1) {
                const beforeTitle = content.substring(0, titleIndex);
                const afterTitle = content.substring(titleIndex);
                content = `${beforeTitle}slug: "${slug}"\n${afterTitle}`;
                console.log(`Updated ${file} with slug: "${slug}"`);
                console.log(`Len ${beforeTitle.length} "`);
            }

            // Write updated content back to file
            fs.writeFileSync(filePath, content, 'utf8');
        }
    });
};

// Run the script for each directory
directories.forEach((dir) => {
    if (fs.existsSync(dir)) {
        processFiles(dir);
    } else {
        console.log(`Directory not found: ${dir}`);
    }
});

console.log('✅ Slug addition complete!');
