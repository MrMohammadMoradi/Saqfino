import { Link } from "react-router-dom";

const data = [
    {
        id: 0,
        text: "اجاره",
        link: "",
    },
    {
        id: 1,
        text: "خرید",
        link: "",
    },
    {
        id: 2,
        text: "املاک و مستغلات",
        link: "",
    },
    {
        id: 3,
        text: "مشاورین املاک",
        link: "",
    },
    {
        id: 4,
        text: "اخبار روز",
        link: "",
    },
];
export const Navbar = () => {
    return (
        <nav>
            <ul className="flex flex-col md:flex-row gap-2 p-2">
                <li className="flex md:hidden">
                    <Link to={""}>ورود/ ثبت نام</Link>
                </li>
                {data.map((item) => (
                    <li key={item.id}>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
