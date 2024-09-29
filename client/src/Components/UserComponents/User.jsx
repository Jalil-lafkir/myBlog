import React from "react";

const User = () => {
  return (
    <div className="flex items-center gap-x-6 py-4 w-[90%]">
      <img
        className="h-16 w-16 rounded-full"
        src="https://scontent.forn3-6.fna.fbcdn.net/v/t39.30808-1/408964817_1587989998405895_5541694720847871021_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=BA11ASKNRQQQ7kNvgHYUS_8&_nc_ht=scontent.forn3-6.fna&oh=00_AYB6B-p3ZIe89F6evGBtFxzRG_24Izzb0X2pD1qZsewyWA&oe=66FB6F8C"
        alt=""
      />
      <div>
        <h3 className="text-base text-gray">ABDELJALIL LAFKIR</h3>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray cursor-pointer hover:underline">
            @jalil-lafkir
          </p>
          <span className="text-xs bg-blue px-2 py-[1px] cursor-pointer rounded-md text-white">
            Admin
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
