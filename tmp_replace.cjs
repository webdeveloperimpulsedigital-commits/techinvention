const fs = require('fs');
const path = require('path');

const LANG_DIR = 'c:\\Users\\AAA RENTAL LLP\\Desktop\\techinvention\\src\\translations\\languages';
const files = ['english.ts', 'hindi.ts', 'arabic.ts', 'spanish.ts', 'french.ts'];

const REPLACEMENTS = {
    english: {
        caseStudyDesc: "Discover how our global health initiatives and innovative R&D have transformed vaccine development and diagnostics.",
        caseStudyFeature0: "Accelerating global access to life-saving immunizations through rapid scale-up.",
        caseStudyFeature1: "Pioneering novel testing kits for faster and more accurate disease detection.",
        caseStudyFeature2: "Developing advanced biological therapies to treat complex chronic conditions.",
        caseStudyFeature3: "Conducting rigorous and ethical multi-phase trials to ensure patient safety.",
        caseStudyFeature4: "Strengthening healthcare systems and promoting equitable access worldwide.",
        caseStudyFeature5: "Leveraging cutting-edge technologies to drive the future of medical science.",
        caseStudyFeature6: "Upholding the highest international standards for manufacturing purity.",
        caseStudyFeature7: "Delivering targeted treatments tailored for specific medical countermeasures.",
        blogsDesc: "Stay updated with the latest breakthroughs, expert insights, and news from our team.",
        blogsItems: '\n        readMore: "Read More",\n        items: [\n            { title: "The Future of Vaccine Manufacturing in Emerging Markets", excerpt: "Exploring how localized production capabilities can dramatically reduce global supply chain vulnerabilities.", date: "October 12, 2023", category: "Innovation", author: "TechInvention Team" },\n            { title: "Innovations in Rapid Diagnostic Tools for Next-Gen Healthcare", excerpt: "A deep dive into our newest diagnostic solutions designed to provide accurate results in under 15 minutes.", date: "November 5, 2023", category: "Research", author: "Dr. Elena Rodriguez" },\n            { title: "Fostering Global Partnerships for Medical Resource Equity", excerpt: "Why collaboration between private and public sectors is essential to achieving universal health coverage.", date: "December 20, 2023", category: "Technology", author: "TechInvention Team" }\n        ]',
        ctaTitle: "Catalyzing",
        ctaHighlight: "Global Health",
        ctaDesc: "Join us in our mission to revolutionize global healthcare through sustainable, high-impact clinical manufacturing.",
        footerDesc: "Dedicated to advancing global health through innovative research, sustainable manufacturing, and strategic partnerships worldwide.",
    },
    hindi: {
        caseStudyDesc: "जानें कि कैसे हमारी वैश्विक स्वास्थ्य पहलों और नवीन अनुसंधान ने वैक्सीन विकास को बदल दिया है।",
        caseStudyFeature0: "सुव्यवस्थित उत्पादन के माध्यम से जीवन रक्षक टीकों तक वैश्विक पहुंच को गति देना।",
        caseStudyFeature1: "तेज और अधिक सटीक रोग पहचान के लिए नए परीक्षण किट की शुरुआत।",
        caseStudyFeature2: "जटिल पुरानी स्थितियों के इलाज के लिए उन्नत जैविक उपचार विकसित करना।",
        caseStudyFeature3: "रोगी सुरक्षा सुनिश्चित करने के लिए कठोर और नैतिक बहु-चरण परीक्षण आयोजित करना।",
        caseStudyFeature4: "स्वास्थ्य प्रणालियों को मजबूत करना और दुनिया भर में समान पहुंच को बढ़ावा देना।",
        caseStudyFeature5: "चिकित्सा विज्ञान के भविष्य को चलाने के लिए अत्याधुनिक तकनीकों का लाभ उठाना।",
        caseStudyFeature6: "विनिर्माण शुद्धता के लिए उच्चतम अंतर्राष्ट्रीय मानकों को बनाए रखना।",
        caseStudyFeature7: "विशिष्ट चिकित्सा प्रतिवादों के लिए लक्षित उपचार प्रदान करना।",
        blogsDesc: "नवीनतम सफलताओं, विशेषज्ञ अंतर्दृष्टि और हमारी टीम के समाचारों के साथ अपडेट रहें।",
        blogsItems: '\n        readMore: "और पढ़ें",\n        items: [\n            { title: "उभरते बाजारों में वैक्सीन निर्माण का भविष्य", excerpt: "यह पता लगाना कि कैसे स्थानीय उत्पादन क्षमता वैश्विक आपूर्ति श्रृंखला कमजोरियों को कम कर सकती है।", date: "अक्टूबर 12, 2023", category: "नवाचार", author: "TechInvention Team" },\n            { title: "नेक्स्ट-जेन हेल्थकेयर के लिए रैपिड डायग्नोस्टिक टूल्स में नवाचार", excerpt: "15 मिनट के भीतर सटीक परिणाम प्रदान करने के लिए डिज़ाइन किए गए हमारे नवीनतम नैदानिक समाधानों पर एक नज़र।", date: "नवंबर 5, 2023", category: "अनुसंधान", author: "Dr. Elena Rodriguez" },\n            { title: "चिकित्सा संसाधन समानता के लिए वैश्विक भागीदारी को बढ़ावा देना", excerpt: "सार्वभौमिक स्वास्थ्य कवरेज प्राप्त करने के लिए निजी और सार्वजनिक क्षेत्रों के बीच सहयोग क्यों आवश्यक है।", date: "दिसंबर 20, 2023", category: "तकनीक", author: "TechInvention Team" }\n        ]',
        ctaTitle: "उत्प्रेरक",
        ctaHighlight: "वैश्विक स्वास्थ्य",
        ctaDesc: "टिकाऊ, उच्च प्रभाव वाले नैदानिक विनिर्माण और अनुसंधान के माध्यम से वैश्विक स्वास्थ्य सेवा में क्रांति लाने के हमारे मिशन में शामिल हों।",
        footerDesc: "अभिनव अनुसंधान, टिकाऊ विनिर्माण और रणनीतिक साझेदारी के माध्यम से वैश्विक स्वास्थ्य को आगे बढ़ाने के लिए समर्पित।",
    },
    arabic: {
        caseStudyDesc: "اكتشف كيف أحدثت مبادراتنا الصحية العالمية والبحث والتطوير المبتكر تحولاً في تطوير اللقاحات.",
        caseStudyFeature0: "تسريع الوصول العالمي إلى التحصينات المنقذة للحياة من خلال التوسع السريع.",
        caseStudyFeature1: "الريادة في مجموعات الاختبار الجديدة للكشف عن الأمراض بشكل أسرع وأكثر دقة.",
        caseStudyFeature2: "تطوير علاجات بيولوجية متقدمة لعلاج الحالات المزمنة المعقدة.",
        caseStudyFeature3: "إجراء تجارب صارمة وأخلاقية متعددة المراحل لضمان سلامة المرضى.",
        caseStudyFeature4: "تعزيز أنظمة الرعاية الصحية وتعزيز الوصول العادل في جميع أنحاء العالم.",
        caseStudyFeature5: "الاستفادة من أحدث التقنيات لدفع مستقبل العلوم الطبية.",
        caseStudyFeature6: "الالتزام بأعلى المعايير الدولية لنقاء التصنيع.",
        caseStudyFeature7: "تقديم علاجات موجهة مصممة خصيصًا للتدابير الطبية المضادة.",
        blogsDesc: "ابق على اطلاع بأحدث الإنجازات ورؤى الخبراء والأخبار من فريقنا.",
        blogsItems: '\n        readMore: "اقرأ المزيد",\n        items: [\n            { title: "مستقبل تصنيع اللقاحات في الأسواق الناشئة", excerpt: "استكشاف كيف يمكن لقدرات الإنتاج المحلية أن تقلل بشكل كبير من نقاط الضعف في سلسلة التوريد العالمية.", date: "١٢ أكتوبر ٢٠٢٣", category: "ابتكار", author: "فريق TechInvention" },\n            { title: "ابتكارات في أدوات التشخيص السريع للرعاية الصحية في الجيل القادم", excerpt: "نظرة عميقة على أحدث حلولنا التشخيصية المصممة لتقديم نتائج دقيقة في أقل من ١٥ دقيقة.", date: "٥ نوفمبر ٢٠٢٣", category: "أبحاث", author: "د. إيلينا رودريغيز" },\n            { title: "تعزيز الشراكات العالمية من أجل المساواة في الموارد الطبية", excerpt: "لماذا يعد التعاون بين القطاعين العام والخاص ضروريًا لتحقيق التغطية الصحية الشاملة.", date: "٢٠ ديسمبر ٢٠٢٣", category: "تكنولوجيا", author: "فريق TechInvention" }\n        ]',
        ctaTitle: "تحفيز",
        ctaHighlight: "الصحة العالمية",
        ctaDesc: "انضم إلينا في مهمتنا لإحداث ثورة في الرعاية الصحية العالمية من خلال التصنيع والبحث السريري المستدام.",
        footerDesc: "مكرسون لتعزيز الصحة العالمية من خلال البحث المبتكر والتصنيع المستدام والشراكات الاستراتيجية.",
    },
    spanish: {
        caseStudyDesc: "Descubra cómo nuestras iniciativas de salud global e I+D innovadora han transformado el desarrollo de vacunas.",
        caseStudyFeature0: "Acelerando el acceso global a inmunizaciones que salvan vidas a través de una rápida expansión.",
        caseStudyFeature1: "Pioneros en nuevos kits de prueba para una detección de enfermedades más rápida y precisa.",
        caseStudyFeature2: "Desarrollando terapias biológicas avanzadas para tratar afecciones crónicas complejas.",
        caseStudyFeature3: "Realizando rigurosos ensayos clínicos de múltiples fases para garantizar la seguridad del paciente.",
        caseStudyFeature4: "Fortaleciendo sistemas de salud y promoviendo el acceso equitativo en todo el mundo.",
        caseStudyFeature5: "Aprovechando tecnologías de vanguardia para impulsar el futuro de la ciencia médica.",
        caseStudyFeature6: "Manteniendo los más altos estándares internacionales para la pureza de fabricación.",
        caseStudyFeature7: "Ofreciendo tratamientos específicos diseñados para contramedidas médicas.",
        blogsDesc: "Manténgase actualizado con los últimos avances, ideas de expertos y noticias de nuestro equipo.",
        blogsItems: '\n        readMore: "Leer Más",\n        items: [\n            { title: "El futuro de la fabricación de vacunas en mercados emergentes", excerpt: "Explorando cómo la producción local puede reducir vulnerabilidades en la cadena de suministro.", date: "12 de octubre de 2023", category: "Innovación", author: "Equipo TechInvention" },\n            { title: "Innovaciones en herramientas de diagnóstico rápido", excerpt: "Nuevas soluciones de diagnóstico diseñadas para resultados precisos en menos de 15 minutos.", date: "5 de noviembre de 2023", category: "Investigación", author: "Dra. Elena Rodríguez" },\n            { title: "Fomento de alianzas globales para la equidad médica", excerpt: "Por qué la colaboración es esencial para lograr la cobertura sanitaria universal.", date: "20 de diciembre de 2023", category: "Tecnología", author: "Equipo TechInvention" }\n        ]',
        ctaTitle: "Catalizando la",
        ctaHighlight: "Salud Global",
        ctaDesc: "Únase a nuestra misión de revolucionar la atención médica mundial a través de la fabricación clínica sostenible.",
        footerDesc: "Dedicados a promover la salud mundial a través de investigaciones innovadoras, manufactura sostenible y asociaciones estratégicas.",
    },
    french: {
        caseStudyDesc: "Découvrez comment nos initiatives de santé mondiale et notre R&D innovante ont transformé le développement de vaccins.",
        caseStudyFeature0: "Accélérer l'accès mondial aux vaccinations salvatrices grâce à une expansion rapide.",
        caseStudyFeature1: "Pionniers de nouveaux kits de test pour une détection plus rapide et plus précise des maladies.",
        caseStudyFeature2: "Développement de thérapies biologiques avancées pour traiter des affections chroniques.",
        caseStudyFeature3: "Mener des essais cliniques rigoureux pour assurer la sécurité absolue des patients.",
        caseStudyFeature4: "Renforcer les systèmes de santé et promouvoir un accès équitable dans le monde entier.",
        caseStudyFeature5: "Tirer parti des technologies de pointe pour stimuler l'avenir de la science médicale.",
        caseStudyFeature6: "Maintenir les normes internationales les plus élevées pour la pureté de fabrication.",
        caseStudyFeature7: "Offrir des traitements ciblés conçus pour des contre-mesures médicales spécifiques.",
        blogsDesc: "Restez informé des dernières avancées, des avis d'experts et des actualités de notre équipe.",
        blogsItems: '\n        readMore: "Lire la Suite",\n        items: [\n            { title: "L\'avenir de la fabrication de vaccins dans les marchés émergents", excerpt: "Comment les capacités de production locales réduisent les vulnérabilités de la chaîne d\'approvisionnement.", date: "12 octobre 2023", category: "Innovation", author: "L\'équipe TechInvention" },\n            { title: "Innovations dans les outils de diagnostic rapide", excerpt: "Nouvelles solutions de diagnostic conçues pour des résultats précis en moins de 15 minutes.", date: "5 novembre 2023", category: "Recherche", author: "Dr. Elena Rodriguez" },\n            { title: "Favoriser les partenariats mondiaux pour l\'équité médicale", excerpt: "Pourquoi la collaboration est essentielle pour parvenir à la couverture sanitaire universelle.", date: "20 décembre 2023", category: "Technologie", author: "L\'équipe TechInvention" }\n        ]',
        ctaTitle: "Catalyser la",
        ctaHighlight: "Santé Mondiale",
        ctaDesc: "Rejoignez-nous dans notre mission de révolutionner les soins de santé à travers une fabrication clinique durable.",
        footerDesc: "Dédiés à l'avancement de la santé mondiale grâce à des recherches innovantes, une fabrication durable et des partenariats stratégiques.",
    }
};

