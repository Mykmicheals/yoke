import { useState, ChangeEvent } from "react";
import cities from "../utils/cities.json";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setLat, setLng } from "../Store";

function SearchComponent() {
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);


  const dispatch = useDispatch();

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setShowFilter(true);
  };

  const handleSearch = () => {
    console.log(filter);
  };

  return (
    <div>
      <div className="relative w-full max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          className="block w-full rounded-full bg-gray-100 border-transparent focus:border-gray-500  focus:ring-0 pl-10 pr-10 py-3 text-sm placeholder-gray-500 focus:outline-none"
          type="text"
          placeholder="Search for City"
          value={filter}
          onChange={handleFilterChange}
        />

        <div className="absolute top-0 right-0 h-full flex items-center">
          <button
            onClick={handleSearch}
            className="px-8 bg-[#E4316F] py-2 text-gray-200 rounded-r-full focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>

      {showFilter && (
        <div className="w-4/5 flex justify-center absolute z-10 ">
          <ul className="mt-2 w-1/2 rounded-md bg-gray-100 shadow-lg max-h-32 overflow-auto mx-auto">
            {filteredCities?.map((city) => (
              <li
                onClick={() => {
                  setFilter(city.name);
                  setShowFilter(false);
                  dispatch(setLat(city.lat));
                  dispatch(setLng(city.lng));
                }}
                key={city.lat}
                className="py-2 px-3  hover:bg-gray-100"
              >
                {city.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
