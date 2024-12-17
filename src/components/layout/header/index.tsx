import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import logo from "@src/assets/images/Logo.png";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
    return (
        <div className="flex px-5 md:py-5 w-full justify-center z-10">
            <div className="md:container w-full bg-white flex justify-between items-center py-5 border-2 rounded-none md:rounded-full px-5">
                <div className="flex gap-2 justify-end ps-3">
                    <button type="button" className="">
                        ثبت آگهی
                    </button>
                    <button type="button" className="hidden md:flex">
                        ورود
                    </button>
                </div>
                <div className="desc pe-3 hidden md:flex gap-2 justify-start">
                    <Navbar />
                    <Link className="" to={"/"}>
                        <img className="w-16 h-9" src={logo} alt="" />
                    </Link>
                </div>
                <Link className="flex md:hidden" to={"/"}>
                    <img className="w-16 h-9" src={logo} alt="" />
                </Link>
                <div className="mob flex md:hidden justify-between">
                    <HamburgerMenu />
                </div>
            </div>
        </div>
    );
};
