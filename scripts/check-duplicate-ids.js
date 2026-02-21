const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../data/learning');
const files = fs.readdirSync(directoryPath).filter(file => file.endsWith('.ts'));

const idMap = new Map();
const duplicates = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(directoryPath, file), 'utf8');
    const regex = /id:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const id = match[1];
        if (idMap.has(id)) {
            duplicates.push({ id, file1: idMap.get(id), file2: file });
        } else {
            idMap.set(id, file);
        }
    }
});

if (duplicates.length > 0) {
    console.log('Duplicate IDs found:');
    duplicates.forEach(d => {
        console.log(`- ID: ${d.id} (found in ${d.file1} and ${d.file2})`);
    });
} else {
    console.log('No duplicate IDs found.');
}
