import { DigiTypographyMeta } from '@digi/arbetsformedlingen-react'
import { SearchForm } from './SearchForm'
import { SearchResults } from './SearchResults'
import { matchByText } from '../services/serviceBase'

export const Home = () => {
    const handleFormSubmit =  async (formData: { educationTitle: string; description: string }) => {
        console.log('data', formData)

        // skicka responseData till SearchResults
        try {
            const responseData = await matchByText(formData.educationTitle, formData.description)

            console.log('responseData', responseData);
            
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <>
            <DigiTypographyMeta>
                <h2>Hem</h2>
                <div className='form-container'>
                <SearchForm onSubmit={handleFormSubmit}></SearchForm>
                </div>
                <SearchResults></SearchResults>
            </DigiTypographyMeta>
        </>
    )
}