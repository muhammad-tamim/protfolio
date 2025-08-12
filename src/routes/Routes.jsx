import { createBrowserRouter } from 'react-router'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import ProjectDetails from '../pages/ProjectDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/projectDetails/:id',
        element: <ProjectDetails />,
    },
])
