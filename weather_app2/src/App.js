import React,{Component} from 'react';
import Formcomp from './Formcomp';
import Weathercomp from './Weathercomp';
class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
    };

    this.weatherIcon = {
      Thunderstorm: " fa-cloud-showers-heavy",
      Drizzle: "fa-cloud-rain",
      Rain: "fa-cloud-showers-heavy",
      Snow: "fa-snowflake",
      Atmosphere: "fa-cloud-moon-rain",
      Clear: "fa-cloud-moon",
      Clouds: "fa-cloud"
    };
  }
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async e => {
    e.preventDefault();

    try{
    const city = e.target.elements.city.value;

    if (city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd58ff5dbef8c84fbba211800b4d3cf9`
      );

      const response = await api_call.json();
  
      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });

      // seting icons
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

      console.log(response);
    }
    
     else {
      this.setState({
        error: true
      });
    }
  }
  catch(error)
           {alert("No City")}
  };
  render() {
  
    return (
      <div classname="container">
        <div className="row mt-5">
          <div className="offset-sm-4 col-sm-4 bg-white">
          <div className="p-3">
            <h1 className="text-primary text-center">
              Weather App
            </h1>
            <Formcomp loadweather={this.getWeather} error={this.state.error}/>
            <Weathercomp
             cityname={this.state.city}
             weatherIcon={this.state.icon}
             temp_celsius={this.state.celsius}
             temp_max={this.state.temp_max}
             temp_min={this.state.temp_min}
             description={this.state.description}/>
          </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

