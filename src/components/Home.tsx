import { DigiLayoutBlock, DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import { SearchForm } from "./SearchForm";
import { SearchResults } from "./SearchResults";
import { matchByText } from "../services/serviceBase";
import { useState } from "react";

export const Home = () => {
  const [responseData, setResponseData] = useState({});

  const handleFormSubmit = async (formData: {
    educationTitle: string;
    description: string;
  }) => {
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
        <DigiLayoutBlock>
          <DigiLayoutBlock>
            <DigiLayoutBlock>
              <SearchForm onSubmit={handleFormSubmit}></SearchForm>
            </DigiLayoutBlock>
          </DigiLayoutBlock>

          <SearchResults responseData={responseData}></SearchResults>
        </DigiLayoutBlock>
      </DigiTypographyMeta>
    </>
  );
};
