import { useState, useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import FormDataContext from "./contexts/FormDataContext";

function App() {
  const [formData, setFormData] = useState({
    educationTitle: '',
    description: '',
  });

  const contextValue = useMemo(() => {
    const updateFormData = (data: { educationTitle: string; description: string }) => {
      setFormData((prevData) => ({
        ...prevData,
        ...data,
      }));
    };

    return {
      formData,
      setFormData: updateFormData,
    };
  }, [formData]);

  return (
    <FormDataContext.Provider value={contextValue}>
      <RouterProvider router={router}></RouterProvider>
    </FormDataContext.Provider>
  )
}

export default App;
