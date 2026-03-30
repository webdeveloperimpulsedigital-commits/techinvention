import fs from 'fs';
import path from 'path';

const files = [
    'src/pages/Home/sections/VaccinePipeline/index.tsx',
    'src/pages/Home/sections/Stats/index.tsx',
    'src/pages/Home/sections/Testimonials/TestimonialsAnimated.tsx',
    'src/pages/Home/sections/OneHealth/index.tsx',
    'src/pages/Home/sections/Awards/index.tsx',
    'src/pages/Home/sections/FAQ/index.tsx',
    'src/pages/Home/sections/About/index.tsx'
];

let updated = 0;

files.forEach(file => {
    const fullPath = path.join('c:\\Users\\AAA RENTAL LLP\\Desktop\\techinvention', file);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    let newContent = content
        .replace(/-left-64/g, '-left-12')
        .replace(/-left-24/g, '-left-4')
        .replace(/-right-64/g, '-right-12')
        .replace(/-right-24/g, '-right-4')
        .replace(/opacity=\{0\.5\}/g, 'opacity={0.8}')
        .replace(/opacity=\{0\.6\}/g, 'opacity={0.8}')
        .replace(/xl:right-48/g, 'xl:right-16');
    
    if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated positioning in ${file}`);
        updated++;
    }
});
console.log(`Updated ${updated} files.`);
