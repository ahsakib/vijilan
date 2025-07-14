import React from 'react';
import { Cookie } from "lucide-react"
import Checkbox from 'daisyui/components/checkbox';

const CookiePrivacy = () => {
    return (
        <div className='container mx-auto md:px-6'>
            {/* hero section */}
            <section className='py-16'>
                <div className=''>
                    <h1 className=' text-3xl md:text-4xl lg:text-[48px] font-bold text-center'>Cookie Policy</h1>
                    <p className='text-[18px] text-center mt-10'>This Cookie Policy explains how Vijilan Security uses cookies and similar tracking <br /> technologies on our website and services.</p>
                </div>
            </section>


            {/*  */}
            <section className='py-16'>
                {/* last update card */}
                <div className='h-[142px]' style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <h2 className='text-[18px] flex items-center justify-center w-full h-full uppercase'>Last Updated: January 15, 2025</h2>
                </div>


                {/* policy content */}
                <div className="py-10 mt-10" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="max-w-4xl mx-auto ">
                        {/* Section 1: What Are Cookies */}
                        <section>
                            <h2 className="text-[24px] font-medium mb-4 text-white">1. What Are Cookies</h2>
                            <p className="text-[16px]">
                                Cookies are small text files that are placed on your device (computer, smartphone, tablet, or other
                                electronic device) when you visit our website. They are widely used to make websites work more efficiently
                                and to provide information to website owners about user behavior and preferences.
                            </p>
                            <p className="text-[16px] font-medium">Cookies typically contain:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>A unique identifier assigned to your device</li>
                                <li>The domain name of the website that created the cookie</li>
                                <li>Information about your browsing activity and preferences</li>
                                <li>Expiration date for the cookie</li>
                            </ul>
                        </section>

                        {/* Section 2: Types of Cookies We Use */}
                        <section>
                            <h2 className="text-[24px] font-medium mb-4 text-white mt-5">2. Types of Cookies We Use</h2>
                            <h3 className="text-[16px]">Essential Cookies</h3>
                            <p className="text-[16px]">
                                These cookies are necessary for our website to function properly and cannot be disabled in our systems. They
                                are usually set in response to actions you take, such as setting privacy preferences, logging in, or filling
                                out forms.
                            </p>

                            {/* Essential Cookies Table */}
                            <div className="overflow-x-auto my-8">
                                <table className="w-full" style={{
                                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                }}>
                                    <thead>
                                        <tr className="">
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">COOKIE NAME</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">PURPOSE</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">DURATION</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">TYPE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">vijillan_session</td>
                                            <td className="py-3 px-4">maintains user session and authentication</td>
                                            <td className="py-3 px-4">SESSION</td>
                                            <td className="py-3 px-4">essential</td>
                                        </tr>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">security_token</td>
                                            <td className="py-3 px-4">csrf protection and form security</td>
                                            <td className="py-3 px-4">SESSION</td>
                                            <td className="py-3 px-4">essential</td>
                                        </tr>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">cookie_consent</td>
                                            <td className="py-3 px-4">remembers your cookie preferences</td>
                                            <td className="py-3 px-4">1 YEAR</td>
                                            <td className="py-3 px-4">essential</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-[24px] font-medium mb-3 text-white">Analytics and Performance Cookies</h3>
                            <p className="text-[16px]">
                                These cookies help us understand how visitors interact with our website by collecting and reporting
                                information anonymously. This helps us improve our website&apos;s performance and user experience.
                            </p>

                            {/* Analytics Cookies Table */}
                            <div className="overflow-x-auto my-8">
                                <table className="w-full" style={{
                                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                }}>
                                    <thead>
                                        <tr className="">
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">COOKIE NAME</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">PURPOSE</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">DURATION</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">TYPE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">_ga</td>
                                            <td className="py-3 px-4">google analytics - distinguishes unique users</td>
                                            <td className="py-3 px-4">2 YEARS</td>
                                            <td className="py-3 px-4">google</td>
                                        </tr>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">_gid</td>
                                            <td className="py-3 px-4">google analytics - distinguishes unique users</td>
                                            <td className="py-3 px-4">24 HOURS</td>
                                            <td className="py-3 px-4">google</td>
                                        </tr>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">_gat</td>
                                            <td className="py-3 px-4">google analytics - throttles request rate</td>
                                            <td className="py-3 px-4">1 MINUTE</td>
                                            <td className="py-3 px-4">google</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-[24px] font-medium mb-3 text-white">Functional Cookies</h3>
                            <p className="text-[16px]">
                                These cookies enable enhanced functionality and personalization, such as remembering your preferences and
                                providing customized content.
                            </p>

                            {/* Functional Cookies Table */}
                            <div className="overflow-x-auto my-8">
                                <table className="w-full" style={{
                                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                }}>
                                    <thead>
                                        <tr className="">
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">COOKIE NAME</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">PURPOSE</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">DURATION</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">TYPE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">theme_preference</td>
                                            <td className="py-3 px-4">remembers your light/dark theme choice</td>
                                            <td className="py-3 px-4">6 MONTHS</td>
                                            <td className="py-3 px-4">functional</td>
                                        </tr>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">language_pref</td>
                                            <td className="py-3 px-4">stores your language preference</td>
                                            <td className="py-3 px-4">1 YEAR</td>
                                            <td className="py-3 px-4">functional</td>
                                        </tr>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">demo_viewed</td>
                                            <td className="py-3 px-4">tracks demo completion for better user experience</td>
                                            <td className="py-3 px-4">30 DAYS</td>
                                            <td className="py-3 px-4">functional</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-[24px] font-medium mb-3 text-white">Marketing and Advertising Cookies</h3>
                            <p className="text-[16px] mb-4">
                                These cookies track your browsing habits to enable us to show advertising that is more likely to be of
                                interest to you. They may be used to build a profile of your interests and show relevant advertisements on
                                other sites.
                            </p>

                            {/* Opt-In Required Card */}
                            <div className=" border rounded-[24px] mb-2">
                                <div className="p-6 text-center">
                                    <h4 className="text-[24px] font-medium mb-2 text-white">Opt-In Required</h4>
                                    <p className="text-[16px]">
                                        Marketing cookies are only set with your explicit consent. You can withdraw consent at any time through
                                        our cookie preference center.s.
                                    </p>
                                </div>
                            </div>

                            {/* Marketing Cookies Table */}
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full " style={{
                                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                }}>
                                    <thead>
                                        <tr className="">
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">COOKIE PROVIDER</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">PURPOSE</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">DURATION</th>
                                            <th className="py-3 px-4 font-medium text-[15px] uppercase tracking-wider">TYPE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">linkedin insight tag</td>
                                            <td className="py-3 px-4">conversion tracking and retargeting</td>
                                            <td className="py-3 px-4">2 YEARS</td>
                                            <td className="py-3 px-4">
                                                <a href="#" className="underline text-blue-400">
                                                    linkedin cookie policy
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">google ads</td>
                                            <td className="py-3 px-4">conversion tracking and remarketing</td>
                                            <td className="py-3 px-4">90 DAYS</td>
                                            <td className="py-3 px-4">
                                                <a href="#" className="underline text-blue-400">
                                                    google cookie policy
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="border text-[15px] font-medium">
                                            <td className="py-3 px-4">facebook pixel</td>
                                            <td className="py-3 px-4">conversion tracking and custom audiences</td>
                                            <td className="py-3 px-4">90 DAYS</td>
                                            <td className="py-3 px-4">
                                                <a href="#" className="underline text-blue-400">
                                                    facebook cookie policy
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 3: Similar Technologies */}
                        <section>
                            <h2 className="text-[24px] font-medium text-white">3. similar technologies</h2>
                            <h3 className="text-[16px] font-medium text-white">web beacons and pixel tags</h3>
                            <p className="text-[16px]">
                                we may use web beacons (also known as pixel gifs) to track user interactions with our emails and certain
                                pages on our website. these help us understand email effectiveness and user engagement.
                            </p>
                            <h3 className="text-[16px] font-medium text-white">local storage</h3>
                            <p className="text-[16px]">
                                on website may use local storage technologies to store information locally on your device. this information
                                is used to enhance functionality and provide a better user experience.
                            </p>
                            <h3 className="text-[16px] font-medium text-white">server logs</h3>
                            <p className="text-[16px]">
                                our servers automatically collect certain information when you visit our website, including your IP address,
                                browser type, operating system, and pages visited. this information is used for security, analytics, and
                                performance optimization.
                            </p>
                        </section>

                        {/* Section 4: How We Use Cookies */}
                        <section>
                            <h2 className="text-[24px] font-medium mt-4 text-white">4. How We Use Cookies</h2>
                            <p className="text-[16px]">We use cookies and similar technologies for the following purposes:</p>
                            <span className="text-[16px] font-medium">Essential Website Operations</span>

                            <ul className="list-disc list-inside ml-4 space-y-1 mb-3">
                                <li>Maintaining user sessions and authentication</li>
                                <li>Providing security features and preventing fraud</li>
                                <li>Remembering your preferences and settings</li>
                                <li>Enabling core website functionality</li>
                            </ul>

                            <span className="text-[16px] font-medium">Performance and Analytics</span>
                            <ul className="list-disc list-inside ml-4 space-y-1 mb-3">
                                <li>Understanding how visitors use our website</li>
                                <li>Identifying areas for website improvement</li>
                                <li>Measuring the effectiveness of our content</li>
                                <li>Detecting and preventing technical issues</li>
                            </ul>

                            <span className="text-[16px] font-medium">Personalization</span>
                            <ul className="list-disc list-inside ml-4 space-y-1 mb-3">
                                <li>Customizing content based on your interests</li>
                                <li>Remembering your preferences across visits</li>
                                <li>Providing relevant product recommendations</li>
                                <li>Adapting the user interface to your needs</li>
                            </ul>

                            <span className="text-[16px] font-medium">Marketing and Communication</span>
                            <ul className="list-disc list-inside ml-4 space-y-1 mb-3">
                                <li>Delivering targeted advertising content</li>
                                <li>Measuring advertising campaign effectiveness</li>
                                <li>Building audience segments for marketing</li>
                                <li>Preventing ad fraud and invalid traffic</li>
                            </ul>

                        </section>

                        {/* Section 5: Legal Basis for Cookie Use */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-white">5. Legal Basis for Cookie Use</h2>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Consent</h3>
                            <p className="mb-4">
                                For non-essential cookies, particularly marketing and analytics cookies, we rely on your explicit consent.
                                You can withdraw this consent at any time through our cookie preference center.
                            </p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Legitimate Interest</h3>
                            <p className="mb-4">
                                For certain analytics and functional cookies, we may rely on legitimate interest where the processing is
                                necessary for our legitimate business purposes and does not override your fundamental rights and freedoms.
                            </p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Contractual Necessity</h3>
                            <p className="mb-4">
                                Essential cookies that are necessary for providing our services are used based on contractual necessity and
                                our legitimate interest in operating our website securely and effectively.
                            </p>
                        </section>

                        {/* Section 6: Third-Party Cookies */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-white">6. Third-Party Cookies</h2>
                            <p className="mb-2">
                                Our website may contain content from third-party services that set their own cookies. These include:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>
                                    <span className="font-semibold">Social Media Platforms</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li>LinkedIn: Social sharing buttons and professional networking features</li>
                                        <li>Twitter: Tweet embedding and social sharing functionality</li>
                                        <li>YouTube: Video content embedding and playback</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">Analytics Services</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li>Google Analytics: Website traffic analysis and user behavior tracking</li>
                                        <li>Hotjar: User experience analytics and heat mapping</li>
                                        <li>Mixpanel: Product analytics and user engagement tracking</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">Marketing Platforms</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li>Hubspot: CRM integration and marketing automation</li>
                                        <li>Salesforce: Customer relationship management</li>
                                        <li>Pardot: B2B marketing automation and lead tracking</li>
                                    </ul>
                                </li>
                            </ul>

                            {/* Third-Party Responsibility Card */}
                            <div className="bg-[#1a1a3a] border border-[#2a2a5a] text-gray-200 mt-8">
                                <div className="p-6 text-center">
                                    <h4 className="text-xl font-bold mb-2 text-white">Third-Party Responsibility</h4>
                                    <p className="text-sm">
                                        Third-party cookies are governed by the respective privacy policies of those companies. We encourage you
                                        to review their policies to understand how they collect and use your information.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Your Cookie Choices and Controls */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-white">7. Your Cookie Choices and Controls</h2>
                            <p className="mb-4">
                                You can manage your cookie preferences at any time through our cookie preference center, accessible from the
                                footer of our website or by clicking the &quot;Cookie Settings&quot; link.
                            </p>

                            {/* Cookie Preferences Card */}
                            <div className="bg-[#1a1a3a] border border-[#2a2a5a] text-gray-200 mb-8">
                                <div className="flex flex-row items-center gap-3 pb-4">
                                    <Cookie className="w-6 h-6 text-orange-400" />
                                    <h1 className="text-white">Cookie Preferences</h1>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm mb-2">
                                        We use cookies to enhance your experience on our website. You can choose which categories of cookies you
                                        want to accept:
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">

                                            <input
                                                id="essential"
                                                checked
                                                disabled
                                                className="border-gray-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                                            />
                                            <label
                                                htmlFor="essential"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                <span className="font-bold">Essential:</span> Required for website functionality (always active)
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                id="analytics"
                                                className="border-gray-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                                            />
                                            <label
                                                htmlFor="analytics"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                <span className="font-bold">Analytics:</span> Help us understand website usage
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                id="functional"
                                                className="border-gray-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                                            />
                                            <label
                                                htmlFor="functional"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                <span className="font-bold">Functional:</span> Remember your preferences
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                id="marketing"
                                                className="border-gray-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                                            />
                                            <label
                                                htmlFor="marketing"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                <span className="font-bold">Marketing:</span> Provide relevant advertisements
                                            </label>
                                        </div>
                                    </div>
                                    <p className="text-sm mt-4">You can change these settings at any time in our Cookie Preference Center.</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold mb-3 text-white">Browser Controls</h3>
                            <p className="mb-4">
                                Most web browsers allow you to control cookies through their settings preferences. Here&apos;s how to manage
                                cookies in popular browsers:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>
                                    <span className="font-semibold">Chrome:</span> Settings &rarr; Privacy & Security &rarr; Cookies and other
                                    site data
                                </li>
                                <li>
                                    <span className="font-semibold">Firefox:</span> Settings &rarr; Privacy & Security &rarr; Cookies and Site
                                    Data
                                </li>
                                <li>
                                    <span className="font-semibold">Safari:</span> Preferences &rarr; Privacy &rarr; Manage Website Data
                                </li>
                                <li>
                                    <span className="font-semibold">Edge:</span> Settings &rarr; Cookies and site permissions &rarr; Cookies
                                    and site data
                                </li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6 text-white">Opt-Out Tools</h3>
                            <p className="mb-4">You can opt out of certain third-party tracking through these industry tools:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>
                                    <a href="#" className="underline text-blue-400">
                                        Digital Advertising Alliance Opt-Out
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="underline text-blue-400">
                                        Network Advertising Initiative Opt-Out
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="underline text-blue-400">
                                        Your Online Choices (EU)
                                    </a>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6 text-white">Mobile Device Controls</h3>
                            <p className="mb-4">On mobile devices, you can control tracking through device settings:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>
                                    <span className="font-semibold">iOS:</span> Settings &rarr; Privacy & Security &rarr; Tracking &rarr;
                                    Limit Ad Tracking
                                </li>
                                <li>
                                    <span className="font-semibold">Android:</span> Settings &rarr; Google &rarr; Ads &rarr; Opt out of Ads
                                    Personalization
                                </li>
                            </ul>
                        </section>

                        {/* Section 8: Cookie Retention and Data Security */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-white">8. Cookie Retention and Data Security</h2>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Retention Periods</h3>
                            <p className="mb-4">Different types of cookies have different retention periods:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Session Cookies: Deleted when you close your browser</li>
                                <li>Persistent Cookies: Remain until expiration date or manual deletion</li>
                                <li>Essential Cookies: Typically 1 session to 1 year</li>
                                <li>Analytics Cookies: Typically 24 hours to 2 years</li>
                                <li>Marketing Cookies: Typically 30 days to 2 years</li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-3 mt-6 text-white">Data Security</h3>
                            <p className="mb-4">We implement appropriate technical and organizational measures to protect cookie data:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Encryption of sensitive cookie data</li>
                                <li>Secure transmission protocols (HTTPS)</li>
                                <li>Regular security assessments and updates</li>
                                <li>Access controls and audit logging</li>
                                <li>Compliance with industry security standards</li>
                            </ul>
                        </section>

                        {/* Section 9: International Data Transfers */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-white">9. International Data Transfers</h2>
                            <p className="mb-4">
                                Some of our third-party cookie providers may transfer data to countries outside your jurisdiction. We ensure
                                appropriate safeguards are in place:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Adequacy Decisions</li>
                                <p className="ml-4">
                                    We ensure data transfers to countries with adequacy decisions from relevant data protection authorities.
                                </p>
                                <li>Standard Contractual Clauses</li>
                                <p className="ml-4">
                                    For transfers to countries without adequacy decisions, we use Standard Contractual Clauses (SCCs) or
                                    similar mechanisms to ensure adequate protection.
                                </p>
                                <li>Certification Programs</li>
                                <p className="ml-4">
                                    We work with providers that participate in recognized certification programs such as the EU-US Data
                                    Privacy Framework where applicable.
                                </p>
                            </ul>
                        </section>

                        {/* Section 10: Children's Privacy */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-white">10. Children&apos;s Privacy</h2>
                            <p className="mb-4">
                                Our website and services are not directed to children under 18 years of age. We do not knowingly collect
                                personal information from children through cookies or any other means. If we become aware that we have
                                collected information from a child under 18, we will take steps to delete such information promptly.
                            </p>
                            <p className="mb-2">Parents and guardians can help protect children&apos;s privacy by:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Supervising children&apos;s online activities</li>
                                <li>Using parental control software</li>
                                <li>Configuring browser settings to block or limit cookies</li>
                                <li>Educating children about online privacy</li>
                            </ul>
                        </section>

                        {/* Section 11: Updates to This Cookie Policy */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-white">11. Updates to This Cookie Policy</h2>
                            <p className="mb-4">
                                We may update this Cookie Policy from time to time to reflect changes in our practices, legal requirements,
                                or the technologies we use. When we make material changes, we will:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Post the updated policy on our website</li>
                                <li>Update the &quot;Last Updated&quot; date at the top of this policy</li>
                                <li>Notify you through our website banner or email if required by law</li>
                                <li>Request new consent for new types of cookies if required</li>
                            </ul>
                            <p className="mt-4">
                                We encourage you to review this Cookie Policy periodically to stay informed about our cookie practices.
                            </p>
                        </section>

                        {/* Section 12: Contact Us */}
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-white">12. Contact Us</h2>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Cookie and Privacy Questions</h3>
                            <p className="mb-4">
                                If you have questions about this Cookie Policy or wish to exercise your rights regarding cookies and
                                tracking technologies, please contact us:
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">Email:</span>{" "}
                                <a href="mailto:privacy@vijillan.com" className="underline text-blue-400">
                                    privacy@vijillan.com
                                </a>
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">Cookie Preferences:</span>{" "}
                                <a href="#" className="underline text-blue-400">
                                    Manage Cookie Settings
                                </a>
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">Mail:</span>
                            </p>
                            <address className="not-italic ml-4 space-y-1">
                                <p>Vijillan Security - Privacy Office</p>
                                <p>Aventura Onyx Tower</p>
                                <p>1010 S Federal Hwy Suite 1205</p>
                                <p>Aventura, FL 33180</p>
                            </address>
                            <p className="mt-4">
                                <span className="font-semibold">Phone:</span> 1-800-VIJILLAN (1-800-845-4526)
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CookiePrivacy;