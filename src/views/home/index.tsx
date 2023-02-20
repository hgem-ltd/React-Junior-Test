import React from "react";
import { Link } from "react-router-dom";

export default function HeroComponent() {
  return (
    <div className='bg-[url("https://sr-images.eu-central-1.linodeobjects.com/_1920x1440_crop_center-center_none/Interior2_050.jpg")] h-screen w-screen bg-cover bg-center'>
      <div className="flex w-full h-full justify-center backdrop-brightness-75">
        <div className="flex flex-col items-center p-64">
          <h1 className="text-4xl font-bold text-center text-white">
            Benito's
          </h1>
          <p className="m-4 text-lg text-center text-white">
            We got the best food around. Don't believe us? See for yourself.
          </p>
          <Link to="/menu">
            <button className="px-4 py-1 text-lg text-center text-white border border-white rounded-md hover:bg-white hover:text-black">
              Our Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
