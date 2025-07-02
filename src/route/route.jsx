import Blog from '@app/Blog/Blog';
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
        ],
    },
]);

export default router;