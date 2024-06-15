import { FaStar } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductDetails() {
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

  function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });

  return (
    <div className="min-h-screen max-w-[1450px] mx-auto px-5">
      <div className="flex flex-col">
        <div className="">
          <ImageGallery items={images} />
        </div>
        <div className="">
          <p>Lightweight Puffer Jacket With a
            Hood</p>
          <div className="flex items-center gap-1">
            <span className="flex px-2"><FaStar className="text-yellow-200" /><FaStar className="text-yellow-200 " /><FaStar className="text-yellow-200" /><FaStar className="text-yellow-200" /><FaStar className="text-yellow-200" /></span><span className="text-gray-400" >/5</span>
          </div>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero, autem perferendis voluptate minus quae omnis ipsum ut vero eos error id deserunt ea laborum nobis modi aperiam voluptas a?</span>


          <label className="w-full text-gray-700 text-sm font-semibold">Counter Input
          </label>
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  " name="custom-input-number" value="0"></input>
            <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
