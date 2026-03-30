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

let totalReplaced = 0;

files.forEach(file => {
    const fullPath = path.join('c:\\Users\\AAA RENTAL LLP\\Desktop\\techinvention', file);
    if (!fs.existsSync(fullPath)) {
        console.log(`File not found: ${fullPath}`);
        return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let newContent = content.replace(/assets\/images\/shape-\d\.(webp|jfif|png)/g, 'assets/images/TechInvention-3d-logo.png');
    
    if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        totalReplaced++;
        console.log(`Updated: ${file}`);
    }
});

console.log(`Complete. Replaced in ${totalReplaced} files.`);
