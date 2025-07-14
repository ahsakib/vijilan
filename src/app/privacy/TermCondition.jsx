import React from 'react';

const TermCondition = () => {
    return (
        <div className='container mx-auto md:px-6'>
            {/* hero section */}
            <section className='py-16'>
                <div className=''>
                    <h1 className=' text-3xl md:text-4xl lg:text-[48px] font-bold text-center'>Terms and Conditions</h1>
                    <p className='text-[18px] text-center mt-10'>Legal terms governing your use of Vijilan's cybersecurity services, website, and <br /> business relationships.</p>
                </div>
            </section>

            {/* policy content*/}
            <section className='py-16'>
                {/* last update card */}
                <div className='h-[142px]' style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <h2 className='text-[18px] flex items-center justify-center w-full h-full uppercase'>Last Updated: January 15, 2025</h2>
                </div>

                {/* all policy content */}
                <div className='mt-10'>
                    <div className=" p-5 md:p-10" style={{
                        background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                    }}>
                        <div className="max-w-4xl mx-auto space-y-6">
                            {/* Section 1: Agreement to Terms */}
                            <section className="">
                                <h2 className="text-[24px] font-medium mb-4">1. Agreement to Terms</h2>
                                <p className='text-[16px]'>
                                    By accessing or using Vijilan Security&apos;s website, services, or entering into a business relationship
                                    with us, you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to
                                    these Terms, please do not use our services.
                                </p>
                                <p className='text-[16px]'>
                                    These Terms constitute a legally binding agreement between you and Vijilan Security, Inc.
                                    (&quot;Vijilan,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a Delaware corporation with its
                                    principal place of business in Florida.
                                </p>
                                <div className=" border rounded-[24px] p-2 mt-6">
                                    <h3 className="text-[24px] font-medium">Important Notice</h3>
                                    <p className='text-[16px]'>
                                        These Terms include important limitations of liability and dispute resolution provisions. Please read them
                                        carefully before using our services.
                                    </p>
                                </div>
                            </section>

                            {/* Section 2: Definitions */}
                            <section className="">
                                <h2 className="text-[24px] font-medium mb-4">2. definitions</h2>
                                <p>for purposes of these terms:</p>
                                <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                    <li>
                                        <span className="font-medium">&quot;services&quot;</span> means all cybersecurity services provided by
                                        vijilan, including but not limited to threatremediate&trade;, threatrespond, managed edr, managed exposure
                                        management, logingest, next-gen siem, and professional services.
                                    </li>
                                    <li>
                                        <span className="font-medium">&quot;customer&quot;</span> means any individual or entity that has
                                        entered into a service agreement with vijilan.
                                    </li>
                                    <li>
                                        <span className="font-medium">&quot;approved&quot;</span> means vijilan&apos;s distributors and other
                                        authorized channel partners.
                                    </li>
                                    <li>
                                        <span className="font-medium">&quot;user&quot;</span> means any individual who accesses or uses our
                                        website or services.
                                    </li>
                                    <li>
                                        <span className="font-medium">&quot;confidential information&quot;</span> means any non-public
                                        information disclosed by either party.
                                    </li>
                                </ul>
                            </section>

                            {/* Section 3: service descriptions and availability */}
                            <section className="">
                                <h2 className="text-[16px] font-medium">3. service descriptions and availability</h2>
                                <h3 className="text-[16px] font-medium">cybersecurity services</h3>
                                <p className='text-[16px]'>
                                    vijilan provides managed cybersecurity services designed to detect, investigate, and remediate security
                                    threats. our services include:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                    <li>
                                        threatremediate&trade;: managed extended detection and response (xdr) with active threat remediation
                                    </li>
                                    <li>threatrespond: managed detection and response (mdr) with expert-guided response</li>
                                    <li>managed edr: identity threat detection and response services</li>
                                    <li>managed exposure management: continuous exposure assessment and remediation</li>
                                    <li>logingest (logscale): log management and analysis services</li>
                                    <li>next-gen siem: security information and event management solutions</li>
                                    <li>
                                        professional services: implementation, optimization, and managed services for third-party security tools
                                    </li>
                                </ul>
                                <h3 className="text-[16px] font-medium">service level commitments</h3>
                                <p className='text-[16px]'>
                                    specific service level agreements (slas) are detailed in individual service agreements. general commitments
                                    include:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                    <li>24/7/365 security operations center (soc) monitoring</li>
                                    <li>response time commitments based on threat severity</li>
                                    <li>monthly reporting and quarterly business reviews</li>
                                    <li>compliance-ready documentation and audit support</li>
                                </ul>
                            </section>

                            {/* Section 4: customer obligations and responsibilities */}
                            <section className="">
                                <h2 className="text-[24px] font-medium">4. customer obligations and responsibilities</h2>
                                <h3 className="text-[16px] font-medium">customer must:</h3>
                                <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                    <li>provide necessary access to systems and networks for service delivery</li>
                                    <li>maintain current and accurate contact information</li>
                                    <li>respond promptly to security incidents and recommendations</li>
                                    <li>implement reasonable security measures as advised by vijilan</li>
                                    <li>comply with applicable laws and regulations</li>
                                </ul>
                                <h3 className="text-[16px] font-medium">data and information</h3>
                                <p className='text-[16px]'>customers are responsible for:</p>
                                <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                    <li>the accuracy and legality of data provided to vijilan</li>
                                    <li>obtaining necessary consents for data processing</li>
                                    <li>maintaining appropriate data backups and recovery procedures</li>
                                    <li>notifying vijilan of any changes that may affect service delivery</li>
                                </ul>
                                <h3 className="text-[24px] font-medium">5. acceptable use policy</h3>
                                <p>you agree not to use our services or website to:</p>
                                <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                    <li>violate any applicable laws, regulations, or third-party rights</li>
                                    <li>transmit harmful, offensive, or inappropriate content</li>
                                    <li>attempt to gain unauthorized access to our systems or other users&apos; data</li>
                                    <li>interfere with or disrupt our services or infrastructure</li>
                                    <li>use our services for illegal activities or to harm others</li>
                                    <li>reverse engineer, decompile, or attempt to extract source code</li>
                                    <li>circumvent access controls or distribute our services without authorization</li>
                                </ul>
                            </section>

                            {/* Section 6: intellectual property (rights) */}
                            <section className="-mt-6">
                                <h2 className="text-[24px] font-medium">6. intellectual property (rights)</h2>
                                <h3 className="text-[16px] font-medium">vijilan&apos;s intellectual property</h3>
                                <p className='text-[16px]'>
                                    all content, features, and functionality of our services, including but not limited to text, graphics,
                                    logos, software, and methodologies, are owned by vijilan and protected by intellectual property laws. the
                                    threatremediate&trade; trademark and other vijilan marks are our exclusive property.
                                </p>
                                <h3 className="text-[16px] font-medium">customer data</h3>
                                <p className='text-[16px]'>
                                    customers retain ownership of their data. by using our services, customers grant vijilan a limited license
                                    to process customer data solely for the purpose of providing services and improving our security
                                    capabilities.
                                </p>
                                <h3 className="text-[16px] font-medium">feedback and improvements</h3>
                                <p className='text-[16px]'>
                                    any feedback, suggestions, or improvements provided by customers may be used by vijilan to enhance our
                                    services without restriction or compensation.
                                </p>
                            </section>

                            {/* Section 7: privacy and data protection */}
                            <section className="">
                                <h2 className="text-[24px] font-medium">7. privacy and data protection</h2>
                                <p className='text-[16px]'>
                                    your privacy is important to us. our collection, use, and protection of personal information is governed by
                                    our privacy policy, which is incorporated into these terms by reference.
                                </p>
                                <div className=" border rounded-[24px] p-2 mt-6">
                                    <h3 className="text-[16px] font-medium mb-2 text-center">Data Security Commitment</h3>
                                    <p className='text-[16px]'>
                                        Vijilan maintains industry-leading security standards including SOC 2 Type II, ISO 27001, and compliance
                                        with HIPAA, PCI DSS, and GDPR requirements where applicable.
                                    </p>
                                </div>
                            </section>

                            {/* Section 8: Payment Terms and Billing */}
                            <section className="">
                                <h2 className="text-[24px] font-medium mb-5">8. Payment Terms and Billing</h2>
                                <h3 className="text-[16px] font-medium">Fees and Payment</h3>
                                <p className='text-[16px]'>Service fees are specified in individual service agreements. General payment terms include:</p>
                                <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                    <li>Payment is typically billed monthly or annually.</li>
                                    <li>Payment is due within 30 days of invoice date.</li>
                                    <li>Late payments may incur interest charges.</li>
                                    <li>All fees are non-refundable except as specifically provided in service agreements.</li>
                                </ul>
                                <h3 className="text-[16px] font-medium mt-2">Price Changes</h3>
                                <p className='text-[16px]'>
                                    Vijilan reserves the right to modify pricing with 60 days&apos; written notice to customers. Price increases
                                    will not apply to existing contracts until renewal.
                                </p>
                            </section>

                            {/* Section 9: Term and Termination */}
                            <section className="">
                                <h2 className="text-[24px] font-medium mb-5">9. Term and Termination</h2>
                                <h3 className="text-[16px] font-medium">Service Term</h3>
                                <p className='text-[16px] mb-5'>
                                    Service terms are specified in individual agreements, typically ranging from 12 to 36 months with automatic
                                    renewal provisions.
                                </p>
                                <h3 className="text-[16px] font-medium">Termination Rights</h3>
                                <p className='text-[16px] '>Either party may terminate services:</p>
                                <ul className="list-disc list-inside space-y-2 text-[16px] pl-4 mb-5">
                                    <li>For material breach that remains uncured after 30 days&apos; written notice</li>
                                    <li>For non-payment after 15 days&apos; notice and opportunity to cure</li>
                                    <li>Upon insolvency, bankruptcy, or assignment for benefit of creditors</li>
                                    <li>As specified in individual service agreements</li>
                                </ul>
                                <h3 className="text-[16px] font-medium">Effect of Termination</h3>
                                <p className='text-[16px]'>Upon termination:</p>
                                <ul className="list-disc list-inside space-y-2 text-[16px] pl-4 mb-5">
                                    <li>All access to services will be discontinued</li>
                                    <li>Customer data will be returned or securely destroyed as requested</li>
                                    <li>Outstanding fees become immediately due and payable</li>
                                    <li>Confidentiality obligations continue indefinitely</li>
                                </ul>
                            </section>

                            {/* Section 10: Warranties and Disclaimers */}
                            <section className="">
                                <h2 className="text-[24px] font-medium mb-5">10. Warranties and Disclaimers</h2>
                                <h3 className="text-[16px] font-medium">Limited Warranty</h3>
                                <p className='text-[16px]'>
                                    Vijilan warrants that our services will be performed in a professional manner consistent with industry
                                    standards. We do not warrant that our services will prevent all security incidents or that systems will be
                                    error-free.
                                </p>
                                <div className=" border  rounded-[24px] p-2 mt-6">
                                    <h3 className="text-[16px] font-medium mb-2 text-center">Disclaimer of Warranties</h3>
                                    <p className='text-[16px]'>
                                        EXCEPT AS EXPRESSLY SET FORTH HEREIN, VIJILAN PROVIDES ALL SERVICES &quot;AS IS&quot; WITHOUT WARRANTY OF
                                        ANY KIND. WE DISCLAIM ALL IMPLIED WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                                        AND NON-INFRINGEMENT.
                                    </p>
                                </div>
                            </section>

                            {/* Section 11: Limitation of Liability */}
                            <section className="">
                                <div className="border  rounded-[24px] p-2 mt-6">
                                    <h3 className="text-[16px] font-medium mb-2 text-center">11. Limitation of Liability</h3>
                                    <p className='text-[16px]'>
                                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIJILAN&apos;S TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR
                                        RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY CUSTOMER TO VIJILAN IN THE 12
                                        MONTHS PRECEDING THE CLAIM.
                                    </p>
                                    <p className="text-[16px]">
                                        IN NO EVENT SHALL VIJILAN BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                                        INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION, REGARDLESS OF THE THEORY OF LIABILITY.
                                    </p>
                                </div>
                            </section>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default TermCondition;