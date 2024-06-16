import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from "react";

export default function SortByCategory() {
    const catergy_responsive = {
        0: { items: 2 },
        568: { items: 4 },
        1024: { items: 6 },
    };

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const json = await response.json();
                setData(json);
            } catch (error) {
                
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const items = data ? data.map(item => (
        <div key={item.id} className="item flex flex-col justify-center items-center gap-5 ">
        {/* <img className="rounded-full" src={item.image} alt={item.title} /> */}
        <span className="uppercase cursor-pointer font-semibold border-[1px] border-black w-60 text-center shadow-md">{item}</span>
      </div>
    )) : [];

    return (
        <div className="p-5 max-w-[1450px] mx-auto my-20">
            <div className="flex items-center justify-between">
                <p className="uppercase font-semibold text-[30px]">shop by categories</p>
                <Link to={"/"} className="uppercase border-b-2 border-black text-[15px] font-semibold">shop all Product</Link>
            </div>

            <div className="mt-10">
                {isLoading ? (
                    <p>Loading...</p>
                ) : data && data.length > 0 ? (
                    <AliceCarousel
                        mouseTracking
                        responsive={catergy_responsive}
                        controlsStrategy="alternate"
                        autoPlay
                        autoPlayStrategy="none"
                        autoPlayInterval={1000}
                        animationDuration={1000}
                        animationType="fadeout"
                        infinite
                        touchTracking={false}
                        disableDotsControls
                        disableButtonsControls
                    >
                        {items}
                    </AliceCarousel>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
}
