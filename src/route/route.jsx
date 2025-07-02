import Blog from '@app/Blog/Blog';
import Blog_landing_page from '@app/Blog/Blog_landing_page';
import Home from '@app/Home/Home';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';

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
                path: "blog-landing",
                element: <Blog_landing_page />,
            },
        ],
    },
]);

export default router;