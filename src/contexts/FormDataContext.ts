import { createContext } from "react";
import { IFormData } from "../models/IFormData";

export interface IFormDataContextType {
  formData: IFormData;
  setFormData: (
    data: {
      educationTitle: string,
      description: string
  }) => void;
}

const defaultFormData: IFormData = {
  educationTitle: '',
  description: '',
};

const FormDataContext = createContext<IFormDataContextType>({
  formData: defaultFormData,
  setFormData: () => {},
});

export default FormDataContext;
