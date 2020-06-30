import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import Navbar from './Navbar';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto(){

    const [PhotoData, setPhotoData] = useState(null);
    
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
                
            );

            const data = await res.json();
            setPhotoData(data);

        }

    }, []);

    if (!PhotoData) return <div/>;

    return(
        <div>
            <Navbar/>
            <div className="nasa-photo">
                {PhotoData.media_type === "image" ? (
                    <img className="photo" src={PhotoData.url} alt={PhotoData.title} />
                    ) : (
                    <iframe title="space-video" src={PhotoData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo" />
                )}
                <div>
                    <h1>{PhotoData.title}</h1>
                    <p className="date">{PhotoData.date}</p>
                    <p className="explanation">{PhotoData.explanation}</p>
                </div>
            </div>
        </div>

    );
}