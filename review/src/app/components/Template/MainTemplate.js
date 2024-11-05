"use client"
import { useState } from "react";
import Button from "../atoms/Button";
import Header from "../molecules/Header";
import DigimonCard from "../Organisms/DigimonCard";

export default function MainTemplate() {
    const [galleryData, setGalleryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchGalleryData() {
        setIsLoading(true);
        try {
            const resp = await fetch("https://digimon-api.vercel.app/api/digimon");
            const data = await resp.json();

            console.log("Data fetched!", data);
            setGalleryData(data);
        } catch (e) {
            console.error("Error in loading data:", e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Header />
            <Button 
                disabled={isLoading} 
                onClick={fetchGalleryData}>
                    {isLoading ? "Fetch Digimon Data" : "See some digimons!"}        
            </Button>      
            <DigimonCard galleryData={galleryData} isLoading={isLoading}/>
        </div>
    );
}
