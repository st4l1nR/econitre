import React from "react";
import Map from "./Map";
import Phone from "../../../../public/icons/phone.svg";
import Email from "../../../../public/icons/email.svg";
import Location from "../../../../public/icons/location.svg";
import Whatsapp from "../../../../public/icons/whatsapp.svg";
import Facebook from "../../../../public/icons/facebook.svg";

const index = () => {
  return (
    <footer className="mt-20">
      <Map
        className="w-full h-64"
        center={{
          lat: -0.25002844139707947,
          lng: -79.17058994233798,
        }}
        zoom={15}
      />

      <div className="flex flex-col justify-between h-40 py-5 mx-auto space-y-10 text-white max-w-7xl">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:divide-x-2">
          <div className="flex items-center pl-2 space-x-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
              <Location className="fill-white" />
            </div>
            <span className="flex-1">
              Calle Latacunga 113, Santo Domingo, Ecuador
            </span>
          </div>
          <div className="flex items-center pl-2 space-x-5 ">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
              <Phone className="fill-white" />
            </div>
            <div className="flex flex-col flex-1">
              <span>Telf: 022761995</span>
              <span>Cel: +593 96 274 2657</span>
            </div>
          </div>
          <div className="flex items-center pl-2 space-x-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
              <Email className="fill-white" />
            </div>
            <span className="flex-1 break-all">wilsonramos79@hotmail.com</span>
          </div>
          <div className="flex items-center pl-5 space-x-8">
            <a href="https://wa.me/593979372502?lang=es" target="_blank">
              <Whatsapp className="transform scale-150" />
            </a>
            <a href="https://www.facebook.com/econitre" target="_blank">
              <Facebook className="transform scale-150" />
            </a>
          </div>
        </div>
        <span className="mx-auto">© 2022 All Coyrights reserved</span>
      </div>
    </footer>
  );
};

export default index;
