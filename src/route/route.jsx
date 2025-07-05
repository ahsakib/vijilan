import Blog from '@app/Blog/Blog';
import Blog_landing_page from '@app/Blog/Blog_landing_page';
import Home from '@app/Home/Home';
import About from '@app/About/About';
import Sarve from '@app/Sarve/Sarve';
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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "blog-landing",
                element: <Blog_landing_page />,
            },
            {
                path: "sarve",
                element: <Sarve />,
            },
            {
                path: "resources",
                element: <Resources />,
            },
            {
                path: "visilan-msg-partner",
                element: <VisilanPartner />,
            },
            {
                path: "threat-respond-service",
                element: <ThreatResponse />,
            },
            {
                path: "threat-respond-service",
                element: <ThreatResponse />,
            },
            {
                path: "threat-respond-service-2",
                element: <ThreatResponse2 />,
            },
            {
                path: "vijilan-vars-consultants-page",
                element: <Vars_consultants_page />,
            },
            {
                path: "visilan-professional-service",
                element: <VisislanProfessional />,
            },
            {
                path: "case-studies",
                element: <CaseStudies />,
            },
            {
                path: "automation-case-studies",
                element: <AutomationCaseStudies />,
            },
            { 
                path: "automation-focused",
                element: <Automation_Focused />,
            },
            {
                path: "complain-solution",
                element: <Complain_Solution />,
            },
            {
                path: "corrected-msp",
                element: <Corrected_MSP_Program />,
            },
            {
                path: "distribution-partner",
                element: <DistributionPartner />,
            },
            {
                path: "managed-automation",
                element: <ManagedAutomation />,
            },
            {
                path: "platform-technology",
                element: <PlatformTechnology />,
            },
            {
                path: "managed-siem-soc",
                element:<ManagedSiemSoc/>
            },
            {
                path: "managed-siem-logscale-service",
                element: <ManagedSiemLogScaleService/>
            },
            {
                path: "enterprise-landing",
                element: <EnterpriseLanding/>
            },
            {
                path: "mid-market-enterprice",
                element: <MidMarketEnterPrice/>
            },
            {
                path: "msp-partner-program-ai",
                element: <MspPartnerProgramAi/>
            },
            {
                path: "msp-launchpad",
                element: <MspLaunchpad/>
            },
            {
                path: "tier-landing",
                element: <Tier1Landing/>
            },
            {
                path: "tier3-partner-portal",
                element: <Tier3PartnerPortal/>
            },

            {
                path: "dashbord",
                element: <Dashbord/>
            },
            {
                path: "smb",
                element: <SMB/>
            },
            {
                path: "msp-pricing-tool",
                element: <MspPricingTool/>
            },
            {
                path: "pricing-tool",
                element: <PricingTool/>
            },
            {
                path: "threatremediate-essentail",
                element: <ThreatremediateEssentail/>
            },
            {
                path: "threatremediate-remote-pricing",
                element: <ThreatremediateRemotePricing/>
            },
            {
                path: "threatremediate-remote-no-pricing",
                element: <ThreadRemediateRemoteNoPricing/>
            },
            {
                path: "threatremediate-managed-xdr",
                element: <ThreatreMediateManagedXdr/>
            },
            {
                path: "access-request",
                element: <AccessRequest/>
            },
            {
                path: "fixed-vijilan-portal",
                element: <FixedVijilanPortal/>
            },
            {
                path: "why-vijilan-page",
                element: <WhyVijilanPage/>
            },
            {
                path: "become-a-partner",
                element: <BecomeAPartner/>
            }
        ],
    },
]);

export default router;