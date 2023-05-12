import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // Ncz2fZVJwEcta8cebd0tvHi991ZfuliL

    const {loading, data: images} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            <div className='card-grid animate__animated animate__fadeIn'>
                
                {
                    images.map((img)=>(
                        <GifGridItem 
                            key={img.id} 
                            {...img}
                        />
                    ))
                }   
            </div>
        </>
    )
}