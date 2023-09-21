import { DigiTypographyMeta } from '@digi/arbetsformedlingen-react'
import { SearchForm } from './SearchForm'
//import { useContext } from "react";
//import { matchByText } from '../services/serviceBase';
//import { useState } from 'react';
//import FormDataContext from '../contexts/FormDataContext';

export const Home = () => {

    /*    
    const handleSearchSubmit = async (formData: { input_headline: string; input_text: string }) => {
        console.log("Data", formData);
        
        const { input_headline, input_text } = formData;

        try {
            const responseData = await matchByText(input_headline, input_text)

            console.log('svar', responseData);
            
        } catch (error){
            console.error('error', error);
        }

      } */


      const handleSearchSubmit = async () => {

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