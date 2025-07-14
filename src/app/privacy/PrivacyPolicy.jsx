import React from 'react';


const PrivacyPolicy = () => {
    return (
        <div className='container mx-auto md:px-6'>
            {/* hero section */}
            <section className='py-16'>
                <div className=''>
                    <h1 className=' text-3xl md:text-4xl lg:text-[48px] font-bold text-center'>Privacy Policy</h1>
                    <p className='text-[18px] text-center mt-10'>Your privacy is important to us. This policy explains how Vijilan Security collects, uses, <br /> and protects your personal information in accordance with applicable privacy laws <br /> and regulations.</p>
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
                        <div className="max-w-4xl mx-auto space-y-10">
                            {/* Section 1-4 */}
                            <section className="">
                                <h2 className="text-[24px] font-medium mb-4">1. Introduction</h2>
                                <p className='text-[16px]'>
                                    Vijilan Security (&quot;Vijilan&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
                                    protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how
                                    we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact
                                    with us in other ways.
                                </p>
                                <p className='text-[16px]'>
                                    This policy applies to all users of our website, customers of our cybersecurity services, and anyone who interacts
                                    with Vijilan in a business context.
                                </p>

                                <h2 className="text-[24px] font-medium mb-4 mt-6">2. Information we collect</h2>
                                <div className="">
                                    <h3 className="font-medium text-[16px]">personal information</h3>
                                    <p>We may collect the following types of personal information:</p>
                                    <ul className="list-disc list-inside mt-3 space-y-2 text-[16px] pl-4">
                                        <li>
                                            contact information: name, email address, phone number, job title, company name, and mailing address
                                        </li>
                                        <li>
                                            account information: usernames, passwords, and security credentials for our services
                                        </li>
                                        <li>
                                            professional information: company size, industry, security challenges, and technology environment
                                        </li>
                                        <li>
                                            communication data: records of your communications with us, including support requests and sales inquiries
                                        </li>
                                        <li>
                                            payment information: billing details, though payment processing is handled by secure third-party processors
                                        </li>
                                    </ul>

                                    <h3 className="font-medium text-[16px] mt-4">technical information</h3>
                                    <p>We automatically collect certain technical information when you use our website or services:</p>
                                    <ul className="list-disc list-inside mt-3 space-y-2 text-[16px] pl-4">
                                        <li>
                                            device information: IP address, browser type, operating system, and device identifiers
                                        </li>
                                        <li>
                                            usage data: pages visited, time spent on pages, click-through rates, and navigation patterns
                                        </li>
                                        <li>
                                            performance data: system logs, error reports, and service performance metrics
                                        </li>
                                        <li>
                                            security data: login attempts, access logs, and security event information
                                        </li>
                                    </ul>

                                    <h3 className="font-medium text-[16px] mt-4">cookies and tracking technologies</h3>
                                    <p className='text-[16px]'>
                                        We use cookies, web beacons, and similar technologies to enhance your experience and collect usage information.
                                        For detailed information about our cookie practices, please see our{" "}
                                        <a href="#" className="" style={{ textDecoration: 'underline' }}>
                                            cookie policy
                                        </a>
                                        .
                                    </p>
                                </div>

                                <h2 className="text-[24px] font-medium mt-6">3. how we use your information</h2>
                                <div className="">
                                    <h3 className="font-medium text-[16px]">service delivery</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                        <li>providing cybersecurity services and technical support</li>
                                        <li>managing your account and subscription to services</li>
                                        <li>monitoring and improving service performance</li>
                                        <li>ensuring service security and preventing unauthorized access</li>
                                    </ul>

                                    <h3 className="font-medium text-[16px]">business operations</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                        <li>responding to inquiries and providing customer support</li>
                                        <li>processing demo requests and sales communications</li>
                                        <li>managing partner relationships and programs</li>
                                        <li>conducting business analytics and market research</li>
                                    </ul>

                                    <h3 className="font-medium text-[16px]">legal and compliance</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                        <li>complying with legal obligations and regulatory requirements</li>
                                        <li>protecting our rights and preventing fraud</li>
                                        <li>responding to law enforcement requests when legally required</li>
                                        <li>maintaining audit trails for security and compliance purposes</li>
                                    </ul>
                                </div>

                                <h2 className="text-[24px] font-medium mt-6 mb-4">4. information sharing and disclosure</h2>
                                <div className="">
                                    <p className='text-[16px]'>
                                        We do not sell, trade, or rent your personal information to third parties. We may share your information in the
                                        following limited circumstances:
                                    </p>

                                    <h3 className="font-medium text-[16px]">service providers</h3>
                                    <p className='text-[16px]'>We may share information with trusted third-party service providers who assist us in delivering our services, including:</p>
                                    <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                        <li>cloud infrastructure providers (aws, microsoft azure)</li>
                                        <li>payment processors and billing services</li>
                                        <li>customer support and crm platforms</li>
                                        <li>security monitoring and threat intelligence providers</li>
                                    </ul>

                                    <h3 className="font-medium text-[16px]">business partners</h3>
                                    <p className='text-[16px]'>
                                        With your consent, we may share relevant information with our channel partners, including msps, vars, and
                                        technology integrators, to facilitate service delivery and support.
                                    </p>

                                    <h3 className="font-medium text-[16px]">legal requirements</h3>
                                    <p className='text-[16px]'>
                                        We may disclose your information when required by law, court order, or regulatory authority, or when necessary to
                                        protect our rights, property, or safety, or that of our users or others.
                                    </p>
                                </div>
                            </section>

                            {/* Section 5-7 */}
                            <section className="">
                                <h2 className="text-[24px] font-medium mt-6">5. data security</h2>
                                <p className='text-[16px]'>We implement comprehensive security measures to protect your information:</p>
                                <div className="">
                                    <div className='border rounded-[24px] p-2'>
                                        <h3 className="font-medium text-[16px]">Security Certifications & Standards</h3>
                                        <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                            <li>SOC 2 Type 2 certified security controls</li>
                                            <li>ISO 27001 information security management</li>
                                            <li>HIPAA compliance for healthcare data</li>
                                            <li>PCI DSS standards for payment data</li>
                                        </ul>
                                    </div>

                                    <h3 className="font-medium text-[24px] mt-3">Technical Safeguards</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                        <li>End-to-end encryption for data in transit and at rest</li>
                                        <li>Multi-factor authentication and access controls</li>
                                        <li>Regular security assessments and penetration testing</li>
                                        <li>Incident response and breach notification procedures</li>
                                    </ul>

                                    <h3 className="font-medium text-[24px] mt-3">Organizational Safeguards</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                        <li>Employee background checks and security training</li>
                                        <li>Principle of least privilege access controls</li>
                                        <li>Regular security awareness and compliance training</li>
                                        <li>Vendor risk management and due diligence</li>
                                    </ul>
                                </div>

                                <div className="overflow-x-auto mt-6">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="" style={{
                                                background: " linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                            }}>
                                                <th className="p-3  font-medium text-[15px] uppercase tracking-wider">DATA TYPE</th>
                                                <th className="p-3  font-medium text-[15px] uppercase tracking-wider">RETENTION PERIOD</th>
                                                <th className="p-3  font-medium text-[15px] uppercase tracking-wider">PURPOSE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="" style={{
                                                background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                            }}>
                                                <td className="p-3 border ">customer account data</td>
                                                <td className="p-3 border ">duration of relationship + 7 years</td>
                                                <td className="p-3 border ">SERVICE DELIVERY, COMPLIANCE</td>
                                            </tr>
                                            <tr className="" style={{
                                                background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                            }}>
                                                <td className="p-3 border ">security logs</td>
                                                <td className="p-3 border ">90 days to 2 years</td>
                                                <td className="p-3 border ">SECURITY MONITORING, FORENSICS</td>
                                            </tr>
                                            <tr className="" style={{
                                                background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                            }}>
                                                <td className="p-3 border ">marketing communications</td>
                                                <td className="p-3 border ">until opt-out + 30 days</td>
                                                <td className="p-3 border ">CAMPAIGN MANAGEMENT</td>
                                            </tr>
                                            <tr className="" style={{
                                                background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                            }}>
                                                <td className="p-3 border ">support records</td>
                                                <td className="p-3 border ">3 years after resolution</td>
                                                <td className="p-3 border ">SERVICE IMPROVEMENT, TRAINING</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2 className="text-[24px] font-medium mt-6">7. Your Rights and Choices</h2>
                                <p className='text-[16px]'>
                                    Depending on your location and applicable privacy laws, you may have the following rights:
                                </p>
                                <div className="">
                                    <h3 className="font-medium text-[16px]">Access and Portability</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                        <li>Request a copy of the personal information we hold about you</li>
                                        <li>Receive your data in a portable, machine-readable format</li>
                                        <li>Verify the accuracy and source of your information</li>
                                    </ul>

                                    <h3 className="font-medium text-[16px]">Correction and Deletion</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                        <li>Correct inaccurate or outdated personal information</li>
                                        <li>Request deletion of your personal information</li>
                                        <li>Restrict or object to certain processing activities</li>
                                    </ul>

                                    <h3 className="font-medium text-[16px]">Communication Preferences</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                                        <li>Opt out of marketing communications at any time</li>
                                        <li>Update your communication preferences</li>
                                        <li>Choose which types of information you receive</li>
                                    </ul>
                                </div>

                                <div className='my-8 border rounded-[24px] p-2'>
                                    <div className="flex justify-center ">
                                         <h2 className='text-center text-[24px] font-medium'>Exercise Your Rights</h2>
                                    </div>
                                    <p className=" text-[16px] mt-2">
                                        To exercise any of these rights, please contact us using the information provided in the &quot;Contact Us&quot;
                                        section below. We will respond to your request within 30 days.
                                    </p>
                                </div>
                            </section>

                            {/* Section 8-11 */}
                            <section className="">
                                <h2 className="text-[24px] font-medium">8. International Data Transfers</h2>
                                <p className='text-[24px]'>
                                    Vijilan is based in the United States, and your information may be transferred to, stored, and processed in the
                                    United States and other countries where we or our service providers operate. We ensure appropriate safeguards are
                                    in place for international transfers, including:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-[24px] pl-4">
                                    <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
                                    <li>Adequacy decisions where applicable</li>
                                    <li>Additional technical and organizational safeguards</li>
                                    <li>Regular assessments of transfer mechanisms</li>
                                </ul>

                                <h2 className="text-[24px] font-medium">9. Children&apos;s Privacy</h2>
                                <p className='text-[24px]'>
                                    Our services are designed for businesses and are not intended for individuals under 18 years of age. We do not
                                    knowingly collect personal information from children under 18. If we become aware that we have collected such
                                    information, we will take steps to delete it promptly.
                                </p>

                                <h2 className="text-[24px] font-medium">10. Changes To This Policy</h2>
                                <p className='text-[24px]'>
                                    We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal
                                    requirements. We will notify you of material changes by:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-[24px] pl-4">
                                    <li>Posting the updated policy on our website</li>
                                    <li>Sending email notifications to registered users</li>
                                    <li>Providing notice through our services or other appropriate channels</li>
                                </ul>
                                <p className="text-[24px]">
                                    Your continued use of our services after the effective date of changes constitutes acceptance of the updated
                                    policy.
                                </p>

                                <h2 className="text-[24px] font-medium mt-6 mb-4">11. Contact Us</h2>
                                <div className="">
                                    <h3 className="text-[20px] font-medium">Privacy Questions and Requests</h3>
                                    <p className='text-[20px]'>
                                        If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact <br />us:
                                    </p>
                                    <p className='text-[20px]'>
                                        Email:
                                        <a href="mailto:privacy@vijilan.com" className="" style={{textDecoration: "underline"}}>
                                            privacy@vijilan.com
                                        </a>
                                    </p>
                                    <p className='text-[20px]'>Mail:</p>
                                    <p className='text-[20px]'>
                                        Vijilan Security - Privacy Office
                                        <br />
                                        Aventura Onyx Tower
                                        <br />
                                        1010 S Federal Hwy Suite 1205
                                        <br />
                                        Aventura, FL 33180
                                    </p>
                                    <p className='text-[20px]'>Phone: 1-800-VIJILAN (845-4526)</p>
                                    <p className='text-[20px]'>For urgent security or privacy issues, please use the emergency contact line.</p>
                                </div>

                                <div className='mt-6 border border-[#00AEEF] p-2 rounded-[24px]'>
                                    <h2 className='text-[24px] font-medium'>Data Protection Officer</h2>
                                    <p className='text-[16px]'>If you are located in the European Union or other regions with data protection regulations, you may contact our Data Protection Officer at dpo@vijilan.com for assistance with privacy matters.</p>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;