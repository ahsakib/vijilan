import Blog from '@app/Blog/Blog';
import Blog_landing_page from '@app/Blog/Blog_landing_page';
import Home from '@app/Home/Home';
import About from '@app/About/About';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import VisilanPartner from '@app/MsgPartner/VijilanMspPartner';
import ThreatResponse from '@app/MsgPartner/threatRespondService';
import ThreatResponse2 from '@app/MsgPartner/threatRespondService2';
import VisislanProfessional from "@app/MsgPartner/VijilanProfessionalServices"
import CaseStudies from "@app/Case/CaseStudies";
import Resources from '@app/Resources/Resources';
import Vars_consultants_page from '@app/Vars_consultants_page/Vars_consultants_page';
import Automation_Focused from '@app/Automotion Focused/Automation_Focused';
import AutomationCaseStudies from '@app/Case/AutoMationCase';
import Complain_Solution from '@app/Complain Solution/Complian_Solution';
import Corrected_MSP_Program from '@app/Corrected MSP Partner Program/Corrected_MSP_Program';
import DistributionPartner from "@app/MsgPartner/DestribuationPartner"
import ManagedAutomation from "@app/Automotion Focused/ManagedAutomation"
import PlatformTechnology from "@app/Platform/PlatformTechnology"
import ManagedSiemSoc from "@app/Managed_siem_logscale/ManagedSiemSoc"
import ManagedSiemLogScaleService from '@app/Managed_siem_logscale/ManagedSiemLogScaleService';
import EnterpriseLanding from '@app/Enterprise/EnterpriseLanding';
import MidMarketEnterPrice from '@app/Managed_siem_logscale/MidMarketEnterPrice';
import MspPartnerProgramAi from '@app/Managed_siem_logscale/MspPartnerProgramAi';
import MspLaunchpad from '@app/Corrected MSP Partner Program/MspLaunchpad';
import Tier1Landing from '@app/Corrected MSP Partner Program/Tier1Landing';
import Tier3PartnerPortal from '@app/Corrected MSP Partner Program/Tier3PartnerPortal';
import Dashbord from '@app/DashBord/Page/Dashbord';
import SMB from '@app/DashBord/Page/SMB';
import MspPricingTool from '@app/Pricing-tool/MspPricingTool';
import PricingTool from '@app/Pricing-tool/PricingTool';
import ThreatremediateEssentail from '@app/Theatremediate/ThreatremediateEssentail';
import ThreatremediateRemotePricing from '@app/Theatremediate/ThreatremediateRemotePricing';
import ThreadRemediateRemoteNoPricing from '@app/Theatremediate/ThreadRemediateRemoteNoPricing';
import ThreatreMediateManagedXdr from '@app/Theatremediate/ThreatreMediateManagedXdr';
import AccessRequest from '@app/Vijilan/AccessRequest';
import FixedVijilanPortal from '@app/Vijilan/FixedVijilanPortal';
import WhyVijilanPage from '@app/Vijilan/WhyVijilanPage';
import BecomeAPartner from '@app/MsgPartner/BecomeAPartner';
import Success_study_case from '@app/DashBord/Page/Success_study_case';
import Resilience_case from '@app/DashBord/Page/Resilience_case';
import Federal_cmmc_case from '@app/DashBord/Page/Federal_cmmc_case';
import Financial_Compliance_Case from '@app/DashBord/Page/Financial_Compliance_Case';
import MSP_logscale_case from '@app/DashBord/Page/MSP_logscale_case';
import SMB_Runsomware from '@app/DashBord/Page/SMB_Runsomware';
import HealthCare_Complain_case from '@app/DashBord/Page/HealthCare_Complain_case';
import MSP_growth_case from '@app/DashBord/Page/MSP_growth_case';
import Serve from '@app/Sarve/Serve';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                // responsive done
                path: "/",
                element: <Home />,
            },
            {
                // responsive complete
                path: "blog",
                element: <Blog />,
            },
            {
                path: "about", //d
                element: <About />,
            },
            {
                // responsive done
                path: "blog-landing",
                element: <Blog_landing_page />,
            },
            {
                // responsive done //d
                path: "serve",
                element: <Serve />,
            },
            {
                // responsive done //d
                path: "resources",
                element: <Resources />,
            },
            {
                // responsive done
                path: "visilan-msg-partner",
                element: <VisilanPartner />,
            },
            {
                // responsive done
                path: "threat-respond-service",
                element: <ThreatResponse />,
            },
            {
                // responsive done
                path: "threat-respond-service-2",
                element: <ThreatResponse2 />,
            },
            {
                // responsive done
                path: "vijilan-vars-consultants-page",
                element: <Vars_consultants_page />,
            },
            {
                // responsive done //d
                path: "visilan-professional-service",
                element: <VisislanProfessional />,
            },
            {
                // responsive done  //problem ase onk
                path: "case-studies",
                element: <CaseStudies />,
            },
            {

                // responsive done
                path: "automation-case-studies",
                element: <AutomationCaseStudies />,
            },
            {

                // responsive done
                path: "automation-focused",
                element: <Automation_Focused />,
            },
            {

                // responsive done
                path: "complain-solution",
                element: <Complain_Solution />,
            },
            {

                // responsive done
                path: "corrected-msp",
                element: <Corrected_MSP_Program />,
            },
            {
                // responsive done
                path: "distribution-partner",
                element: <DistributionPartner />,
            },
            {
                // responsive done
                path: "managed-automation",
                element: <ManagedAutomation />,
            },
            {
                // responsive done
                path: "platform-technology",
                element: <PlatformTechnology />,
            },
            {

                // responsive done
                path: "managed-siem-soc",
                element: <ManagedSiemSoc />
            },
            {
                // responsive done
                path: "managed-siem-logscale-service",
                element: <ManagedSiemLogScaleService />
            },
            {
                // responsive done
                path: "enterprise-landing",
                element: <EnterpriseLanding />
            },
            {

                // responsive done
                path: "mid-market-enterprice",
                element: <MidMarketEnterPrice />
            },
            {
                // responsive done
                path: "msp-partner-program-ai",
                element: <MspPartnerProgramAi />
            },
            {
                // responsive done
                path: "msp-launchpad",
                element: <MspLaunchpad />
            },
            {
                // responsive done
                path: "tier-landing",
                element: <Tier1Landing />
            },
            {
                // responsive done
                path: "tier3-partner-portal",
                element: <Tier3PartnerPortal />
            },

            {
                // responsive done
                path: "dashbord",
                element: <Dashbord />
            },
            {
                // responsive done
                path: "case-success",
                element: <Success_study_case />
            },
            {
                // responsive done
                path: "resilience-case",
                element: <Resilience_case />
            },

            {
                // responsive done
                path: "federal-cmmc-case",
                element: <Federal_cmmc_case />
            },
            {
                // responsive done
                path: "financial-complianc-case",
                element: <Financial_Compliance_Case />
            },
            {
                // responsive done
                path: "msp-ogscale-case-study",
                element: <MSP_logscale_case />
            },
            {
                // responsive done
                path: "smb-runsomware-case-study",
                element: <SMB_Runsomware />
            },
            {
                // responsive done
                path: "health-compliance",
                element: <HealthCare_Complain_case />
            },
            {
                // responsive done
                path: "msp-growth-case",
                element: <MSP_growth_case />
            },
            {
                // responsive done
                path: "smb",
                element: <SMB />
            },
            {

                // responsive done
                path: "msp-pricing-tool",
                element: <MspPricingTool />
            },
            {

                // responsive done
                path: "pricing-tool",
                element: <PricingTool />
            },
            {

                // responsive done
                path: "threatremediate-essentail",
                element: <ThreatremediateEssentail />
            },
            {
                
                // responsive done
                path: "threatremediate-remote-pricing",
                element: <ThreatremediateRemotePricing />
            },
            {
                
                // responsive done
                path: "threatremediate-remote-no-pricing",
                element: <ThreadRemediateRemoteNoPricing />
            },
            {
                  
                // responsive done
                path: "threatremediate-managed-xdr",
                element: <ThreatreMediateManagedXdr />
            },
            {
                path: "access-request",
                element: <AccessRequest />
            },
            {
                path: "fixed-vijilan-portal",
                element: <FixedVijilanPortal />
            },
            {
                path: "why-vijilan-page",
                element: <WhyVijilanPage />
            },
            {
                path: "become-a-partner",
                element: <BecomeAPartner />
            }
        ],
    },
]);

export default router;