import { createContext, Dispatch, SetStateAction } from "react";
import { IFormData } from "../models/IFormData";

export interface IFormDataContextType {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

const defaultFormData: IFormData = {
  educationTitle: '',
  description: '',
};

const defaultSetFormData: Dispatch<SetStateAction<IFormData>> = () => {
  // a placeholder function that does nothing
  // ... (this function will be replaced by the actual state setting function when you use the provider)
};

const FormDataContext = createContext<IFormDataContextType>({
  formData: defaultFormData,
  setFormData: defaultSetFormData,
});

export default FormDataContext;