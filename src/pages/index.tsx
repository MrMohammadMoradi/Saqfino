import { SearchMain } from "@src/components/SearchMain";

export const HomePage = () => {
    return (
        <>
            <div className=" md:absolute top-0 left-0 w-full h-[450px] md:h-[690px] bg-[url('@src/assets/images/LandingPhoto.png')] bg-cover bg-center bg-no-repeat">
                <div className="h-40 md:hidden"></div>
                <div className="flex flex-col items-center md:absolute px-3 text-center md:top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2">
                    <h3 className="font-bold text-white text-xl md:text-5xl pb-3">
                        سقفینو؛ سقفی برای همه
                    </h3>
                    <p className="font-bold text-white text-sm md:text-3xl">
                        آسانی و سرعت در پیدا کردن یک سقف تازه را در سقفینو تجربه
                        کنید
                    </p>
                    <div className="w-64 md:w-[750px]">
                    <SearchMain/>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex h-[600px]"></div>
            <div className="container flex"></div>
        </>
    );
};
