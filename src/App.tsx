import { useMemo, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import FormDataContext from "./contexts/FormDataContext";

function App() {
  const {formData, setFormData} = useContext(FormDataContext);

  const updateFormData = () => {
    setFormData({
      educationTitle: 'New Title',
      description: 'New Description',
    });
  }

  const contextValue = useMemo(() => ({
    formData,
    setFormData: updateFormData,
  }), [formData]);

  return (
    <FormDataContext.Provider value={contextValue}>
      <RouterProvider router={router}></RouterProvider>
    </FormDataContext.Provider>
  )
}

export default App;