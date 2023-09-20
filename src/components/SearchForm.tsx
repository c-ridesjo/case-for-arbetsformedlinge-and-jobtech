import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  FormInputType,
  FormInputValidation,
  FormInputVariation,
  FormTextareaValidation,
  FormTextareaVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiFormInput,
  DigiFormTextarea,
  DigiTypographyMeta,
} from "@digi/arbetsformedlingen-react";
import { FormEvent, useState } from "react";
import { Form, Link } from "react-router-dom";

//import FormDataContext from "../contexts/FormDataContext";

interface SearchFormProps {
  onSubmit: (formData: { input_headline: string; input_text: string }) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  //const { formData, setFormData } = useContext(FormDataContext);
  const [educationTitle, setEducationTitle] = useState<string | number>("");
  const [description, setDescription] = useState<string | number>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(description);

    onSubmit({
      input_headline:
        typeof educationTitle === "number"
          ? educationTitle.toString()
          : educationTitle,
      input_text:
        typeof description === "number" ? description.toString() : description,
    });

    /*
    setFormData(prevData => ({
      ...prevData,
      educationTitle,
      description,
    })); 
    */
  };

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
            afValue={description as string}
            onAfOnChange={(event) => setDescription(event.target.value)}
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
          ></Link>
        </Form>
      </main>
    </DigiTypographyMeta>
  );
};
