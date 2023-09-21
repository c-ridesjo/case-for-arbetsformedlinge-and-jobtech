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
import { FormEvent, useState, useContext } from "react";
import FormDataContext from "../contexts/FormDataContext";
  
export const SearchForm = () => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [educationTitle, setEducationTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const updatedFormData = {
      ...formData,
      educationTitle,
      description,
    };

    setFormData(updatedFormData)
    console.log('Uppdaterad titel (ej i context):', updatedFormData.educationTitle);
    console.log('titel i context:', formData.educationTitle);
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


          <Link
            to={`/search-results?educationTitle=${educationTitle}&description=${description}`}
          >

          </Link>
        </Form>
      </main>
    </DigiTypographyMeta>
  );
};