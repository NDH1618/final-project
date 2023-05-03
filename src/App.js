import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Router, RouterProvider,createBrowserRouter } from 'react-router-dom';
import { Yeuthich } from './routers/Yeuthich/Yeuthich';
import { Admin } from './routers/Admin/Admin';
import { Home } from './routers/Home/Home';
import Register from './routers/Register/Register';
import Login from './routers/Login/Login';
import { Gotoarticle } from './common/product/Gotoarticle/Gotoarticle';
import { Goto } from './common/product/Gotoarticle/Goto';
import { Editsport } from './routers/Admin/AdminSearch/Editpost/Editsport';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/yeuthich",
    element: <Yeuthich />
  },
  {
    path: "/dangky",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/Admin",
    element: <Admin />
  },
  {
    path: "Gotoarticle",
    element: <Goto />
  },
  {
    path: "/Gotoarticle/:id",
    element: <Gotoarticle />
  },
  {
    path: "/Editpost",
    element: <Editsport />
  },
])

function App() {
  return (
    <div className="App">     
        <RouterProvider router={router} />
    </div>
  )
}

export default App;
