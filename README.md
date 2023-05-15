# To run the project

-  On the terminal run the command

## `git clone https://github.com/Mykmicheals/yoke.git `

Navigate to the project directory, and run:

 `cd yoke `


 # Project Structure

- `src/`: Source code directory
  - `components/`: React components directory
      - `Header.js`: Header component implementation
      - `Sidebar.js`: Sidebar component implementation
      - `SearchComponent.tsx`: Searchbar component 
      - `MapComponent.tsx` : Component to display Map component
  - `pages/`: React pages directory
      - `HomePage.tsx`: Home page component implementation
      - `Home.css`: CSS styles for the Home page component

- `public/`: Public directory
  - `index.html`: HTML template file
  - `favicon.ico`: Favicon icon file
  - `assets/`: Static assets directory
    - `images/`: Image files directory

- `package.json`: NPM package configuration file
- `README.md`: Project README file

 Install all depenecies using :

` yarn install `

Run the app using the command

` yarn start `



- Runs the app in the development mode.\
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.




## The HomePage

<img width="1678" alt="homescreen" src="https://github.com/Mykmicheals/yoke/assets/88559940/7a55e3e7-471c-4cbe-b9fc-3a0431011211">



### The Modal Page

<img width="1678" alt="modalhome" src="https://github.com/Mykmicheals/yoke/assets/88559940/b78d81e3-48d3-4b0d-83ff-176f538e144e">


### The Mobile View


<img width="499" alt="mobile" src="https://github.com/Mykmicheals/yoke/assets/88559940/c3037297-6847-4c80-8953-a488b7cbc197">


### The Mobile Sidebar View

<img width="499" alt="sidebar" src="https://github.com/Mykmicheals/yoke/assets/88559940/c359fadf-fa19-40ee-96a9-5188186b9693">



## The Redex store


```

import { createSlice, configureStore } from "@reduxjs/toolkit";

interface sliceTypes {
  lat: number | null;
  lng: number | null;
}

const initialState: sliceTypes = {
  lat: 40.7128,
  lng: -74.006,
};

const mapSlice = createSlice({
  name: "map",
  initialState: initialState,
  reducers: {
    setLat(state, action) {
      state.lat = action.payload;
    },
    setLng(state, action) {
      state.lng = action.payload;
    },
  },
});

export const { setLat, setLng } = mapSlice.actions;

const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const mapStore = (state: RootState) => state.map;

export default store;


```


### Fetch Weather Function

``` 
const fetchWeather = useCallback(async () => {
     const fetchUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${value.lat}&lon=${value.lng}&exclude=minutely,hourly&units=metric&appid=${weatherApiKey}`
  setLoading(true);
  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error('Weather data request failed');
    }
    const data = await response.json();
    setForecast(data?.daily.slice(0, 2));
    setLoading(false);
  } catch (error) {
    console.error('Error fetching weather data:', error);
   alert('error')
  }
}, [weatherApiKey, value.lat, value.lng]);

```

### Render Map Logic

```

 <Map
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{ height: '54vh' }}
        longitude={value.lng}
        latitude={value.lat}
        zoom={10}
      >
        <Marker
          longitude={value.lng}
          latitude={value.lat}
          anchor="bottom"
        >
          <HiLocationMarker  onClick={handleMarkerClick} size={32} color="red" />
        </Marker>

        {showPopup && (
          <Popup
            className="mt-28"
            longitude={value.lng}
            latitude={value.lat}
           
            onClose={() => setShowPopup(false)}
          closeOnClick={false}
            anchor="bottom"
          >
            <WeatherComponent showPopup = {showPopup} />
          </Popup>
         )} 
      </Map>

```