import SideBar from "../components/SideBar";
import MapComponent from "../components/MapComponent";
import SearchComponent from "../components/SearchComponent";
import { useState } from "react";

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full gap-20">
      <div className="hidden md:block m-5 rounded-lg md:w-1/3 lg:w-1/5 h-screen overflow-scroll bg-[#39393F]">
        <SideBar setIsOpen={setIsOpen} />
      </div>
      <div className="w-full mt-10 flex-grow md:w-2/3  lg:w-3/4  text-center">
        <SearchComponent />
        <MapComponent />
      </div>
    </div>
  );
}

export default HomePage;
