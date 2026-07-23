import React from 'react';
import ScrollReveal from '../../../components/Common/ScrollReveal';

export default function AdverseEventReporting() {
    return (
        <section className="py-20 bg-white relative font-sans">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <ScrollReveal direction="up">
                    <h2 className="text-[22px] md:text-[32px] font-medium text-[#13325B] mb-6">
                        Adverse Event Reporting
                    </h2>
                    
                    <p className="text-slate-800 text-[16px] md:text-[18px] mb-8 leading-relaxed">
                        For any questions or to report an Adverse Event, please contact our AE Reporting team:
                    </p>

                    <div className="space-y-6 mb-12">
                        <div className="text-slate-800 text-[16px] md:text-[18px]">
                            <span className="font-bold">Phone:</span> 18008902590
                        </div>
                        
                        <div className="text-slate-800 text-[16px] md:text-[18px]">
                            <span className="font-bold">Email:</span>{' '}
                            <a href="mailto:feedback@techinvention.biz" className="hover:text-[#1955A6] hover:underline transition-colors break-all">
                                feedback@techinvention.biz
                            </a>
                        </div>
                        
                        <div className="text-slate-800 text-[16px] md:text-[18px] leading-relaxed">
                            <span className="font-bold">Download Reporting Form:</span> Please complete the{' '}
                            <a 
                                href="/Adverse-Event-AE-Report-Form.docx" 
                                download="Adverse-Event-AE-Report-Form.docx" 
                                className="font-bold text-[#d83b6f] hover:underline"
                            >
                                AE Reporting form
                            </a>{' '}
                            and send your response to the aforementioned email.
                        </div>
                    </div>

                    <div className="text-slate-700 text-[15px] md:text-[16px] leading-relaxed space-y-1">
                        <p>Your privacy is important to us.</p>
                        <p>All AE reports shall be handled with strict confidentiality.</p>
                        <p>Personal information is protected and used solely for safety monitoring purposes.</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
