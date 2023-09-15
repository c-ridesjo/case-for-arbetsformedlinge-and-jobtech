
import { DigiButton } from '@digi/arbetsformedlingen-react'
import './App.css'
import '@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/digi-arbetsformedlingen.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <DigiButton onAfOnClick={() => {}}>Hej</DigiButton>
    </> 
  )
}

export default App
