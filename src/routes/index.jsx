import { lazy } from "react";



const Home = lazy(() => import('../pages/index'))
const Login = lazy(() => import('../pages/auth/Login'))
const ContestLists = lazy(() => import('../pages/contest/ContestList'))


export const Routers = [
    {
        path: 'login',
        element: Login
    },
    {
        path: '',
        element: Home
    },
    {
        path: 'contest/:gameId',
        element: ContestLists
    }
]