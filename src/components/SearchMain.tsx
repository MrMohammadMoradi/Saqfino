import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export const SearchMain = () => {
    const [selectedTab, setSelectedTab] = useState<"خرید" | "اجاره">("اجاره");
    const [query, setQuery] = useState<string>("");

    return (
        <div className="flex flex-col items-center justify-end p-4">
            <div className="flex items-center bg-white px-5 w-full border rounded-t-md overflow-hidden">
                <button
                    type="button"
                    className={`flex-1 text-center p-2 ${
                        selectedTab === "خرید"
                            ? "text-black font-bold border-b-2 border-red-700"
                            : "text-gray-500"
                    }`}
                    onClick={() => setSelectedTab("خرید")}
                >
                    خرید
                </button>
                <button
                    type="button"
                    className={`flex-1 text-center p-2 ${
                        selectedTab === "اجاره"
                            ? "text-black font-bold border-b-2 border-red-700"
                            : "text-gray-500"
                    }`}
                    onClick={() => setSelectedTab("اجاره")}
                >
                    اجاره
                </button>
            </div>

            <div className="flex items-center w-full relative">
                <input
                    type="text"
                    placeholder="تهران"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-2 border rounded-b-md outline-none"
                />
                <span className="absolute right-2">
                <LuSearch size={28} />
                </span>
            </div>
        </div>
    );
};

