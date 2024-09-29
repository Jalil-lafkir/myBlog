import React from "react";

export const Auteur = () => {
  return (
    <div className="flex items-center gap-x-4">
      <img
        alt=""
        src="https://scontent.forn3-6.fna.fbcdn.net/v/t39.30808-1/408964817_1587989998405895_5541694720847871021_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=BA11ASKNRQQQ7kNvgHYUS_8&_nc_ht=scontent.forn3-6.fna&oh=00_AYB6B-p3ZIe89F6evGBtFxzRG_24Izzb0X2pD1qZsewyWA&oe=66FB6F8C"
        className="h-12 w-12 rounded-full"
      />
      <div>
        <h3 className="text-base text-gray">ABDELJALIL LAFKIR</h3>
        <p className="text-xs text-gray cursor-pointer hover:underline">
          @jalil-lafkir
        </p>
      </div>
    </div>
  );
};
