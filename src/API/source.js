export default class apiInfo {
     static  getInfo(loc, apiKey)  {
        const response =  `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        return response
     }



}
