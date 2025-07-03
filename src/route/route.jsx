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
import Resources from '@app/Resources/Resources';

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
                path: "visilan-professional-service",
                element: <VisislanProfessional />,
            },
        ],
    },
]);

export default router;