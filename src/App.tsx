import './style/App.css'
import '@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/digi-arbetsformedlingen.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import FormDataContext, { IFormDataContextType } from './contexts/FormDataContext'
import { useState } from 'react'
function App() {

  const [ formData, setFormData ] = useState<IFormDataContextType>({
    formData: {
      educationTitle: '',
      description: '',
    }, 
    setFormData 
  })


  return (
    <>
    <FormDataContext.Provider value={formData}>
      <RouterProvider router={router}></RouterProvider>
    </FormDataContext.Provider>
      
    </> 
  )
}

export default App
