
const fs = require('fs');
const path = require('path');

const translations = {
    english: \    atAGlance: {
        tag: 'Insights',
        title1: 'TechInvention at a ',
        title2: 'Glance'
    }\,
    hindi: \    atAGlance: {
        tag: 'अंतर्दृष्टि',
        title1: 'टेकइन्वेंशन ',
        title2: 'एक नज़र में'
    }\,
    arabic: \    atAGlance: {
        tag: 'رؤى',
        title1: 'نظرة عامة على ',
        title2: 'تيك إنفينشن'
    }\,
    spanish: \    atAGlance: {
        tag: 'Perspectivas',
        title1: 'TechInvention de un ',
        title2: 'Vistazo'
    }\,
    french: \    atAGlance: {
        tag: 'Aperçus',
        title1: 'TechInvention en un ',
        title2: 'coup d\'œil'
    }\
};

for (const [lang, text] of Object.entries(translations)) {
    const file = path.join('src/translations/languages', lang + '.ts');
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/,\s*atAGlance:\s*\{[\s\S]*?\}/g, '');
    content = content.replace(/\}\s*};\s*$/, '},\n' + text + '\n};\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + lang);
}

