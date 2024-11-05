"use client"
import { useState } from "react";
import Button from "../atoms/Button";
import Header from "../atoms/Header";

export default function ArtGallery() {
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

    const DisplayGalleryData = () => {
        if (isLoading) return <p>Data is loading...</p>;
        if (galleryData && galleryData.length > 0) {
            const displayFive = galleryData.slice(0, 8);
            return (
                <div>
                    {displayFive.map((digimon, i) => (
                        <article key={i}>
                            <img src={digimon.img} alt={digimon.name} />
                            <h3>{digimon.name}</h3>
                            <p>{digimon.level}</p>
                        </article>
                    ))}
                </div>
            );
        }
        return <div>No data found... 🍓</div>;
    };

    return (
        <div>
            <Header />
            <Button 
                disabled={isLoading} 
                onClick={fetchGalleryData}
            >
                {isLoading ? "Loading..." : "Wanna see some digimons?"}
            </Button>
            <DisplayGalleryData />
        </div>
    );
}
