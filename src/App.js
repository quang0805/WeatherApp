
import React from 'react';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6751b9479ebb0d4f8211297600b9fce2`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      })
      setLocation('');
    }
  }

  return (
    <div className="app">

      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={e => searchLocation(e)}
          placeholder='Enter location'
          type="text" />
      </div>



      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data ? data.name : ''}</p>
          </div>
          <div className='temp'>
            <h1>{data.main ? data.main.temp.toFixed() : ''} °F</h1>
          </div>
          <div className='description'>
            <p>{data.weather ? data.weather[0].main : ''}</p>
          </div>
        </div>
        <div className='bottom'>
          <div className="feels">
            <p className='bold'>{data.main ? data.main.feels_like.toFixed() : ''} °F</p>
            <p>Feels Like</p>

          </div>
          <div className="humidity">
            <p className='bold'>{data.main ? data.main.humidity.toFixed() : ''}%</p>
            <p>Humidity</p>

          </div>
          <div className="wind">
            <p className='bold'>{data.wind ? data.wind.speed.toFixed() : ' '} MPH</p>
            <p>Wind Speed</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
