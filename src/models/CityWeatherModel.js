export default class CityWeatherModel{
    constructor(city, temp, speed, description,id,humidity) {
        this.city = city;        
        this.temp = (temp -273.15).toFixed(2) ;
        this.speed = speed.toFixed(2) ;
        this.description = description;
        this.id = id;
        this.humidity = humidity;
        
    }
}