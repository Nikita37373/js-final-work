
const kyiv = "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=11c7611437bad5ad92ee447c722dfefc&units=metric"
const lviv = "https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=11c7611437bad5ad92ee447c722dfefc&units=metric"
const kharkiv = "https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=11c7611437bad5ad92ee447c722dfefc&units=metric"
const odesa = "https://api.openweathermap.org/data/2.5/weather?q=Odesa&appid=11c7611437bad5ad92ee447c722dfefc&units=metric"


//let url = `https://api.openweathermap.org/data/2.5/weather?q=Rivne&appid=11c7611437bad5ad92ee447c722dfefc&units=metric`
let url5days =``
let url = ``

function Searchbtn()
{
  
  const wantedCity = document.getElementById("wantedCity").value;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${wantedCity}&appid=11c7611437bad5ad92ee447c722dfefc&units=metric`
  url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${wantedCity}&appid=11c7611437bad5ad92ee447c722dfefc&units=metric`
  console.log(wantedCity)

  localStorage.setItem("city", wantedCity);

  PrintData(url, url5days)

}

async function PrintData(url ,url5days)
{
 


    const response = await fetch(url);
    const data = await response.json();
    
    

    const tbody = document.getElementById("tbody");
    const headdiv = document.getElementById("headdiv");
    const date = new Date();
    
    const y = date.getFullYear()
    const m = date.getMonth() + 1 
    const d = date.getDate()

    const sunriseTimestamp = data.sys.sunrise;
    const sunriseDate = new Date(sunriseTimestamp * 1000);
    
    const sunsetTimestamp = data.sys.sunset;
    const sunsetDate = new Date(sunsetTimestamp * 1000);
    
   
   
    headdiv.innerHTML = ""

    headdiv.innerHTML +=`
    <div>
    <label style="font-weight: bold; margin: 5px;color:rgb(0, 202, 202);  ">CURRENT WEATHER</label>
    <div  style="
    
    margin-left: auto;
    margin-right: auto;
    width: 1em">
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
      <div>
        <label for="">${data.weather[0].main}</label>
      </div>
    </div>
  </div>
  <div class="centerHD">
    <div>
      <label style="font-size:50px;">${Math.round(data.main.temp)}°</label>
    </div>
    <div>
      <label for="">Real Feel ${Math.round(data.main.feels_like)}°С</label>
    </div>
  </div>
  <div style="width: 250px; ">
    <div style="  display:flex; justify-content: right;"> 
      <label class="elemdate"   ">${d}/${m}/${y}</label>
    </div>
    <div class="properties">
      <label for="">Sunrise : ${sunriseDate.getHours()}:${sunriseDate.getMinutes()} am</label>
      <label for="">Sunset : ${sunsetDate.getHours()-12}:${sunsetDate.getMinutes()} pm</label>
      <label for="">Duration : ${sunsetDate.getHours() -sunriseDate.getHours() -1}:${60+sunsetDate.getMinutes() -sunriseDate.getMinutes()} hr</label>
    </div>

  </div>
    `


    const response2 = await fetch(url5days);
    const data2 = await response2.json();
    console.log(data2)

    tbody.innerHTML=""

    tbody.innerHTML += `
                
                <tr>
                    <td>Forecast</td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                        <img src="https://openweathermap.org/img/wn/${data2.list[1].weather[0].icon}.png">
                        <label>${data2.list[1].weather[0].main}</label>
                      </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[2].weather[0].icon}.png">
                      <label>${data2.list[2].weather[0].main}</label>
                      </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[3].weather[0].icon}.png">
                      <label>${data2.list[3].weather[0].main}</label>
                      </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[4].weather[0].icon}.png">
                      <label>${data2.list[4].weather[0].main}</label>
                       </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[5].weather[0].icon}.png">
                      <label>${data2.list[5].weather[0].main}</label>
                       </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[6].weather[0].icon}.png">
                      <label>${data2.list[6].weather[0].main}</label>  
                      </div>
                   </td>
                  <td>
                    <div style="display: flex; flex-direction: column; width: 50px;">
                    <img src="https://openweathermap.org/img/wn/${data2.list[7].weather[0].icon}.png">
                    <label>${data2.list[7].weather[0].main}</label>  
                    </div>
                  </td>
                  <td>
                    <div style="display: flex; flex-direction: column; width: 50px;">
                    <img src="https://openweathermap.org/img/wn/${data2.list[8].weather[0].icon}.png">
                    <label>${data2.list[8].weather[0].main}</label>  
                    </div>
                  </td>
                   
                </tr>
                               
                <tr>
                    <td>Temp</td>
                    <td>${Math.round(data2.list[1].main.temp)}°</td>
                    <td>${Math.round(data2.list[2].main.temp)}°</td>
                    <td>${Math.round(data2.list[3].main.temp)}°</td>
                    <td>${Math.round(data2.list[4].main.temp)}°</td>
                    <td>${Math.round(data2.list[5].main.temp)}°</td>
                    <td>${Math.round(data2.list[6].main.temp)}°</td>
                    <td>${Math.round(data2.list[7].main.temp)}°</td>
                    <td>${Math.round(data2.list[8].main.temp)}°</td>
                    
                </tr>
                
                <tr>
                    <td>RealFeel</td>
                    
                    <td>${Math.round(data2.list[1].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[2].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[3].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[4].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[5].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[6].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[7].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[8].main.feels_like)}°</td>
                </tr>
                
                <tr>
                    <td>Wind(km/h)</td>
                    <td>${data2.list[1].wind.speed} ESE</td>
                    <td>${data2.list[2].wind.speed} ESE</td>
                    <td>${data2.list[3].wind.speed} ESE</td>
                    <td>${data2.list[4].wind.speed} ESE</td>
                    <td>${data2.list[5].wind.speed} ESE</td>
                    <td>${data2.list[6].wind.speed} ESE</td>
                    <td>${data2.list[7].wind.speed} ESE</td>
                    <td>${data2.list[8].wind.speed} ESE</td>
                    
                </tr>
            `;


    const downdiv = document.getElementById("downdiv");
            
    const responsekyiv = await fetch(kyiv);
    const datakyiv = await responsekyiv.json();
        
    const responseLviv = await fetch(lviv);
    const dataLviv = await responseLviv.json();
        
    const responseKharkiv = await fetch(kharkiv);
    const dataKharkiv = await responseKharkiv.json();
        
    const responseOdesa = await fetch(odesa);
    const dataOdesa = await responseOdesa.json();                  

    downdiv.innerHTML=""

    downdiv.innerHTML+= 
    `
    <label style="font-weight: bold; margin: 5px; color:rgb(0, 202, 202); ">NEARBY PLACES</label>
          <div style="padding: 10px; margin:auto;">
            <div class="cities">
              <label for="">Lviv</label>
              <img src="https://openweathermap.org/img/wn/${dataLviv.weather[0].icon}.png">
              <label for="">${Math.round(dataLviv.main.temp)}°C</label>
            </div>
            <div class="cities">
              <label for="">Kyiv</label>
              <img src="https://openweathermap.org/img/wn/${datakyiv.weather[0].icon}.png">
              <label for="">${Math.round(datakyiv.main.temp)}°C</label>
            </div>
          </div>
          <div style="padding: 10px; margin:auto;">
            <div class="cities">
              <label for="">Kharkiv</label>
              <img src="https://openweathermap.org/img/wn/${dataKharkiv.weather[0].icon}.png">
              <label for="">${Math.round(dataKharkiv.main.temp)}°C</label>
            </div>
            <div class="cities">
              <label for="">Odesa</label>
             <img src="https://openweathermap.org/img/wn/${dataOdesa.weather[0].icon}.png">
              <label for="">${Math.round(dataOdesa.main.temp)}°C</label>
            </div>
    
    
    
    
    
    
    
    
    
    
    `







}


//PrintData()
