import { Link } from "react-router-dom";

import footer_icon from "@src/assets/images/footer_icon.png";
import logo from "@src/assets/images/Logo.png";
import namad from "@src/assets/images/Enemad.png";

import { BsInstagram, BsTelegram, BsTelephoneFill } from "react-icons/bs";

const otherLink = [
    {
        id: 0,
        title: "بازارهای املاک و مستغلات",
        text1: " بازار املاک و مستغلات تهران ",
        link1: "/",
        text2: "بازار املاک و مستغلات شمال",
        link2: "/",
        text3: "بازار املاک و مستغلات اصفهان",
        link3: "/",
        moreText: "مشاهده بیشتر +",
        moreLink: "/",
    },
    {
        id: 1,
        title: "بیشترین جست‌وجوها",
        text1: "آپارتمان نزدیک مترو",
        link1: "/",
        text2: "خانه نزدیک بر اصلی خیابان",
        link2: "/",
        text3: "آپارتمان تک واحده",
        link3: "/",
        moreText: "مشاهده بیشتر +",
        moreLink: "/",
    },
    {
        id: 2,
        title: "پرامتیازترین مشاوران املاک",
        text1: "میترا جباری",
        link1: "/",
        text2: "حسام‌الدین عزیزی",
        link2: "/",
        text3: "بهرام مشعوف",
        link3: "/",
        moreText: "مشاهده بیشتر +",
        moreLink: "/",
    },
];

const contactInfo = [
    {
        id: 0,
        icon: <BsTelephoneFill size={24} color="rgb(133, 3, 3)" />,
        text: "تلفن",
        link: "/",
    },
    {
        id: 1,
        icon: <BsInstagram size={24} color="rgb(133, 3, 3)" />,
        text: "اینستاگرام",
        link: "/",
    },
    {
        id: 2,
        icon: <BsTelegram size={24} color="rgb(133, 3, 3)" />,
        text: "تلگرام",
        link: "/",
    },
];

const serveis = [
    {
        id: 0,
        title: "خدمات",
        text1: "اجاره",
        link1: "/",
        text2: "خرید",
        link2: "/",
        text3: "ثبت رایگان آگهی ملک",
        link3: "/",
        text4: "املاک و مستغلات",
        link4: "/",
        text5: "مشاورین املاک",
        link5: "/",
        text6: "اخبار روز املاک",
        link6: "/",
        text7: "سوال ملکی دارید؟",
        link7: "/",
    },
];

const info = [
    {
        id: 1,
        title: "اطلاعات",
        text1: "دانلود اپلیکشن سقفینو",
        link1: "/",
        text2: "تماس با ما",
        link2: "/",
        text3: "داستان ‌سقفینو",
        link3: "/",
        text4: "پرسش‌های پرتکرار",
        link4: "/",
        text5: "یک سقف؛ بلاگ سقفینو ",
        link5: "/",
        text6: "حریم شخصی شما",
        link6: "/",
        text7: "تعهدات ما و شما",
        link7: "/",
    },
];

const account = [
    {
        id: 0,
        text: "پروفایل من",
        link: "/",
    },
    {
        id: 1,
        text: "ملک‌های نشان‌شده",
        link: "/",
    },
    {
        id: 2,
        text: "آگهی‌های من",
        link: "/",
    },
];

