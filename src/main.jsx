import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Homepage from './pages/Homepage.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Purchasebill from './pages/Purchase/Purchasebill.jsx';
import Paymentout from './pages/Purchase/Paymentout.jsx';
import Purchaseorderpage from './pages/Purchase/Purchaseorderpage.jsx';
import Purchasereturnpage from './pages/Purchase/Purchasereturnpage.jsx';
import AddPurchase from './pages/AddPurchasepage.jsx';
import Addpurchaseorderpage from './pages/Addpurchaseorderpage.jsx';
import Formpage from './pages/Formpage/Formpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/purchasebill",
        element: <Purchasebill/>
      },
      {
        path: "/paymentout",
        element: <Paymentout/>
      },
      {
        path: "/paymentorder",
        element: <Purchaseorderpage/>
      },
      {
        path: "/purchasereturn",
        element: <Purchasereturnpage/>
      },
      {
        path: "/addpurchase",
        element: <AddPurchase/>
      },
      {
        path: "/addpurchaseorder",
        element: <Addpurchaseorderpage/>
      },
      {
        path: "/addpurchasereturn",
        element: <Addpurchaseorderpage/>
      },
      {
        path: "/formpage",
        element: <Formpage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
