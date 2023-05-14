import React,{ChangeEvent,useState} from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar';
import { FaSearch } from 'react-icons/fa'
import cities from '../utils/cities.json'
import { useSelector } from 'react-redux';

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [lng, setLng] = useState(3.3792);
  const [lat, setLat] = useState(6.5244);
  const [zoom, setZoom] = useState(9);
  const [city, setCity] = useState("Lagos");
  const [forecast, setForecast] = useState<any>();

  const value = useSelector((state:any)=>state.map)
    
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(filter.toLowerCase())
  );


  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
   setFilter(event.target.value);
    setShowFilter(true);
  };

  const handleSearch = () => {
console.log(filter)
  };


  const fetchWeather = async () => {
   
  };

  return (
   <div className="flex w-full gap-20">
        <div className="hidden md:block m-5 rounded-lg md:w-1/3 lg:w-1/5 h-screen overflow-scroll bg-[#39393F]">
          <SideBar />
        </div>
 

        <div className="w-full mt-10 flex-grow md:w-2/3  lg:w-3/4  text-center">
          <div>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                className="block w-full rounded-full bg-gray-100 border-transparent focus:border-gray-500  focus:ring-0 pl-10 pr-10 py-1 text-sm placeholder-gray-500 focus:outline-none"
                type="text"
                placeholder="Search for City"
                value={filter}
                onChange={handleFilterChange}
              />

              <div className="absolute top-0 right-0 h-full flex items-center pr-3">
                <button
                  onClick={handleSearch}
                  className="px-8 bg-[#E4316F] text-gray-200 rounded-r-full focus:outline-none"
                >
                  Search
                </button>
              </div>
            </div>

            {showFilter && (
              <div className="w-full flex justify-center left-20 absolute z-50 ">
                <ul className="mt-2 w-1/2 rounded-md bg-white shadow-lg max-h-32 overflow-auto mx-auto">
                  {filteredCities?.map((city) => (
                    <li
                      onClick={() => {
                        setFilter(city.name);
                        setCity(city.name);
                        setShowFilter(false);
                        setLat(city.lat);
                        setLng(city.lng);
                      }}
                      key={city.lat}
                      className="py-2 px-3 hover:bg-gray-100"
                    >
                      {city.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

        
          </div>
        </div>
 
   
      </div>
  )
}

export default HomePage