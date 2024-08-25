import logo from "../assets/rock-hand.svg";

const Footer = () => {
  return (
    <div className="max-w-5xl py-4 px-1 mx-auto relative ">
      <div className="w-full flex justify-center">
        <div className="flex flex-row items-center">
          <img src={logo} alt="" className="w-7" />
          <p className="text-xs sm:text-lg font-medium text-white">
            Copyright © 2024 RpsBattle.io. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
