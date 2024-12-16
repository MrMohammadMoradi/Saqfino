import Hamburger from "hamburger-react";
import { useState } from "react";
import { Navbar } from "./Navbar";

export const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* className={`absolute z-10 bg-blue-300 backdrop:blur-md w-60 top-14 ${i18n.dir() == "rtl" ? ("right-12") : ("left-12")} p-2 rounded-xl shadow-lg`} */}
            <Hamburger size={20} toggle={setOpen} toggled={open} />
            {open && (
                <div className="absolute bg-white p-2 rounded-xl z-10 top-16 right-10 gap-2">
                    <Navbar />
                </div>
            )}
        </>
    );
};
