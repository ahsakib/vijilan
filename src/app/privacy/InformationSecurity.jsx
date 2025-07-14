import React from 'react';
import lock from "../../Assets/lock.png";
import rocket from "../../Assets/rocketIcon.png";
import sheild from "../../Assets/sheildIcon.png";
import task from "../../Assets/task-check.png";
import target from "../../Assets/timeIcon.png";
import chain from "../../Assets/chain-icons.png"

const InformationSecurity = () => {
    return (
        <div className='container mx-auto md:px-6'>
            {/* hero section */}
            <section className='py-16'>
                <div className=''>
                    <h1 className=' text-3xl md:text-4xl lg:text-[48px] font-bold text-center'>Information Security at Vijilan</h1>
                    <p className='text-[18px] text-center mt-10'>Our comprehensive security framework is built on the foundation of trust, <br /> transparency, and unwavering commitment to protecting our customers' most critical <br /> assets.</p>
                </div>
            </section>

            {/*  */}
            <section className='py-5' style={{
                background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
            }}>
                {/* title */}
                <div className='px-5'>
                    <h1 className=' text-[24px] font-medium'>Core Security Principles</h1>
                    <p className='text-[16px]- mt-5'>Vijilan's information security program is built upon the fundamental principles of the CIA triad, ensuring comprehensive protection of all <br /> information assets and customer data.</p>
                </div>

                {/* 3 card */}
                <div className="grid max-w-6xl gap-6 md:grid-cols-2 mt-12 px-5">
                    {/* Confidentiality Card */}
                    <div className="relative rounded-[22px] bg-[#00AEEF3D] p-6 ">
                        <div
                            className={`absolute inset-0 rounded-[22px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <h3 className="text-[22px] font-medium text-white">🔒 Confidentiality</h3>
                        <p className="mt-4 text-[16px]">
                            Information is accessible only to authorized personnel who have a legitimate business need. We implement
                            strict access controls, encryption, and data classification to ensure sensitive information remains
                            protected.
                        </p>
                    </div>

                    {/* Integrity Card */}
                    <div className="relative rounded-[22px] bg-[#00AEEF3D] p-6">
                        <div
                            className={`absolute inset-0 rounded-[22px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <h3 className="text-[22px] font-medium text-white">🛡️ Integrity</h3>
                        <p className="mt-4 text-[16px]">
                            Information can only be modified by authorized personnel through approved processes. We maintain data
                            accuracy and completeness through comprehensive change management and audit controls.
                        </p>
                    </div>

                    {/* Availability Card */}
                    <div className="md:col-span-2 relative rounded-[22px] bg-[#00AEEF3D] p-6">
                        <div
                            className={`absolute inset-0 rounded-[22px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <h3 className="text-[22px] font-medium text-white">⚡ Availability</h3>
                        <p className="mt-4 text-[16px]">
                            Information and systems are available to personnel who require access when needed. We ensure business
                            continuity through redundancy, disaster recovery, and robust infrastructure design.
                        </p>
                    </div>
                </div>


                {/* 6 card */}
                <div className='py-16'>
                    {/* title */}
                    <div className='mb-12'>
                        <h1 className='text-[30px] md:text-[40px] font-bold text-center'>Compliance and Certifications</h1>
                        <p className='text-[16px] mt-3'>Vijilan maintains compliance with industry-leading security standards and regulations, providing our customers with confidence in our security posture and operational excellence.</p>
                    </div>

                    {/* card */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1st */}
                        <div className="relative lg:h-[390px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="w-[110px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                                <img src={lock} alt="" />
                            </div>
                            <h3 className="text-[24px] font-medium text-white mb-3">SOC 2 Type II</h3>
                            <p className="text-white text-[18px] text-center">
                                Independently audited security <br /> controls covering security, availability, <br /> processing integrity, confidentiality, <br /> and privacy.
                            </p>
                        </div>

                        <div className="relative lg:h-[300px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="w-[90px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                                <img src={target} alt="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3">ISO 27001</h3>
                            <p className="text-white text-[18px] text-center">
                                International standard for information <br /> security management systems (ISMS) <br /> demonstrating systematic approach to <br /> security.
                            </p>
                        </div>

                        <div className="relative lg:h-[434px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="w-[130px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                                <img src={rocket} alt="" />
                            </div>
                            <h3 className="text-[23px] font-bold text-white mb-3 text-center">HIPAA Ready</h3>
                            <p className="text-white text-[18px] text-center">
                                Comprehensive controls and <br /> procedures to support healthcare <br />organizations' HIPAA compliance <br /> requirements.
                            </p>
                        </div>

                        <div className="relative lg:-mt-[40px] lg:h-[335px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="w-[156px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                                <img src={sheild} alt="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3">PCI DSS</h3>
                            <p className="text-white text-[18px] text-center">
                                Payment Card Industry Data Security <br /> Standard compliance for handling <br /> cardholder data securely.
                            </p>
                        </div>
                        {/* 5th */}
                        <div className="relative lg:-mt-[130px] lg:h-[270px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="w-[110px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                                <img src={task} alt="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3">GDPR Compliant</h3>
                            <p className="text-white text-[18px] text-center">
                                Full compliance with European General <br /> Data Protection Regulation for <br /> customer data privacy and protection.
                            </p>
                        </div>

                        <div className="relative lg:h-[312px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="w-[197px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                                <img src={chain} alt="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3">CMMC Ready</h3>
                            <p className="text-white text-center text-[14px]">
                                Cybersecurity Maturity Model <br /> Certification readiness for supporting <br /> Department of Defense contractors.
                            </p>
                        </div>
                    </div>
                </div>

                {/* security all content */}
                <div className="max-w-4xl mx-auto ">
                    {/* Information Security Program Scope */}
                    <section>
                        <h1 className="text-[24px] font-medium">information security program scope</h1>
                        <p className="text-[15px]">
                            our comprehensive information security program applies to all aspects of our operations and extends to our
                            entire ecosystem:
                        </p>

                        <h2 className="text-[15px] font-medium">organizational scope</h2>
                        <ul className="list-disc list-inside space-y-2 text-[15px] pl-4">
                            <li>
                                all vijilan employees: every team member is responsible for protecting company and customer information
                                assets
                            </li>
                            <li>
                                third-party vendors: contractors and service providers must meet our security standards and undergo
                                security assessments
                            </li>
                            <li>
                                customer environments: security controls extend to all customer data and systems under our management
                            </li>
                            <li>
                                business partners: channel partners and technology integrators participate in our security ecosystem
                            </li>
                        </ul>

                        <h2 className="text-[15px] font-medium">technical scope</h2>
                        <ul className="list-disc list-inside space-y-2 text-[15px] pl-4">
                            <li>information systems: all systems operated by vijilan or contracted with third parties</li>
                            <li>cloud infrastructure: aws-hosted environments with comprehensive security controls</li>
                            <li>customer data: all information provided by or collected from customers</li>
                            <li>network infrastructure: complete network security including perimeter and internal controls</li>
                        </ul>

                        <h2 className="text-[15px] font-medium">risk-based security approach</h2>
                        <p className="text-[15px]">
                            vijilan employs a systematic, risk-based approach to information security that enables us to prioritize
                            resources and focus on the most critical threats to our operations and customer data.
                        </p>

                        <h2 className="text-[15px] font-medium">risk assessment process</h2>
                        <ul className="list-disc list-inside space-y-2 text-[15px] pl-4">
                            <li>asset identification: comprehensive inventory of all information assets and their business value</li>
                            <li>threat analysis: regular assessment of current and emerging threats to our environment</li>
                            <li>vulnerability assessment: systematic identification of potential security weaknesses</li>
                            <li>impact analysis: evaluation of potential business impact from security incidents</li>
                            <li>risk treatment: implementation of appropriate controls based on risk levels</li>
                        </ul>
                    </section>

                    {/* Continuous Risk Monitoring Callout */}
                    <div className=" rounded-[24px] p-2 text-center border my-6">
                        <h2 className="text-[15px] font-medium mb-3">Continuous Risk Monitoring</h2>
                        <p className="text-[15px]">
                            Our security team continuously monitors the threat landscape and adjusts our security posture accordingly.
                            We conduct quarterly risk assessments and annual comprehensive security reviews to ensure our controls
                            remain effective against evolving threats.
                        </p>
                    </div>

                    {/* Security Awareness and Training */}
                    <section>
                        <h1 className="text-[24px] font-bold ">Security Awareness and Training</h1>
                        <p className="text-[16px] mb-2">
                            Human factors are often the weakest link in cybersecurity. Vijilan maintains a comprehensive security
                            awareness program to ensure all personnel understand their role in protecting information assets.
                        </p>

                        <h2 className="text-[24px] font-medium">Training Program Components</h2>
                        <ul className="list-disc list-inside space-y-2 text-[16px] pl-4 mb-2">
                            <li>Annual Security Training: Mandatory online security awareness training for all employees</li>
                            <li>New Employee Onboarding: Security awareness sessions during employee induction process</li>
                            <li>Role-Specific Training: Specialized training for employees with access to sensitive systems</li>
                            <li>Phishing Simulation: Regular simulated phishing exercises to test and improve awareness</li>
                            <li>Incident Response Training: Specialized training for security team members</li>
                        </ul>
                    </section>

                    {/* Continuous Improvement */}
                    <section>
                        <h1 className="text-[24px] font-bold">Continuous Improvement</h1>
                        <p className="text-[16px]">
                            Security is not a destination but a journey. Vijilan is committed to continuously enhancing our security
                            posture through systematic improvement processes.
                        </p>

                        <h2 className="text-[16px] font-medium ">Improvement Initiatives</h2>
                        <ul className="list-disc list-inside space-y-2 text-[16px] pl-4 mb-2">
                            <li>Policy Enhancement: Regular review and update of security policies and procedures</li>
                            <li>Best Practice Alignment: Ongoing alignment with ISO/IEC 27001 and other industry standards</li>
                            <li>Proactive Security: Shift from reactive to proactive security measures</li>
                            <li>Measurable Security: Implementation of security metrics and KPIs for data-driven decisions</li>
                            <li>Technology Innovation: Adoption of emerging security technologies and methodologies</li>
                        </ul>
                    </section>

                    {/* Legal and Contractual Compliance */}
                    <section>
                        <h1 className="text-[24px] font-bold ">Legal and Contractual Compliance</h1>
                        <p className="text-[16px]">
                            Vijilan is committed to protecting sensitive information from unauthorized disclosure and ensuring
                            compliance with all applicable legal and contractual requirements.
                        </p>

                        <h2 className="text-[16px] font-medium ">Regulatory Compliance</h2>
                        <ul className="list-disc list-inside space-y-2 text-[16px] pl-4">
                            <li>International Standards: Compliance with current international information security standards</li>
                            <li>Regional Regulations: Adherence to data protection laws in all jurisdictions where we operate</li>
                            <li>
                                Industry Requirements: Compliance with sector-specific security requirements (healthcare, financial
                                services, etc.)
                            </li>
                            <li>Customer Contracts: Meeting all security obligations specified in customer agreements</li>
                        </ul>
                    </section>

                    {/* Regulatory Change Management Callout */}
                    <div className="p-2 text-center border rounded-[24px] my-6">
                        <h2 className="text-[16px] font-medium mb-3">Regulatory Change Management</h2>
                        <p className="text-[16px]">
                            We actively monitor changes in regulations and international standards, incorporating new requirements into
                            our processes to ensure continuous compliance. Our legal and compliance team conducts quarterly reviews of
                            regulatory changes affecting our operations.
                        </p>
                    </div>

                    {/* Incident Response and Business Continuity */}
                    <section>
                        <h1 className="text-[24px] font-bold">
                            Incident Response and Business Continuity
                        </h1>
                        <p className="text-[16px] mb-2">
                            Vijilan maintains comprehensive incident response and business continuity capabilities to ensure minimal
                            impact from security events and operational disruptions.
                        </p>

                        <h2 className="text-[24px] font-medium">Incident Response Capabilities</h2>
                        <ul className="list-disc list-inside space-y-2 text-[16px] pl-4 mb-2">
                            <li>24x7 SOC: Round-the-clock security operations center with expert analysts</li>
                            <li>Automated Response: Advanced automation for rapid threat containment and remediation</li>
                            <li>Forensic Analysis: Digital forensics capabilities for incident investigation</li>
                            <li>Communication Plans: Structured communication procedures for stakeholder notification</li>
                            <li>Recovery Procedures: Comprehensive procedures for system and data recovery</li>
                        </ul>
                    </section>

                    {/* Vendor Risk Management */}
                    <section>
                        <h1 className="text-[24px] font-bold">Vendor Risk Management</h1>
                        <p className="text-[16px] mb-2">
                            Our supply chain security program ensures that third-party vendors meet our security standards and do not
                            introduce additional risk to our operations or customer data.
                        </p>

                        <h2 className="text-[24px] font-bold">Vendor Security Requirements</h2>
                        <ul className="list-disc list-inside space-y-2 text-[16px] pl-4 mb-2">
                            <li>Security Assessments: Comprehensive security evaluations for all critical vendors</li>
                            <li>Contractual Obligations: Security requirements included in all vendor agreements</li>
                            <li>Ongoing Monitoring: Regular reassessment of vendor security posture</li>
                            <li>Incident Coordination: Procedures for managing security incidents involving vendors</li>
                        </ul>
                    </section>

                    {/* Data Protection and Privacy */}
                    <section>
                        <h1 className="text-[24px] font-bold">Data Protection and Privacy</h1>
                        <p className="text-[16px] mb-2">
                            Customer data protection is at the core of our security program. We implement comprehensive controls to
                            ensure customer information remains secure and private.
                        </p>

                        <h2 className="text-[24px] font-bold">Data Protection Measures</h2>
                        <ul className="list-disc list-inside space-y-2 text-[16px] pl-4 mb-2">
                            <li>Encryption: End-to-end encryption for data in transit and at rest</li>
                            <li>Access Controls: Strict role-based access controls with principle of least privilege</li>
                            <li>Data Classification: Systematic classification and handling of sensitive information</li>
                            <li>Retention Policies: Clear data retention and disposal procedures</li>
                            <li>Privacy by Design: Privacy considerations integrated into all system designs</li>
                        </ul>
                    </section>

                    {/* Security Enforcement */}
                    <section>
                        <h1 className="text-[24px] font-bold">Security Enforcement</h1>
                        <p className="text-[16px] mb-2">
                            Vijilan maintains clear enforcement mechanisms to ensure compliance with security policies and procedures
                            across the organization.
                        </p>

                        <h2 className="text-[24px] font-bold">Enforcement Mechanisms</h2>
                        <ul className="list-disc list-inside space-y-2 text-[16px] pl-4 mb-2">
                            <li>Policy Violations: Disciplinary action for employees who violate security policies</li>
                            <li>Access Reviews: Regular review of user access rights and privileges</li>
                            <li>Security Audits: Internal and external audits to verify compliance</li>
                            <li>Performance Metrics: Security performance indicators tied to employee evaluations</li>
                        </ul>
                    </section>

                    {/* Security Questions and Concerns */}
                    <section>
                        <h1 className="text-[24px] font-medium mb-3 mt-6">Security Questions and Concerns</h1>


                        <div className="space-y-2 pl-4 border-l-4 border-[#00AEEF]">
                            <p className="mb-6 text-[20px]">
                                If you have questions about our information security program or need to report a security concern, please
                                contact our security team:
                            </p>
                            <p className='text-[20px]'>
                                Security Team:{" "}
                                <a href="mailto:security@vijilan.com" className="text-blue-400 hover:underline">
                                    security@vijilan.com
                                </a>
                            </p>
                            <p className='text-[20px]'>
                                Security Incidents:{" "}
                                <a href="mailto:incident@vijilan.com" className="text-blue-400 hover:underline">
                                    incident@vijilan.com
                                </a>
                            </p>
                            <p className='text-[20px]'>
                                Compliance Questions:{" "}
                                <a href="mailto:compliance@vijilan.com" className="text-blue-400 hover:underline">
                                    compliance@vijilan.com
                                </a>
                            </p>
                            <p className="text-[20px] font-medium mt-4">Mailing Address:</p>
                            <p className='text-[20px]'>Vijilan Security - Information Security Office</p>
                            <p className='text-[20px]'>Aventura Onyx Tower</p>
                            <p className='text-[20px]'>1010 S Federal Hwy Suite 1205</p>
                            <p className='text-[20px]'>Aventura, FL 33180</p>
                            <p className='text-[20px] pt-6 mb-6'>Phone: 1-800-VIJILAN (1-800-845-4526)</p>
                            <p className='text-[20px]'>For urgent security matters, please include "URGENT - Security Issue" in your subject line and call our 24x7 SOC at the number above.</p>
                        </div>
                    </section>

                    <div className='border border-[#00AEEF] rounded-[24px] p-2 my-10'>
                        <h2 className='text-[24px] font-medium mb-3'>Security Documentation Request</h2>
                        <p className='text-[20px]'>Customers and prospective customers can request copies of our security certifications, audit reports, and compliance documentation by contacting our compliance team. All requests are processed within 5 business days subject to appropriate confidentiality agreements.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InformationSecurity;