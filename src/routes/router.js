import { createBrowserRouter } from 'react-router-dom';
import Calendar from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Calendar />,
    },
]);

export default router;
