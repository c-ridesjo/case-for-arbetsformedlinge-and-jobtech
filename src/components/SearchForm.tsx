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
import { useState } from "react";
import { Form, Link } from "react-router-dom";

export const SearchForm = () => {
  const [educationTitle, setEducationTitle] = useState<string | number>("");
  const [description, setDescription] = useState("");

  return (
    <DigiTypographyMeta>
      <main>
        <Form>
          <DigiFormInput
            afLabel="Etikett"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
            onAfOnChange={(event) => setEducationTitle(event.target.value)}
            afValue={educationTitle}
            afName="utbildningstitel"
          />

          <DigiFormTextarea
            afLabel="Etikett"
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
              En knapp
            </DigiButton>
          </Link>
        </Form>
      </main>
    </DigiTypographyMeta>
  );
};
