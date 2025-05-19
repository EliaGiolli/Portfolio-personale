import { createBrowserRouter } from "react-router-dom";

import RootLayout from '../RootLayout'
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Homepage />
            }
        ],
    },
])