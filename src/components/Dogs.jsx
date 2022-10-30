import React from 'react'
import useSWR from "swr"
import Card from './Card';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  
const fetcher = url => fetch(url).then((res) => res.json());

export default function Dogs() {
    
    const { data, error } = useSWR(
        "https://api.thedogapi.com/v1/breeds",
        fetcher
    );
    if (error) return <div>failed to load</div>;
    
    if (!data) return <div>loading...</div>;
    const random = getRandomInt(data.length)
    console.log(data)
    
    return (
    <div className='flex flex-col justify-center items-center space-y-5'>
        <Card image={data[random].image.url} name={data[random].name} temperament={data[random].temperament} bred_for={data[random].bred_for} />
        <button class=" bg-primary hover:bg-secundary text-white font-bold py-2 px-4 w-24 border border-blue-700 rounded"
        onClick={() => window.location.reload()}>
            OTRO
        </button>
    </div>
    )
}
