import { DigiTypographyMeta } from '@digi/arbetsformedlingen-react'
import { SearchForm } from './SearchForm'
import FormDataContext from "../contexts/FormDataContext";
import { useContext } from 'react';

export const Home = () => {

    const { formData } = useContext(FormDataContext);

    console.log('formdata home', formData);
    
      const handleSearchSubmit = async () => {
        console.log('formdata submit', formData);
        
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