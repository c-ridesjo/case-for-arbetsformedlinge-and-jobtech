
import { DigiTypographyMeta } from '@digi/arbetsformedlingen-react'
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
        <DigiTypographyMeta>
            <header><h1>Logga</h1></header>
          
          <main>
            <Outlet></Outlet>
          </main>
  
           <footer><h3>Footertext</h3></footer> 
        </DigiTypographyMeta>
          
  );
};
