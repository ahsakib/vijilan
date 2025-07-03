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
                path: "automotion-focused",
                element: <Automation_Focused />,
            },
        ],
    },
]);

export default router;