const fs = require('fs');
const glob = require('glob');
const path = require('path');

const cwd = process.cwd();
const files = glob.sync('src/**/*.{tsx,jsx}', { cwd, absolute: true });

let modifiedAny = false;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/className=\"text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light\"/g, 'className=\"font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed max-w-2xl mx-auto text-center\"');

    content = content.replace(/className=\"text-slate-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light text-center\"/g, 'className=\"font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed max-w-2xl mx-auto mb-12 text-center\"');

    content = content.replace(/className=\"text-slate-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light\"/g, 'className=\"font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed max-w-2xl mb-12\"');

    // Make OneHealth accordion desc larger, keep text-white
    content = content.replace(/className=\"text-white\/90 text-sm sm:text-base font-medium leading-relaxed mb-10 max-w-md\"/g, 'className=\"font-medium tracking-tight text-white\/90 text-lg md:text-xl lg:text-[1.35rem] leading-relaxed mb-10 max-w-md\"');

    content = content.replace(/className=\"text-slate-500 text-base md:text-lg leading-relaxed font-medium\"/g, 'className=\"font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed\"');
    
    // For smaller text in stats
    content = content.replace(/className=\"text-slate-500 text-lg leading-relaxed max-w-xl\"/g, 'className=\"font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed max-w-xl\"');

    content = content.replace(/className=\"text-slate-500 text-lg leading-relaxed font-light\"/g, 'className=\"font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed\"');
    
    // Testimonials
    content = content.replace(/className=\"text-lg md:text-xl text-slate-700 leading-relaxed font-light italic italic-quote\"/g, 'className=\"font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed italic italic-quote\"');
    
    content = content.replace(/className=\"text-xs md:text-sm text-brand-primary font-light tracking-wide {2}opacity-80\"/g, 'className=\"font-medium tracking-tight text-brand-content text-lg md:text-xl lg:text-[1.35rem] leading-relaxed\"');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log('Modified: ' + path.basename(file));
        modifiedAny = true;
    }
});
if (!modifiedAny) {
    console.log('No files matched for replacement.');
}
