import { Home } from "./Home"
import { DigiTypographyMeta } from '@digi/arbetsformedlingen-react'

export const Layout = () => {
    return (
        <>
        <DigiTypographyMeta>
            <header><h1>Logga</h1></header>
          
          <main>
            <Home></Home>
          </main>
  
           <footer><h3>Footertext</h3></footer> 
        </DigiTypographyMeta>
          

        </>
    )
}