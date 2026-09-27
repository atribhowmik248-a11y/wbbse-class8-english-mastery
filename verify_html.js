const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
console.log('HTML size:', content.length, 'bytes');

const scriptTagRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;
while ((match = scriptTagRegex.exec(content)) !== null) {
  count++;
  const code = match[1].trim();
  if (code.length > 50) {
    try {
      new Function(code);
      console.log(`Script block #${count} (${code.length} chars): Syntax is VALID!`);
    } catch (e) {
      console.error(`Syntax error in script block #${count}:`, e.message);
      process.exit(1);
    }
  }
}
console.log('All script blocks verified successfully.');