files.forEach(file => {
    const lang = file.split('.')[0];
    const fp = path.join(LANG_DIR, file);
    let content = fs.readFileSync(fp, 'utf8');

    const rep = REPLACEMENTS[lang];
    if (rep) {
        content = content.replace(/caseStudy:\s*\{[\s\S]*?desc:\s*"([^"]+)"/, (match, p1) => match.replace(p1, rep.caseStudyDesc));
        content = content.replace(/blogs:\s*\{[\s\S]*?desc:\s*"([^"]+)"/, (match, p1) => match.replace(p1, rep.blogsDesc));
        content = content.replace(/cta:\s*\{[\s\S]*?desc:\s*"([^"]+)"/, (match, p1) => match.replace(p1, rep.ctaDesc));
        content = content.replace(/footer:\s*\{[\s\S]*?desc:\s*"([^"]+)"/, (match, p1) => match.replace(p1, rep.footerDesc));

        content = content.replace(/caseStudy:\s*\{[\s\S]*?features:\s*\[([\s\S]*?)\]/, (match, p1) => {
            let featuresBlock = p1;
            featuresBlock = featuresBlock.replace(/"Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\."/g, '"' + rep.caseStudyFeature0 + '"');
            featuresBlock = featuresBlock.replace(/"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat\."/g, '"' + rep.caseStudyFeature1 + '"');
            let bCount = 0;
            featuresBlock = featuresBlock.replace(/"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur\."/g, () => {
                if(bCount === 0) { bCount++; return '"' + rep.caseStudyFeature2 + '"'; }
                return '"' + rep.caseStudyFeature7 + '"';
            });
            featuresBlock = featuresBlock.replace(/"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\."/g, '"' + rep.caseStudyFeature3 + '"');
            featuresBlock = featuresBlock.replace(/"Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Pellentesque habitant morbi tristique senectus et netus et malesuada\."/g, '"' + rep.caseStudyFeature4 + '"');
            featuresBlock = featuresBlock.replace(/"Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae\."/g, '"' + rep.caseStudyFeature5 + '"');
            featuresBlock = featuresBlock.replace(/"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\. Ut enim ad minim veniam, quis nostrud exercitation\."/g, '"' + rep.caseStudyFeature6 + '"');
            return match.replace(p1, featuresBlock);
        });

        if (!content.includes('items: [')) {
            content = content.replace(/(viewAll:\s*"[^"]+")/, '$1,' + rep.blogsItems);
        }

        content = content.replace(/title:\s*"Lorem",/, 'title: "' + rep.ctaTitle + '",');
        content = content.replace(/titleHighlight:\s*"Ipsum",/, 'titleHighlight: "' + rep.ctaHighlight + '",');

        fs.writeFileSync(fp, content, 'utf8');
        console.log("Updated " + file);
    }
});
