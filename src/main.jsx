import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './Router/Router.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from './Context/AuthContext/AuthProvider.jsx';

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#DADADA]">
      <div className="font-urbanist max-w-11/12 mx-auto ">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </div>
  </StrictMode>
);
