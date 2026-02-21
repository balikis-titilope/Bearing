const fs = require('fs');
const path = require('path');

const learningDir = path.join(__dirname, '../data/learning');
const files = fs.readdirSync(learningDir).filter(f => f.endsWith('.ts'));

console.log('--- Skill Question Count Audit ---');

files.forEach(file => {
    const content = fs.readFileSync(path.join(learningDir, file), 'utf8');

    // Split by skill patterns
    const skills = content.split(/id:\s*"/).slice(1);

    skills.forEach(skillBlock => {
        const idMatch = skillBlock.match(/^([^"]+)"/);
        if (!idMatch) return;
        const id = idMatch[1];

        // Find the questions array
        // We look for questions: [ and try to find the closing ] for THAT array
        const questionsMatch = skillBlock.match(/questions:\s*\[/);
        if (questionsMatch) {
            const startIndex = questionsMatch.index + questionsMatch[0].length;
            let bracketCount = 1;
            let currentIndex = startIndex;
            let questionsContent = '';

            while (bracketCount > 0 && currentIndex < skillBlock.length) {
                if (skillBlock[currentIndex] === '[') bracketCount++;
                if (skillBlock[currentIndex] === ']') bracketCount--;
                if (bracketCount > 0) questionsContent += skillBlock[currentIndex];
                currentIndex++;
            }

            // Count { inside the questionsContent
            const questions = (questionsContent.match(/\{/g) || []).length;
            if (questions < 5) {
                console.log(`File: ${file}, Skill: ${id}, Question Count: ${questions}`);
            }
        } else {
            // console.log(`File: ${file}, Skill: ${id}, Questions: 0`);
        }
    });
});
