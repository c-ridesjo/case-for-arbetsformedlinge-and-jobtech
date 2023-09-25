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

import { Form } from "react-router-dom";
import { FormEvent, useState } from "react";

interface SearchFormProps {
  onSubmit: (formData: { educationTitle: string; description: string }) => void;
}
  
export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [educationTitle, setEducationTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ educationTitle, description });
  }

  return (
    <DigiTypographyMeta>
        <Form onSubmit={handleSubmit}>
          <DigiFormInput
            afLabel="Utbildningstitel"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
            onAfOnChange={(event) => setEducationTitle(event.target.value.toString())}
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

        </Form>
    </DigiTypographyMeta>
  );
};