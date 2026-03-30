import fs from 'fs';
import path from 'path';

// Fix translation message mapping
const files = ['french.ts', 'spanish.ts', 'arabic.ts'];

files.forEach(file => {
   const p = path.join('c:\\Users\\AAA RENTAL LLP\\Desktop\\techinvention\\src\\translations\\languages', file);
   let content = fs.readFileSync(p, 'utf8');

   // Extract original CEO message which is just below the CEO block
   const ceoBlockMatch = content.match(/ceo:\s*\{\s*name:\s*"[^"]+",\s*role:\s*"[^"]+",\s*message:\s*"([^"]+)",/);
   if (!ceoBlockMatch) {
     console.log('No CEO match in', file);
     return;
   }
   const oldCeoMessage = ceoBlockMatch[1];
   
   // We need to replace the Syed S Ahmed Lorem Ipsum message with the original ceoMessage
   // Replace `message: "Lorem ipsum... amet.",` in profiles[0]
   content = content.replace(/message:\s*"Lorem ipsum dolor sit amet,[^"]+",/, `message: "${oldCeoMessage}",`);

   // Replace Elena's message from lorem ipsum to english fallback for now
   const elenaMsg = "At TechInvention, our science is driven by the urgent need for global health equity. We innovate not just to advance medicine, but to ensure it reaches everyone.";
   content = content.replace(/message:\s*"labore et dolore magna aliqua\.[^"]+",/, `message: "${elenaMsg}",`);

   fs.writeFileSync(p, content);
   console.log('Fixed', file);
});

// For Hindi, we do it explicitly since we know the text

const pHi = path.join('c:\\Users\\AAA RENTAL LLP\\Desktop\\techinvention\\src\\translations\\languages', 'hindi.ts');
let contentHi = fs.readFileSync(pHi, 'utf8');
contentHi = contentHi.replace(
   /message:\s*"हमारे संस्थापक, सैयद एस. अहमद,(.|\n)*?est laborum\.",/,
   `message: "हमारे संस्थापक, सैयद एस. अहमद, विकासशील देशों में जहां सबसे अधिक आवश्यकता है, वहां सकारात्मक परिवर्तन लाने की अनिवार्यता से प्रेरित हैं। वैश्विक स्वास्थ्य समानता को वास्तविकता बनाने के लिए अत्यंत भावुक, उन्होंने इस उद्देश्य को जीवन देने के लिए टेकइन्वेन्शन (TechInvention) की स्थापना की।\\n\\nअपने समान रूप से उत्साही सहयोगियों के साथ, वे पूरे विकासशील देशों में नवीन बायोलॉजिक्स निर्माण के लिए क्षमता और बुनियादी ढांचे का निर्माण करने के लिए काम करते हैं।",`
);
contentHi = contentHi.replace(
   /message:\s*"टेकइन्वेंशन में, हमारा विज्ञान(.|\n)*?sunt explicabo\.",/,
   `message: "टेकइन्वेंशन में, हमारा विज्ञान वैश्विक स्वास्थ्य समानता की तत्काल आवश्यकता से प्रेरित है। हम केवल चिकित्सा को आगे बढ़ाने के लिए नहीं, बल्कि यह सुनिश्चित करने के लिए नवाचार करते हैं कि यह हर किसी तक पहुंचे।",`
);
fs.writeFileSync(pHi, contentHi);
console.log('Fixed hindi.ts');
