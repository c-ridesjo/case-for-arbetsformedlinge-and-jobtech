
import {
  FormInputType,
  FormInputValidation,
  FormInputVariation,
  ButtonSize,
  ButtonType,
  ButtonVariation,
  FormTextareaVariation,
  FormTextareaValidation,
} from "@digi/arbetsformedlingen";
import {
  DigiFormInput,
  DigiTypographyMeta,
  DigiButton,
  DigiFormTextarea,
} from "@digi/arbetsformedlingen-react";

import { Form, Link } from "react-router-dom";
import { FormEvent, useState } from "react";
//import FormDataContext from "../contexts/FormDataContext";
        
interface SearchFormProps {
  onSubmit: (formData: { input_headline: string; input_text: string }) => void;
}  

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  //const { setFormData } = useContext(FormDataContext);
  const [educationTitle, setEducationTitle] = useState<string | number>("");
  const [description, setDescription] = useState<string | number>("");


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    console.log('beskrivning:', description);
    console.log('titel:', educationTitle);
    
    onSubmit({
      input_headline: typeof educationTitle === "number" ? educationTitle.toString() : educationTitle,
      input_text: typeof description === "number" ? description.toString() : description,
      
    }); 

    
    
  }

  return (
    <DigiTypographyMeta>
      <main>

        <Form onSubmit={handleSubmit}>



          <DigiFormInput
            afLabel="Utbildningstitel"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
            onAfOnChange={(event) => setEducationTitle(event.target.value)}
            afValue={educationTitle}
            afName="utbildningstitel"
          />

          <DigiFormTextarea
            afLabel="Beskrivning"
            afVariation={FormTextareaVariation.MEDIUM}
            afValidation={FormTextareaValidation.NEUTRAL}
            onAfOnChange={(event) => setDescription(event.target.value)}
            afValue={description as string}
            afName="beskrivning"
          ></DigiFormTextarea>

            <DigiButton
              afSize={ButtonSize.LARGE}
              afVariation={ButtonVariation.PRIMARY}
              afType={ButtonType.SUBMIT}
              afFullWidth={true}
            >
              Sök yrken
            </DigiButton>          


          <Link
            to={`/search-results?educationTitle=${educationTitle}&description=${description}`}
          >


          </Link>

          
        </Form>
      </main>
    </DigiTypographyMeta>
  );
};
