import { createBrowserRouter } from 'react-router'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home/CategoryDetails/Home'
import CategoryDetails from '../pages/Home/CategoryDetails/CategoryDetails'
import ProjectDetails from '../pages/ProjectDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/projectDetails/:id',
                element: <ProjectDetails />,
            },
        ],
    }
])
