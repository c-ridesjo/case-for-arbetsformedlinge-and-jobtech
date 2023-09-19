import { DigiTypographyMeta } from '@digi/arbetsformedlingen-react'
import { SearchForm } from './SearchForm'

export const Home = () => {

    // Hämta formulärdata från context och skicka till api

    const handleSearchSubmit = (formData: { educationTitle: string; description: string }) => {
        console.log("Data", formData);
        

      }

    return (
        <>
            <DigiTypographyMeta>
                <h2>Hem</h2>
                <div className='form-container'>
                    <SearchForm onSubmit={handleSearchSubmit}></SearchForm>
                </div>
            </DigiTypographyMeta>
        </>
    )
}