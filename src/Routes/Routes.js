import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Layouts/Main';
import Category from '../Pages/Category/Category';
import News from '../Pages/News/News';
import SignUp from '../Pages/Shared/SignUp/SignUp';
import SignIn from '../Pages/Shared/SignIn/SignIn';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';
import Terms from '../Pages/Others/Terms';
import Profile from '../Pages/Profile/Profile';
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <><Home></Home></>,
                loader: () => fetch(`http://localhost:5000/news`)
            },


            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },

            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            { path: '/signup', element: <SignUp></SignUp> },
            { path: '/signin', element: <SignIn></SignIn> },
            { path: '/terms', element: <Terms></Terms> },
            { path: '/profile', element: <Profile></Profile> }
        ]
    }
]);