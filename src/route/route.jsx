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
import VisislanProfessional from "@app/MsgPartner/VijilanProfessionalServices"
import CaseStudies from "@app/Case/CaseStudies";
import Resources from '@app/Resources/Resources';
import Vars_consultants_page from '@app/Vars_consultants_page/Vars_consultants_page'; 
import Automation_Focused from '@app/Automotion Focused/Automation_Focused';
import Complain_Solution from '@app/Complain Solution/Complian_Solution';
import Corrected_MSP_Program from '@app/Corrected MSP Partner Program/Corrected_MSP_Program';

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
        ],
    },
]);

export default router;