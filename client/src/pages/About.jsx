import { LiaLuggageCartSolid } from "react-icons/lia";


export default function About() {
  return (
    <div className="p-5">
      <h2 className="text-[30px] uppercase font-bold">About Us</h2>
      <img src="./about-us.jpg" alt="about us image" />
      <div className="max-w-[800px] mx-auto">
      <div className="flex flex-col gap-3 my-10">
        <p className="uppercase">our story</p>
        <span>Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum-</span>
        <span>
          {`Saw wherein fruitful good days image them, midst, waters upon,
          saw. Seas lights seasons. Fourth hath rule Evening Creepeth
          own lesser years itself so seed fifth for grass evening fourth
          shall you're unto that Had. Female replenish for yielding so saw
          all one to yielding grass you'll air sea it, open waters subdue,
          hath- Brought second Made. Be- Under male male, firmament,
          beast had light after fifth forth darkness thing hath sixth rule
          night multiply him life give they're great.`}
        </span>
        <p>Our Mission</p>
        <span>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat</span>
        <p>Our Vision</p>
        <span>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequ at.</span>
      </div>
      <div className="flex flex-col mb-10 md:flex-row">
        <img src="./about-2.jpg" alt="" />
        <div className="">
          <p>The Company</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            sapien dignissim a elementum. Sociis metus, hendrerit mauris id
            in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
            sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla
            massa est viverra interdum. Praesent auctor nulla morbi non
            posuere mattis. Arcu eu id maecenas cras.</span>
        </div>
      </div>
      <div className="flex flex-col gap-16 mb-10 md:flex-row  justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
        <LiaLuggageCartSolid className="w-16 h-16"/>
        <p>FAST AND FREE DELIVERY</p>
        <span>Free delivery for all orders over $140</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
        <LiaLuggageCartSolid className="w-16 h-16"/>
        <p>FAST AND FREE DELIVERY</p>
        <span>Free delivery for all orders over $140</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
        <LiaLuggageCartSolid className="w-16 h-16"/>
        <p>FAST AND FREE DELIVERY</p>
        <span>Free delivery for all orders over $140</span>
        </div>
      </div>
      </div>
    </div>
  )
}
