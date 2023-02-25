import { useState } from 'react'
import './CardFilme.css'

import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function CardFilme({filme}){
    const [favoritado, setFavoritado] = useState(false)

    function favoritar(){
        setFavoritado(!favoritado)
    }

    return (
        <div className='CardFilme'>
            {favoritado? 
                <BookmarkOutlinedIcon className="favorite" onClick={favoritar}/> :
                <BookmarkBorderOutlinedIcon className="favorite" onClick={favoritar}/>  
            }
            <img 
                src={filme.poster} 
                alt={`poster do filme ${filme.titulo}`} 
                className='poster'
            />
            <div className="data">
                <h3>{filme.titulo}</h3>
                <span>{filme.nota}</span>
                <a href="#" className='botao'>detalhes</a>
            </div>
        </div>
    )

}