const fs = require('fs');
const path = require('path');

const LANG_DIR = 'c:\\Users\\AAA RENTAL LLP\\Desktop\\techinvention\\src\\translations\\languages';

// Fix Hindi
const hindiPath = path.join(LANG_DIR, 'hindi.ts');
let hindi = fs.readFileSync(hindiPath, 'utf8');
hindi = hindi.replace(/ \(TechInvention\)/g, '');
hindi = hindi.replace(/\(TechInvention\)/g, '');
hindi = hindi.replace(/TechInvention/g, 'टेकइनवेंशन');
fs.writeFileSync(hindiPath, hindi, 'utf8');
console.log('Fixed Hindi');

// Fix Arabic
const arabicPath = path.join(LANG_DIR, 'arabic.ts');
let arabic = fs.readFileSync(arabicPath, 'utf8');
arabic = arabic.replace(/ \(TechInvention\)/g, '');
arabic = arabic.replace(/\(TechInvention\)/g, '');
arabic = arabic.replace(/TechInvention/g, 'تيك انفينشن');
fs.writeFileSync(arabicPath, arabic, 'utf8');
console.log('Fixed Arabic');
