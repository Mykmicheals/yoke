import { useState } from "react";
import cities from "../utils/cities.json";
// import { setLat, setLng } from "../store/store";


const SideBar = ({ setLat, setLng, setCity }: any) => {
  const [selectedCity, setSelectedCity] = useState(cities[0].name);
  
    const handleCityClick = (city: any) => {
    // setLat(city.lat);
    // setLng(city.lng);
    // setCity(city.name);
    setSelectedCity(city.name);
  };

  return (
    <div>
      <h3 className="text-white text-center text-3xl font-mono mt-8">Cities</h3>
      <div className="mt-12 mx-5 md:mx-10">
        {cities.map((each: any) => {
          const isActive = selectedCity === each.name;
          const bgStyle = isActive ? 'bg-[#E4316F]' :'';

          return (
            <p
              key={each.name}
              onClick={() => handleCityClick(each)}
              className={`text-gray-300  text-xl pointer mb-8 ${bgStyle} px-6 py-2 hover:cursor-pointer`}
            >
              {each.name}
            </p>
          );
        })}
      </div>
    </div>
  );

};

export default SideBar;
