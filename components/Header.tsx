import Image from "next/image";
import logo from "../public/res-logo.png";
export default function Header() {
  return (
    <div className="grid items-center grid-cols-3 text-sm bg-gray-100">
      <div className="logo m-2">
        <Image className="w-12 h-12" src={logo} alt="Logooo" />
        <h2 className="text-lg font-semibold  eczar">Tasty Treat</h2>
      </div>
      <div className="justify-self-center nav m-2">
        <span className="font-semibold p-4">Home</span>
        <span className="font-semibold p-4">Foods</span>
      </div>
      <div className=" justify-self-end logo m-5 p-4">
        <span className="relative m-4 ">
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
          <span className="absolute -top-3.5 -right-3.5 bg-red-600 rounded-full px-1.5">
            0
          </span>
        </span>
        <span className="m-4">
          <i className="fa fa-user-o" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}
