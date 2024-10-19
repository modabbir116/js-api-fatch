let type_text = document.querySelector("#type_text")
let button = document.querySelector("#button")

let country = document.getElementById("country")
let city = document.getElementById("city")
let region = document.getElementById("region")
let temperature = document.getElementById("temperature")
let condition = document.getElementById("condition")
let localtime = document.getElementById("localtime")


async function getData(cityName){
 const featch_api = await fetch(`http://api.weatherapi.com/v1/current.json?key=d03ac81141634ce699480619241910&q=${cityName}&aqi=yes`)

 return await featch_api.json()
}
 button.addEventListener("click", async ()=>{
   let input = type_text.value;
    let result = await getData(input)
    console.log(result);

    country.innerHTML = `${result.location.country}`
    city.innerHTML = `${result.location.name}`
    region.innerHTML = `${result.location.region='Islam'}`
    temperature.innerHTML = `${result.current.temp_c}`
    condition.innerHTML = `${result.current.condition.text}`
    localtime.innerHTML = `${result.location.localtime}`
    
})