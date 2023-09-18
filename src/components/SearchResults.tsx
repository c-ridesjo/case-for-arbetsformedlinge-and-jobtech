import { DigiLayoutContainer, DigiTypographyMeta } from '@digi/arbetsformedlingen-react';
import { useNavigate } from 'react-router-dom'; 
import { DigiButton } from '@digi/arbetsformedlingen-react';

export const SearchResults = () => {
    const navigate = useNavigate(); 

    return (
        <>
            <DigiTypographyMeta>
                <DigiLayoutContainer>
                <DigiButton onClick={() => navigate('/')}>Home</DigiButton>
                    <h2>Sökresultat</h2>
                    <div className='box-container'>
                        <div className='box placeholder-box1'></div>
                        <div className='box placeholder-box2'></div>
                    </div>                    
                </DigiLayoutContainer>
            </DigiTypographyMeta>
        </>
    );
};
