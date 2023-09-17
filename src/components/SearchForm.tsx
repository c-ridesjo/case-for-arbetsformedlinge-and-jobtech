import { DigiTypographyMeta } from "@digi/arbetsformedlingen-react";

export const SearchForm = () => {
  return (
    <DigiTypographyMeta>
      <header>
        <h1>Logga</h1>
      </header>

      <main>
        <form>
          <input type="text" placeholder="Utbildningstitel"></input>
          <input type="text" placeholder="Beskrivning"></input>
          <button type="submit">Sök yrken</button>
        </form>
      </main>

      <footer>
        <h3>Footertext</h3>
      </footer>
    </DigiTypographyMeta>
  );
};
