import { createContext, Dispatch, SetStateAction } from "react";
import { IFormData } from "../models/IFormData";

export interface IFormDataContextType {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

const FormDataContext = createContext<IFormDataContextType | undefined>(undefined);

export default FormDataContext;