import { DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <DigiTypographyMeta>
        <header>
          <h1><img src="src/assets/logoKN.png" height={130} width={300}/></h1>
        </header>

        <main>
          <Outlet></Outlet>
        </main>

        <footer>
          <h3>Footertext</h3>
        </footer>
      </DigiTypographyMeta>
    </>
  );
};
