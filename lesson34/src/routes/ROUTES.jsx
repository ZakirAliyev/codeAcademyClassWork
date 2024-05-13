import MainPage from "../pages/Main/index.jsx";
import Home from "../pages/Main/Home/index.jsx";
import Employee from "../pages/Main/Employees/index.jsx";

export const ROUTES = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'employees',
                element: <Employee/>
            }
        ]
    }
];