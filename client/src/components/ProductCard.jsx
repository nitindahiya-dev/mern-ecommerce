import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className='max-w-[1450px] mx-auto'>
              <div className="flex items-center justify-between">
          <p className="uppercase font-semibold text-[30px]">shop by categories</p>
          <Link to={"/"} className="uppercase border-b-2 border-black text-[15px] font-semibold">shop all Product</Link>
        </div>
      {isLoading ? (
        <p>Loading data...</p>
      ) : data && data.length > 0 ? (
        <div className="flex items-center justify-between flex-col md:flex-row p-5 max-w-[1450px] mx-auto my-5 gap-5">
          
          {data.map((item) => (
            
            <div key={item.id} className="bg-white w-full flex flex-col p-2">
              <img className="h-60 w-60 object-contain  rounded-full mx-auto" src={item.image} alt={item.title} />
              <div className="w-60 ">
                <span className="truncate block px-2">{item.title}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="flex px-2"><FaStar className="text-yellow-200" /><FaStar className="text-yellow-200 " /><FaStar className="text-yellow-200" /><FaStar className="text-yellow-200" /><FaStar className="text-yellow-200" /></span><span className="text-gray-400" >{item.rating.rate}/5</span>
              </div>
              <span className='px-2 text-lime-500 font-semibold'> ${item.price}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
