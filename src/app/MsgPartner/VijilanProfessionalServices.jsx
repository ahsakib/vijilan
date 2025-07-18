import React from "react";
import { ChevronDown, Play, Settings, TrendingUp, Shield, ExternalLink, Section } from "lucide-react";
import Heading_Btn from "@components/Heading_Btn";
import { Link } from "react-router-dom";


const ButtonWithGeradiant = ({ btn }) => {
  return <button
    className="p-[18px] text-lg font-medium  text-white inline-flex items-center space-x-3 bg-transparent rounded-lg"
    style={{
      border: '1px solid',
      borderImageSource: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
      borderImageSlice: 1,
      borderRadius: '8px',
    }}
  >
    <span className="uppercase">{btn}</span>

  </button>
}
// Custom Button Component
function Button({ className = "", variant = "default", size = "default", children, ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const sizeStyles = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-base",
  };

  const variantStyles = {
    default: "bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500",
    outline:
      "border border-teal-400 bg-transparent !text-blue-400 hover:bg-teal-400 hover:text-white focus-visible:ring-teal-400",
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

// Custom Card Components
function Card({ className = "", children, ...props }) {
  const cardClassName =
    `rounded-lg border border-[#133A55]  bg-[#133A55]  backdrop-blur-sm shadow-lg ${className}`.trim();

  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  const contentClassName = `p-6 ${className}`.trim();

  return (
    <div className={contentClassName} {...props}>
      {children}
    </div>
  );
}

export default function VijilianLanding() {
  return (
    <div className="min-h-screen max-w-[90%] mx-auto">


      {/* Hero Section */}
      <section>
        <Heading_Btn
          h1="Expert Implementation & Management for Your Security Stack"
          desc="Maximize your technology investment. Our certified experts deliver seamless implementation, optimization, and
          ongoing management for CrowdStrike, CriblI, and CoreLight platforms, turning powerful tools into strategic
          assets."
          btn1="WATCH THE SERVICE OVERVIEW"
          url={"/videos-library"}
        />
      </section>




      {/* End-to-End Expert Services */}
      <section className="py-16 px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">End-to-End Expert Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">


          <Card>
            <CardContent className="text-center">
              <Settings className="w-12 h-12 !text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Implementation & Installation</h3>
              <p className="text-gray-300 text-sm">
                Expert deployment, configuration, and integration of enterprise-level security and observability
                platforms to get you up and running quickly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center">
              <TrendingUp className="w-12 h-12 !text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Optimization & Health Checks</h3>
              <p className="text-gray-300 text-sm">
                Ensuring your security technologies perform optimally and provide maximum value aligned with your
                business goals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center">
              <Shield className="w-12 h-12 !text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Ongoing Management</h3>
              <p className="text-gray-300 text-sm">
                Day-to-day operations, maintenance, and support to ensure your security stack remains effective and
                up-to-date.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Deep Expertise Section */}
      <section className="py-16 px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">Deep Expertise in Leading Technologies</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* CriblI Professional Services */}
          <Card className=" bg-[#082235]">
            <CardContent>
              <h3 className="text-xl font-bold !text-blue-400 mb-4">• CriblI Professional Services</h3>
              <p className="!text-blue-300 font-semibold mb-2">Unlock the Full Power of Your CriblI and CriblI</p>
              <p className="text-gray-300 text-sm mb-4">
                We implement, manage, and optimize CriblI Stream, Edge, Lake, and Search to streamline your data flows,
                reduce costs, and enhance observability.
              </p>
              <ul className="text-gray-300 text-sm space-y-1 mb-6">
                <li>• SIEM Migration Services</li>
                <li>• Storage Cost Reduction</li>
                <li>• Agent Aggregation with CriblI Edge</li>
                <li>• Kubernetes Instrumentation</li>
              </ul>
              <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <ButtonWithGeradiant btn="REQUEST A CRIBL CONSULTATION" />
              </Link>
            </CardContent>
          </Card>

          {/* CrowdStrike Falcon Professional Services */}
          <Card className=" bg-[#082235]" >
            <CardContent>
              <h3 className="text-xl font-bold !text-blue-400 mb-4">• CrowdStrike Falcon Professional Services</h3>
              <p className="!text-blue-300 font-semibold mb-2">Maximize Your CrowdStrike Falcon Investment</p>
              <p className="text-gray-300 text-sm mb-4">
                Vijilan provides expert implementation and ongoing management for CrowdStrike Falcon modules, from
                Next-Gen AV to Identity Protection and Data Security.
              </p>
              <ul className="text-gray-300 text-sm space-y-1 mb-6">
                <li>• Falcon Endpoint Protection Implementation</li>
                <li>• Falcon Identity Protection Implementation</li>
                <li>• Falcon Cloud Security Deployment</li>
                <li>• Falcon LogScale Implementation & Management</li>
                <li>• Platform Health Checks & Optimization</li>
              </ul>
              <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <ButtonWithGeradiant btn="OPTIMIZE YOUR CROWDSTRIKE DEPLOYMENT"/>
              </Link>
            </CardContent>
          </Card>

          {/* CriblI Professional Services (Second) */}
          <Card className=" bg-[#082235]" >
            <CardContent>
              <h3 className="text-xl font-bold !text-blue-400 mb-4">• CriblI Professional Services</h3>
              <p className="!text-blue-300 font-semibold mb-2">Unlock the Full Power of Your CriblI and CriblI</p>
              <p className="text-gray-300 text-sm mb-4">
                We implement, manage, and optimize CriblI Stream, Edge, Lake, and Search to streamline your data flows,
                reduce costs, and enhance observability.
              </p>
              <ul className="text-gray-300 text-sm space-y-1 mb-6">
                <li>• NDR Sensor Deployment</li>
                <li>• Network Traffic Analysis</li>
                <li>• Threat Hunting Workshops</li>
              </ul>
              <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <ButtonWithGeradiant btn="DISCUSS YOUR NDR PROJECT"/>
              </Link>
            </CardContent>
          </Card>

          {/* CoreLight Professional Services */}
          <Card className=" bg-[#082235]" >
            <CardContent>
              <h3 className="text-xl font-bold !text-blue-400 mb-4">• CoreLight Professional Services</h3>
              <p className="!text-blue-300 font-semibold mb-2">Gain Unparalleled Visibility into Your Network Traffic</p>
              <p className="text-gray-300 text-sm mb-4">
                Our certified experts implement, manage, and optimize CoreLight's industry-leading Network Detection and
                Response (NDR) platform. We transform raw network traffic into comprehensive evidence and actionable
                insights to stop advanced threats that are invisible to endpoint-only solutions.
              </p>
              <ul className="text-gray-300 text-sm space-y-1 mb-6">
                <li>• NDR Sensor Deployment & Configuration</li>
                <li>• Encrypted Traffic Analysis</li>
                <li>• Network-based Threat Hunting</li>
                <li>• Incident Response with Network Forensics</li>
                <li>• Integration with SIEM & XDR Platforms</li>
              </ul>
              <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <ButtonWithGeradiant btn="REQUEST A CORELIGHT CONSULTATION"/>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Proven Results in Complex Environments</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold !text-blue-400 mb-4">
                  Success Story: How a Major Retailer Reduced SIEM Costs by 40%
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Using Vijilan's CriblI Implementation Service, a Fortune 500 retailer was able to intelligently route
                  and filter their security data before ingestion. This not only cut their Splunk licensing costs by 40%
                  but also improved their threat detection capabilities by reducing data noise.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">40%</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">60%</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">90%</div>
                </div>
              </div>

              <div className="text-center">
                <Link to={"/case-studies"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    READ THE FULL CASE STUDY
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}

      <Heading_Btn
        h1="Let's Build a More Powerful & Efficient Security Architecture."
        desc=" Whether you're migrating your SIEM, deploying new sensors, or looking to optimize your data strategy, our
          experts are here to help. Schedule a free, no-obligation architectural review today."
        btn1="SCHEDULE ARCHITECTURE REVIEW"
        url={"/contact"}
      />

    </div >
  );
}