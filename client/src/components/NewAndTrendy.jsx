import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import { FaStar } from "react-icons/fa";


export default function NewAndTrendy() {

    const popular_responsive = {
        0: { items: 2 },
        568: { items: 4 },
        1024: { items: 5 },
    };


    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?sort=desc');
                const json = await response.json();
                setData(json);
                console.log(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    const items = data ? data.map(item => (
        <div key={item.id} className="item h-[450px] flex flex-col justify-center items-start p-5 gap-2 bg-white mx-5" data-value="1">
        <img className="rounded h-80 object-contain mx-auto p-3" src={item.image} alt={item.title} />
        {/* <span className="font-semibold text-gray-400 text-[14px]">{item.title}</span> */}
        <span>{item.title}</span>
        <div className="flex items-center gap-1">
          <span className="flex"><FaStar className="text-yellow-200" /><FaStar className="text-yellow-200 " /><FaStar className="text-yellow-200" /><FaStar className="text-yellow-200" /><FaStar className="text-yellow-200" /></span><span className="text-gray-400" >255</span>
        </div>
        <span className="text-lime-500 font-semibold">{item.price}</span>
      </div>
    )) : [];
    return (
        <div className="p-5 max-w-[1450px] mx-auto my-20">
        <div className="flex items-center justify-between">
          <p className="uppercase font-semibold text-[30px]">NEW & POPULAR PRODUCTS</p>
          <Link to={"/"} className="uppercase border-b-2 border-black text-[15px] font-semibold">shop all Product</Link>
        </div>

        <div className="mt-10">
        {isLoading ? (
                    <p>Loading...</p>
                ) : data && data.length > 0 ? (
          <AliceCarousel
            mouseTracking
            responsive={popular_responsive}
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
    )
}
