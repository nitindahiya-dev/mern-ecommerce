import { useState } from "react";
import { FaStar } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(0);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="min-h-screen max-w-[1450px] mx-auto px-5 md:p-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full h-90">
          <ImageGallery items={images} />
        </div>
        <div className="md:py-10 flex gap-5 flex-col w-full md:w-[100%]">
          <p className="font-semibold text-3xl">Lightweight Puffer Jacket With a Hood</p>
          <div className="flex items-center gap-1">
            <span className="flex px-2">
              <FaStar className="text-yellow-200" />
              <FaStar className="text-yellow-200" />
              <FaStar className="text-yellow-200" />
              <FaStar className="text-yellow-200" />
              <FaStar className="text-yellow-200" />
            </span>
            <span className="text-gray-400">/5</span>
          </div>
          <p className="font-semibold text-2xl">$499</p>
          <span className="text-[14px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, eligendi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            libero, autem perferendis voluptate minus quae omnis ipsum ut vero
            eos error id deserunt ea laborum nobis modi aperiam voluptas a?
          </span>

          <div className="flex mt-1  gap-10 ">
            <div className="w-36 flex border-[1px] border-black">
              <button
                data-action="decrement"
                className="h-full w-20 rounded-l cursor-pointer outline-none"
                onClick={decrement}
              >
                <span className="m-auto text-xl font-thin">−</span>
              </button>
              <input
                type="number"
                className="bg-transparent outline-none border-none focus:outline-none text-center w-full font-semibold text-md md:text-basecursor-default flex items-center"
                name="custom-input-number"
                value={quantity}
                readOnly
              />
              <button
                data-action="increment"
                className="h-full w-20 rounded-r cursor-pointer"
                onClick={increment}
              >
                <span className="m-auto text-xl font-thin">+</span>
              </button>
              </div>
            <div className="bg-black text-white flex justify-center px-4">
              <button className="uppercase">add to cart</button>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}
