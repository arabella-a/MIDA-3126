export default function DigimonCard({ galleryData, isLoading }) {

    const DisplayGalleryData = () => {
        if (isLoading) return <p>Data is loading...</p>;
        if (galleryData && galleryData.length > 0) {
            const displayFive = galleryData.slice(0, 8);
            return (
                <div>
                    {displayFive.map((digimon, i) => (
                        <article key={i}>
                            <img src={digimon.img}/>
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
        <>
            <div>
                <DisplayGalleryData />
            </div>
        </>
    )
}