import { DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import { Link, Form } from "react-router-dom";
import { useContext, FormEvent, useState } from "react";
import FormDataContext from "../contexts/FormDataContext";


export const SearchForm = () => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [educationTitle, setEducationTitle] = useState(formData.educationTitle);
  const [description, setDescription] = useState(formData.description);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setFormData(prevData => ({
      ...prevData,
      educationTitle,
      description
    })) 
  }

  return (
    <DigiTypographyMeta>
      <header>
        <h1>Logga</h1>
      </header>

      <main>
        <Form onSubmit={handleSubmit}>
          <input
            placeholder="Utbildningstitel"
            name="utbildningstitel"
            value={educationTitle}
            onChange={(event) => setEducationTitle(event.target.value)}
          ></input>
          <textarea
            placeholder="Beskrivning"
            name="beskrivning"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>

          <Link
            to={`/search-results?educationTitle=${educationTitle}&description=${description}`}
          >
            <button className="search-link">Sök yrken</button>
          </Link>
        </Form>
      </main>

      <footer>
        <h3>Footertext</h3>
      </footer>
    </DigiTypographyMeta>
  );
};
