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
    
    let newContent = content.split('size={600}').join('size={250}');
    newContent = newContent.split('size={350}').join('size={180}');
    
    if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated size in ${file}`);
        updated++;
    }
});
console.log(`Updated ${updated} files.`);
