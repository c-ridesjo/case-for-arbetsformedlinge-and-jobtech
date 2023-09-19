
import {
  FormInputType,
  FormInputValidation,
  FormInputVariation,
  ButtonSize,
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
  onSubmit: (formData: { educationTitle: string; description: string }) => void;
}  

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  //const { formData, setFormData } = useContext(FormDataContext);
  const [educationTitle, setEducationTitle] = useState<string | number>("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("skicka formulär");
    

    onSubmit({
      educationTitle: typeof educationTitle === "number" ? educationTitle.toString() : educationTitle,
      description,
    });

    /*
    setFormData(prevData => ({
      ...prevData,
      educationTitle,
      description
    })) */
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
            afName="beskrivning"
            afValue={description}
            onAfOnChange={(event) => setDescription(event.target.value)}
          ></DigiFormTextarea>

          <button type='submit'>Tillfällig testknapp</button>


          <Link
            to={`/search-results?educationTitle=${educationTitle}&description=${description}`}
          >
            <DigiButton
              afSize={ButtonSize.LARGE}
              afVariation={ButtonVariation.PRIMARY}
              afFullWidth={true}
            >
              Sök yrken
            </DigiButton>

          </Link>

          
        </Form>
      </main>
    </DigiTypographyMeta>
  );
};
