import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { LiaLuggageCartSolid } from "react-icons/lia";
import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Home() {

  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 6 },
  };

  const catergy_items = [
    <div className="item flex flex-col justify-center items-center gap-5" data-value="1">
      <img className="rounded-full" src="./all_category/img-1.png" />
      <span className="uppercase font-semibold">Category 1</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="2">
      <img className="rounded-full" src="./all_category/img-2.png" />
      <span className="uppercase font-semibold"> Category 2</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="3">
      <img className="rounded-full" src="./all_category/img-3.png" />
      <span className="uppercase font-semibold"> Category 3</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="4">
      <img className="rounded-full" src="./all_category/img-4.png" />
      <span className="uppercase font-semibold"> Category 4</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="5">
      <img className="rounded-full" src="./all_category/img-5.png" />
      <span className="uppercase font-semibold"> Category 5</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="6">
      <img className="rounded-full" src="./all_category/img-1.png" />
      <span className="uppercase font-semibold"> Category 6</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="7">
      <img className="rounded-full" src="./all_category/img-2.png" />
      <span className="uppercase font-semibold"> Category 7</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="8">
      <img className="rounded-full" src="./all_category/img-3.png" />
      <span className="uppercase font-semibold"> Category 8</span>
      </div>,
  ];
  const popular_items = [
    <div className="item flex flex-col justify-center items-center gap-5" data-value="1">
      <img className="rounded-full" src="./all_category/img-1.png" />
      <span className="uppercase font-semibold">Category 1</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="2">
      <img className="rounded-full" src="./all_category/img-2.png" />
      <span className="uppercase font-semibold"> Category 2</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="3">
      <img className="rounded-full" src="./all_category/img-3.png" />
      <span className="uppercase font-semibold"> Category 3</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="4">
      <img className="rounded-full" src="./all_category/img-4.png" />
      <span className="uppercase font-semibold"> Category 4</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="5">
      <img className="rounded-full" src="./all_category/img-5.png" />
      <span className="uppercase font-semibold"> Category 5</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="6">
      <img className="rounded-full" src="./all_category/img-1.png" />
      <span className="uppercase font-semibold"> Category 6</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="7">
      <img className="rounded-full" src="./all_category/img-2.png" />
      <span className="uppercase font-semibold"> Category 7</span>
      </div>,
    <div className="item flex flex-col justify-center items-center gap-5" data-value="8">
      <img className="rounded-full" src="./all_category/img-3.png" />
      <span className="uppercase font-semibold"> Category 8</span>
      </div>,
  ];

  return (
    // Banner start
    <div className="min-h-screen max-w-[1550px] mx-auto">
      <div className="p-5 max-w-[1450px] mx-auto">
        <div className="grid md:grid-cols-4 md:grid-rows-2 md:gap-10 grid-cols-1 grid-rows-4 gap-4">
          <div className="row-start-1 md:col-span-2 md:row-span-2 md:col-start-2 rounded-xl md:row-start-1 h-[450px] bg-no-repeat bg-cover bg-center bg-[url('./banner-1.jpg')] px-16">
            <Carousel
              showArrows={false}
              autoFocus={true}
              stopOnHover={false}
              showStatus={false}
              thumbWidth={"200px"}
              autoPlay={true}
              infiniteLoop={true}
              axis="vertical"
            >
              <div className="h-[450px] flex flex-col items-start justify-center">
                <div className="flex gap-2">
                  <span className="text-white font-extrabold">{'-->'}</span>
                  <span className="text-white uppercase font-semibold">special offer</span>
                </div>
                <p className="text-white text-left uppercase font-semibold text-[45px] leading-snug">save 20% <br /> first service</p>
                <Link to={"/"} className="uppercase bg-amber-300 w-40 h-10 flex justify-center items-center mt-5 rounded-lg font-semibold">Shop now</Link>
              </div>

              <div className="h-[450px] flex flex-col items-start justify-center">
                <div className="flex gap-2">
                  <span className="text-white font-extrabold">{'-->'}</span>
                  <span className="text-white uppercase font-semibold">special offer</span>
                </div>
                <p className="text-white text-left uppercase font-semibold text-[45px] leading-snug">save 20% <br /> first service</p>
                <Link to={"/"} className="uppercase bg-amber-300 w-40 h-10 flex justify-center items-center mt-5 rounded-lg font-semibold">Shop now</Link>
              </div>

              <div className="h-[450px] flex flex-col items-start justify-center">
                <div className="flex gap-2">
                  <span className="text-white font-extrabold">{'-->'}</span>
                  <span className="text-white uppercase font-semibold">special offer</span>
                </div>
                <p className="text-white text-left uppercase font-semibold text-[45px] leading-snug">save 20% <br /> first service</p>
                <Link to={"/"} className="uppercase bg-amber-300 w-40 h-10 flex justify-center items-center mt-5 rounded-lg font-semibold">Shop now</Link>
              </div>
            </Carousel>
          </div>
          <div className="row-start-2 md:row-span-2 md:col-start-1 md:row-start-1 ">
            <ul className="gap-5 flex flex-col p-5 uppercase">
              <li className="list-disc"><Link to={"/"}>INTERIOR</Link></li>
              <li className="list-disc"><Link to={"/"}>EXTERIOR</Link></li>
              <li className="list-disc"><Link to={"/"}>PERFORMANCE</Link></li>
              <li className="list-disc"><Link to={"/"}>LIGHTING</Link></li>
              <li className="list-disc"><Link to={"/"}>WHEELS & TIRES</Link></li>
              <li className="list-disc"><Link to={"/"}>REPAIR PARTS</Link></li>
              <li className="list-disc"><Link to={"/"}>BODY PARTS</Link></li>
              <li className="list-disc"><Link to={"/"}>AUDIO & ELECTRONICS</Link></li>
              <li className="list-disc"><Link to={"/"}>DAMPING</Link></li>
            </ul>
          </div>
          <div className="row-start-3 md:col-start-4 md:row-start-1 bg-no-repeat bg-cover bg-center bg-[url('./banner-2.jpg')] rounded-xl flex flex-col justify-center px-10">
            <p className="font-semibold">
              NEW ARRIVALS <br />
              INTERIOR
            </p>
            <Link to={"/"} className="uppercase font-semibold text-[14px] mt-3 border-b-2 w-20 border-b-black">shop now</Link>
          </div>
          <div className="row-start-4 md:col-start-4 md:row-start-2 bg-no-repeat bg-cover bg-center bg-[url('./banner-3.jpg')] rounded-xl flex flex-col justify-center px-10">
            <p className="font-semibold text-white">
              NEW ARRIVALS <br />
              INTERIOR
            </p>
            <Link to={"/"} className="uppercase text-white font-semibold text-[14px] mt-3 border-b-2 w-20 border-b-white">shop now</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 justify-between md:flex-nowrap flex-wrap p-5 max-w-[1450px] mx-auto">
        <div className="flex items-center gap-1">
          <LiaLuggageCartSolid className="w-12 h-12" />
          <div className="">
            <p className="font-semibold text-[15px]">FAST AND FREE DELIVERY</p>
            <span className="text-[14px] font-semibold text-gray-400">Free delivery for all orders over $140</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <LiaLuggageCartSolid className="w-12 h-12" />
          <div className="">
            <p className="font-semibold text-[15px]">FAST AND FREE DELIVERY</p>
            <span className="text-[14px] font-semibold text-gray-400">Free delivery for all orders over $140</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <LiaLuggageCartSolid className="w-12 h-12" />
          <div className="">
            <p className="font-semibold text-[15px]">FAST AND FREE DELIVERY</p>
            <span className="text-[14px] font-semibold text-gray-400">Free delivery for all orders over $140</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <LiaLuggageCartSolid className="w-12 h-12" />
          <div className="">
            <p className="font-semibold text-[15px]">FAST AND FREE DELIVERY</p>
            <span className="text-[14px] font-semibold text-gray-400">Free delivery for all orders over $140</span>
          </div>
        </div>
      </div>
      {/* Banner End  */}

      {/* All Product Carousel Start */}
      <div className="p-5 max-w-[1450px] mx-auto my-20">
        <div className="flex items-center justify-between">
          <p className="uppercase font-semibold text-[30px]">shop by categories</p>
          <Link to={"/"} className="uppercase border-b-2 border-black text-[15px] font-semibold">shop all Product</Link>
        </div>

        <div className="mt-10">
          <AliceCarousel
            mouseTracking
            items={catergy_items}
            responsive={responsive}
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
          />
        </div>
      </div>
      {/* All Product Carousel End */}

{/* Promo start */}

<div className="flex items-center justify-between flex-col md:flex-row p-5 gap-10 max-w-[1450px] mx-auto my-20">
  <div className="bg-[url('./promo/img-1.png')] bg-no-repeat bg-cover bg-center w-full rounded-lg p-10 text-white">
  <p className="font-semibold uppercase text-[20px]">new arrivals <br /> interior</p>
  <Link className="uppercase border-b-2 border-white font-semibold">shop now</Link>
  </div>
  <div className="bg-[url('./promo/img-2.png')] bg-no-repeat bg-cover bg-center w-full rounded-lg p-10 text-white">
  <p className="font-semibold uppercase text-[20px]">new arrivals <br /> interior</p>
  <Link className="uppercase border-b-2 border-white font-semibold">shop now</Link>
  </div>
  <div className="bg-[url('./promo/img-3.png')] bg-no-repeat bg-cover bg-center w-full rounded-lg p-10 text-white">
  <p className="font-semibold uppercase text-[20px]">new arrivals <br /> interior</p>
  <Link className="uppercase border-b-2 border-white font-semibold">shop now</Link>
  </div>
</div>
{/* Promo End */}

{/* Popular Products Start */}

<div className="p-5 max-w-[1450px] mx-auto my-20">
        <div className="flex items-center justify-between">
          <p className="uppercase font-semibold text-[30px]">NEW & POPULAR PRODUCTS</p>
          <Link to={"/"} className="uppercase border-b-2 border-black text-[15px] font-semibold">shop all Product</Link>
        </div>

        <div className="mt-10">
          <AliceCarousel
            mouseTracking
            items={popular_items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            // disableButtonsControls
          />
        </div>
      </div>

{/* Popular Products End */}

    </div>
  );
}
