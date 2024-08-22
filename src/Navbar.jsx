import logo from "./assets/rock-hand.svg";

const Navbar = () => {
  return (
    <div className="max-w-5xl py-4 px-1 mx-auto relative ">
      <div className="w-full flex items-center justify-between ">
        <div className="flex flex-row items-center">
          <img src={logo} alt="" className="w-7" />
          <p className="text-lg font-bold text-white">RpsBattle.io</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
