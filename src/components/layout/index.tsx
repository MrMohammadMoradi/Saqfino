import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Header />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
