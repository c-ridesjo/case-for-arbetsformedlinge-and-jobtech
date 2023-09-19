import { DigiTypographyMeta } from '@digi/arbetsformedlingen-react'
import { SearchForm } from './SearchForm'
import { matchByText } from '../services/serviceBase';

export const Home = () => {

    const handleSearchSubmit = async (formData: { educationTitle: string; description: string }) => {
        console.log("Data", formData);
        
        const { educationTitle, description } = formData;

        try {
            const responseData = await matchByText(educationTitle, description)

            console.log('svar', responseData);
            
        } catch (error){
            console.error('error', error);
        }

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