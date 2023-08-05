import React from "react";
import { BsGooglePlay } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-800 py-8 md:py-12 shadow-xl">
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-8 text-zinc-200 mx-auto">
        <div className="space-y-4 p-4 md:col-span-2"> {/* Fix grid-2 to md:col-span-2 */}
          <h4 className="text-2xl font-bold ">LOJINHA</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            beatae et architecto id expedita inventore fugiat maiores nam iste
            hic.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center sm:justify-start border-2 border-zinc-600 rounded-xl py-2 px-4">
              <BsGooglePlay className="mr-2" size={30} />
              <span className="hidden sm:flex">Google Play</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start border-2 border-zinc-600 rounded-xl py-2 px-4">
              <FaAppStoreIos className="mr-2" size={30} />
              <span className="hidden sm:flex">App Store</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 p-4">
          <h4 className="text-2xl font-bold">Categories</h4>
          <p>CellPhone</p>
          <p>Tablet</p>
          <p>SmartWatch</p>
          <p>HeadPhone</p>
          <p>Television</p>
        </div>

        <div className="space-y-4 p-4">
          <h4 className="text-2xl font-bold">Contact</h4>
          <div className="flex items-center">
            <BiMap className="mr-2" size={25} />
            <span>1234 Elm Street, Springfield</span>
          </div>
          <div className="flex items-center">
            <GrMail className="mr-2" size={25} />
            <span>Email: lojinha@gmail.com</span>
          </div>
          <div className="flex items-center">
            <BsFillPhoneFill className="mr-2" size={25} />
            <span>Phone: 41 99843-0183</span>
          </div>
        </div>

        <div className="space-y-4 p-4">
          <h4 className="text-2xl font-bold">Customer Support</h4>
          <p>Help Center</p>
          <p>How to Buy</p>
          <p>Track Your Order</p>
          <p>Returns & Refunds</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
