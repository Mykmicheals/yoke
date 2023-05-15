import { useState } from "react";
import cities from "../utils/cities.json";
import { setLat,setLng } from "../Store";
import { useDispatch } from "react-redux";


const SideBar = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0].name);

    const dispatch = useDispatch()
    const handleCityClick = (city: any) => {
    dispatch(setLat(city.lat))
   dispatch(setLng(city.lng))
    setSelectedCity(city.name);
  };

  return (
    <div>
      <h3 className="text-white text-center text-2xl font-mono mt-4">Cities</h3>
      <div className="mt-6 mx-5 md:mx-10">
        {cities.map((each: any) => {
          const isActive = selectedCity === each.name;
          const bgStyle = isActive ? 'bg-[#E4316F]' :'';

          return (
            <p
              key={each.name}
              onClick={() => handleCityClick(each)}
              className={`text-gray-300 text-sm pointer mb-2 ${bgStyle} px-6 rounded-lg py-2 hover:cursor-pointer`}
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
