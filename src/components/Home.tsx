import { DigiTypographyMeta } from '@digi/arbetsformedlingen-react'
import { SearchForm } from './SearchForm'

export const Home = () => {

    // 

    return (
        <>
            <DigiTypographyMeta>
                <h2>Hem</h2>
                <div className='form-container'>
                    <SearchForm></SearchForm>
                </div>
            </DigiTypographyMeta>
        </>
    )
}