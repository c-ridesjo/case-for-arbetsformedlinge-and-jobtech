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
import { useContext, FormEvent, useState } from "react";
import { Form, Link } from "react-router-dom";
import FormDataContext from "../contexts/FormDataContext";

export const SearchForm = () => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [educationTitle, setEducationTitle] = useState<string | number>(
    formData.educationTitle
  );
  const [description, setDescription] = useState(formData.description);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setFormData((prevData) => ({
      ...prevData,
      educationTitle,
      description,
    }));
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
            afValue={description}
            onAfOnChange={(event) => setDescription(event.target.value)}
          ></DigiFormTextarea>

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
