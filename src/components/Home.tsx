import { DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import { IFormData, SearchForm } from "./SearchForm";
import { SearchResults } from "./SearchResults";
import { matchByText } from "../services/serviceBase";
import { useState } from "react";
import { IOccupationDetails } from "../models/IOccupationDetails";

export const Home = () => {
  const [responseData, setResponseData] = useState<IOccupationDetails[]>([]);

  const handleFormSubmit = async (formData: IFormData) => {
    console.log("data", formData);
    try {
      const dataFromResponse = await matchByText(
        formData.educationTitle,
        formData.description
      );
      setResponseData(dataFromResponse);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      <DigiTypographyMeta>
        <div className="form-container">
          <SearchForm onSubmit={handleFormSubmit}></SearchForm>
        </div>
        <SearchResults responseData={responseData}></SearchResults>
      </DigiTypographyMeta>
    </>
  );
};
