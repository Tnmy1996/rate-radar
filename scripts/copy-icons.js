const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const sourceDir = path.resolve(
    __dirname,
    '../node_modules/cryptocurrency-icons/svg/color',
);
const destinationDir = path.resolve(
    __dirname,
    '../public/cryptocurrency-icons/svg/color',
);

// Ensure destination directory exists
fs.mkdirSync(destinationDir, { recursive: true });

// Copy all SVG files
const files = globSync(`${sourceDir}/*.svg`);
files.forEach((file) => {
    const fileName = path.basename(file);
    fs.copyFileSync(file, path.join(destinationDir, fileName));
});

console.log('Icons copied successfully!');