export const Footer = () => {
    return (
        <>
            <div
                dir="rtl"
                className="flex justify-center items-center w-full bg-slate-200 cursor-default"
            >
                <div className="container hidden md:flex flex-col py-5 items-center flex-wrap justify-center">
                    <h3 className="text-center py-5 font-bold text-3xl">
                        سقفینو؛ سقفی ایده‌آل برای زندگی
                    </h3>
                    <div className="flex w-full justify-evenly">
                        <div className="flex flex-col">
                            <div className="flex py-5 gap-10">
                                {otherLink.map((item) => (
                                    <div
                                        className="flex flex-col gap-1 w-60 px-5"
                                        key={item.id}
                                    >
                                        <h5 className="font-bold py-2">
                                            {item.title}
                                        </h5>
                                        <Link
                                            to={item.link1}
                                            className="text-sm"
                                        >
                                            {item.text1}
                                        </Link>
                                        <Link
                                            to={item.link2}
                                            className="text-sm"
                                        >
                                            {item.text2}
                                        </Link>
                                        <Link
                                            to={item.link3}
                                            className="text-sm"
                                        >
                                            {item.text3}
                                        </Link>
                                        <Link
                                            to={item.moreLink}
                                            className="text-sm font-bold text-red-700"
                                        >
                                            {item.moreText}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="flex py-5 justify-around">
                                <div className="flex flex-col py-5 w-64">
                                    <img className="w-44" src={logo} alt="" />
                                    <h5 className="font-bold py-2">
                                        تجربه لذت خانه‌دار شدن سریع و آسان
                                    </h5>
                                    <p className="text-sm">
                                        سقفینو پلی است تا به سرعت در بین هزاران
                                        آگهی ثبت‌شده جست‌وجو کنید.
                                    </p>
                                    <p className="text-sm">
                                        ملک مورد نظر را پیدا کنید و برای انجام
                                        معامله‌ای مطمئن، با مشاورین املاک معتمد
                                        و متخصص شهرتان در ارتباط باشید.
                                    </p>
                                </div>
                                <div className="flex justify-around gap-10 py-5">
                                    {serveis.map((itme) => (
                                        <div
                                            className="flex flex-col w-48 gap-1"
                                            key={itme.id}
                                        >
                                            <h5 className="font-bold">
                                                {itme.title}
                                            </h5>
                                            <Link to={itme.link1} className="c">
                                                {itme.text1}
                                            </Link>
                                            <Link to={itme.link2} className="c">
                                                {itme.text2}
                                            </Link>
                                            <Link to={itme.link3} className="c">
                                                {itme.text3}
                                            </Link>
                                            <Link to={itme.link4} className="c">
                                                {itme.text4}
                                            </Link>
                                            <Link to={itme.link5} className="c">
                                                {itme.text5}
                                            </Link>
                                            <Link to={itme.link6} className="c">
                                                {itme.text6}
                                            </Link>
                                            <Link to={itme.link7} className="c">
                                                {itme.text7}
                                            </Link>
                                        </div>
                                    ))}
                                    {info.map((itme) => (
                                        <div
                                            className="flex flex-col w-48 gap-1"
                                            key={itme.id}
                                        >
                                            <h5 className="font-bold">
                                                {itme.title}
                                            </h5>
                                            <Link to={itme.link1} className="c">
                                                {itme.text1}
                                            </Link>
                                            <Link to={itme.link2} className="c">
                                                {itme.text2}
                                            </Link>
                                            <Link to={itme.link3} className="c">
                                                {itme.text3}
                                            </Link>
                                            <Link to={itme.link4} className="c">
                                                {itme.text4}
                                            </Link>
                                            <Link to={itme.link5} className="c">
                                                {itme.text5}
                                            </Link>
                                            <Link to={itme.link6} className="c">
                                                {itme.text6}
                                            </Link>
                                            <Link to={itme.link7} className="c">
                                                {itme.text7}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col py-5">
                                <h5 className="font-bold py-2">
                                    با ما در ارتباط باشید
                                </h5>
                                {contactInfo.map((item) => (
                                    <div
                                        className="flex py-1 gap-1"
                                        key={item.id}
                                    >
                                        <span>{item.icon}</span>
                                        <Link className="px-2" to={item.link}>
                                            {item.text}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <h5 className="font-bold pb-2">حساب کاربری</h5>
                                <div className="flex flex-col gap-1">
                                    {account.map((item) => (
                                        <Link to={item.link} key={item.id}>
                                            {item.text}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex">
                                <img
                                    className="bg-gray-200"
                                    src={namad}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <img src={footer_icon} alt="" />
                    <p className="py-5 font-bold">
                        حقوق این سایت متعلق به سقفینو است
                    </p>
                </div>
                <div className="flex flex-col pt-5 container px-3 md:hidden">
                    <img src={logo} alt="" className="w-20 py-2" />
                    <h3 className="font-bold text-lg">
                        سقفینو؛ سقفی برای یک زندگی ایده‌آل
                    </h3>
                    <p className="text-sm">تجربه لذت خانه‌دار شدن آنی و آسان</p>
                    <div className="flex text-xs py-5 justify-between">
                        <Link to={"/"} className="">
                            بیشترین جست‌وجوها
                        </Link>
                        <Link to={"/"} className="">
                            بازارهای املاک و مستغلات
                        </Link>
                    </div>
                    <p className="text-xs">
                        سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده
                        جست‌وجو کنید. ملک مورد نظر را پیدا کنید و برای انجام
                        معامله‌ای مطمئن، با مشاورین املاک معتمد و متخصص شهرتان
                        در ارتباط باشید.
                    </p>
                    <div className="flex justify-between text-xs py-5">
                        {serveis.map((itme) => (
                            <div
                                className="flex flex-col gap-1"
                                key={itme.id}
                            >
                                <h5 className="font-bold">{itme.title}</h5>
                                <Link to={itme.link1} className="c">
                                    {itme.text1}
                                </Link>
                                <Link to={itme.link2} className="c">
                                    {itme.text2}
                                </Link>
                                <Link to={itme.link3} className="c">
                                    {itme.text3}
                                </Link>
                                <Link to={itme.link4} className="c">
                                    {itme.text4}
                                </Link>
                                <Link to={itme.link5} className="c">
                                    {itme.text5}
                                </Link>
                                <Link to={itme.link6} className="c">
                                    {itme.text6}
                                </Link>
                                <Link to={itme.link7} className="c">
                                    {itme.text7}
                                </Link>
                            </div>
                        ))}

                        <div className="flex flex-col ">
                            <h5 className="font-bold">
                                ارتباط با ما
                            </h5>
                            {contactInfo.map((item) => (
                                <div className="flex py-1 gap-1" key={item.id}>
                                    <span>{item.icon}</span>
                                    <Link className="" to={item.link}>
                                        {item.text}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {info.map((itme) => (
                            <div
                                className="flex flex-col gap-1"
                                key={itme.id}
                            >
                                <h5 className="font-bold">{itme.title}</h5>
                                <Link to={itme.link1} className="c">
                                    {itme.text1}
                                </Link>
                                <Link to={itme.link2} className="c">
                                    {itme.text2}
                                </Link>
                                <Link to={itme.link3} className="c">
                                    {itme.text3}
                                </Link>
                                <Link to={itme.link4} className="c">
                                    {itme.text4}
                                </Link>
                                <Link to={itme.link5} className="c">
                                    {itme.text5}
                                </Link>
                                <Link to={itme.link6} className="c">
                                    {itme.text6}
                                </Link>
                                <Link to={itme.link7} className="c">
                                    {itme.text7}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end py-5">
                        <img className="bg-gray-200 " src={namad} alt="" />
                    </div>
                    <img src={footer_icon} alt="" className="" />
                    <p className="py-1 font-bold text-center">
                        حقوق این سایت متعلق به سقفینو است
                    </p>
                </div>
            </div>
        </>
    );
};
