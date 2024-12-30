import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Blog } from '../../presentation/pages/Blog'
import { Post } from '../../presentation/pages/Post';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Blog />
      },
      {
        path: '/post/:number',
        element: <Post />
      }
    ]
  }
]) 
