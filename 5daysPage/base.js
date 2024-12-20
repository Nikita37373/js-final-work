
async function printTopDiv()
{
  const city = localStorage.getItem("city");
  console.log(city);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11c7611437bad5ad92ee447c722dfefc&units=metric`
  const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=11c7611437bad5ad92ee447c722dfefc&units=metric`

    const response = await fetch(url);
    const data = await response.json();

    const response2 = await fetch(url5days);
    const data2 = await response2.json();

   

    const date = new Date();
    const day = date.getDate();
    let days = [
        
        day2 = date.getDay()+1,
        day3 = date.getDay()+2,
        day4 = date.getDay()-4,
        day5 = date.getDay()-3  
    ]
    let days2 = [
     
        day2 = "",
        day3 = "",
        day4 = "",
        day5 = ""  
    ]
    for (let i = 0; i < days.length; i++) {
        days2[i]  = days[i] == 1 ? "MON" :
        days2[i]  = days[i] == 2 ? "TUE" :
        days2[i]  = days[i] == 3 ? "WED" :
        days2[i]  = days[i] == 4 ? "THU" : 
        days2[i]  = days[i] == 5 ? "FRI" : 
        days2[i]  = days[i] == 6 ? "SUT" : "SUN"
        
    }
     //console.log(days2)
    
    
    


    
    

    const headdiv = document.getElementById("headdiv");

    headdiv.innerHTML+=
     `
        <div onclick="ChangeTheme(event)" id="day1" class="daydiv">
            <label style="font-weight: bold; color:rgb(0, 202, 202);   " >TONIGHT</label>
            <label for="">DEC ${day }</label>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
            <label style="font-size:30px;">${Math.round(data.main.temp)}°C</label>
            <label for="">${data.weather[0].main}, Cold</label>
        </div>
        <div onclick="ChangeTheme(event)" id="day2" class="daydiv">
            <label style="font-weight: bold; color:rgb(0, 202, 202);   " >${days2[0]}</label>
            <label for="">DEC ${day +1}</label>
            <img src="https://openweathermap.org/img/wn/${data2.list[9].weather[0].icon}.png">
            <label style="font-size:30px;">${Math.round(data2.list[9].main.temp)}°C</label>
            <label for="">${data2.list[9].weather[0].main}, Cold</label>
        </div>
        <div onclick="ChangeTheme(event)" id="day3" class="daydiv">
            <label style="font-weight: bold; color:rgb(0, 202, 202);   " >${days2[ 1 ]}</label>
            <label for="">DEC ${day+2}</label>
            <img src="https://openweathermap.org/img/wn/${data2.list[17].weather[0].icon}.png">                  
            <label style="font-size:30px;">${Math.round(data2.list[17].main.temp)}°C</label>
            <label for="">${data2.list[17].weather[0].main}, Cold</label>
        </div>
        <div onclick="ChangeTheme(event)" id="day4" class="daydiv">
            <label style="font-weight: bold; color:rgb(0, 202, 202);   " >${days2[2]}</label>
            <label for="">DEC ${day+3}</label>
            <img src="https://openweathermap.org/img/wn/${data2.list[25].weather[0].icon}.png">                  
            <label style="font-size:30px;">${Math.round(data2.list[25].main.temp)}°C</label>
            <label for="">${data2.list[25].weather[0].main}, Cold</label>
        </div>
        <div onclick="ChangeTheme(event)" id="day5" class="daydiv">
            <label style="font-weight: bold; color:rgb(0, 202, 202);   ">${days2[3]}</label>
            <label for="">DEC ${day+4}</label>
            <img src="https://openweathermap.org/img/wn/${data2.list[33].weather[0].icon}.png">                       
            <label style="font-size:30px;">${Math.round(data2.list[33].main.temp)}°C</label>
            <label for="">${data2.list[33].weather[0].main}, Cold</label>
        </div>
    `
}

async function PrintData(dayId)
{


    const city = localStorage.getItem("city");
    console.log(city);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11c7611437bad5ad92ee447c722dfefc&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=11c7611437bad5ad92ee447c722dfefc&units=metric`

    const response2 = await fetch(url5days);
    const data2 = await response2.json();

    

    tbody.innerHTML=""

    tbody.innerHTML += `
                
                <tr>
                    <td>Forecast</td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                        <img src="https://openweathermap.org/img/wn/${data2.list[1 * dayId ].weather[0].icon}.png">
                        <label>${data2.list[1 * dayId ].weather[0].main}</label>
                      </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[2 * dayId ].weather[0].icon}.png">
                      <label>${data2.list[2 * dayId].weather[0].main}</label>
                      </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[3 * dayId ].weather[0].icon}.png">
                      <label>${data2.list[3 * dayId].weather[0].main}</label>
                      </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[4 * dayId ].weather[0].icon}.png">
                      <label>${data2.list[4 * dayId].weather[0].main}</label>
                       </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[5 * dayId ].weather[0].icon}.png">
                      <label>${data2.list[5 * dayId].weather[0].main}</label>
                       </div>
                    </td>
                    <td>
                      <div style="display: flex; flex-direction: column; width: 50px;">
                      <img src="https://openweathermap.org/img/wn/${data2.list[6 * dayId ].weather[0].icon}.png">
                      <label>${data2.list[6 * dayId].weather[0].main}</label>  
                      </div>
                   </td>
                  <td>
                    <div style="display: flex; flex-direction: column; width: 50px;">
                    <img src="https://openweathermap.org/img/wn/${data2.list[7 * dayId].weather[0].icon}.png">
                    <label>${data2.list[7 * dayId].weather[0].main}</label>  
                    </div>
                  </td>
                  <td>
                    <div style="display: flex; flex-direction: column; width: 50px;">
                    <img src="https://openweathermap.org/img/wn/${data2.list[8 * dayId -1].weather[0].icon}.png">
                    <label>${data2.list[8 * dayId -1].weather[0].main}</label>  
                    </div>
                  </td>
                   
                </tr>
                               
                <tr>
                    <td>Temp</td>
                    <td>${Math.round(data2.list[1 * dayId ].main.temp)}°</td>
                    <td>${Math.round(data2.list[2 * dayId].main.temp)}°</td>
                    <td>${Math.round(data2.list[3 * dayId].main.temp)}°</td>
                    <td>${Math.round(data2.list[4 * dayId].main.temp)}°</td>
                    <td>${Math.round(data2.list[5 * dayId].main.temp)}°</td>
                    <td>${Math.round(data2.list[6 * dayId].main.temp)}°</td>
                    <td>${Math.round(data2.list[7 * dayId].main.temp)}°</td>
                    <td>${Math.round(data2.list[8 * dayId -1].main.temp)}°</td>
                    
                </tr>
                
                <tr>
                    <td>RealFeel</td>
                    
                    <td>${Math.round(data2.list[1 * dayId ].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[2 * dayId].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[3 * dayId].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[4 * dayId].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[5 * dayId].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[6 * dayId].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[7 * dayId].main.feels_like)}°</td>
                    <td>${Math.round(data2.list[8 * dayId -1].main.feels_like)}°</td>
                </tr>
                
                <tr>
                    <td>Wind(km/h)</td>
                    <td>${data2.list[1 * dayId ].wind.speed} ESE</td>
                    <td>${data2.list[2 * dayId].wind.speed} ESE</td>
                    <td>${data2.list[3 * dayId].wind.speed} ESE</td>
                    <td>${data2.list[4 * dayId].wind.speed} ESE</td>
                    <td>${data2.list[5 * dayId].wind.speed} ESE</td>
                    <td>${data2.list[6 * dayId].wind.speed} ESE</td>
                    <td>${data2.list[7 * dayId].wind.speed} ESE</td>
                    <td>${data2.list[8 * dayId -1].wind.speed} ESE</td>
                    
                </tr>
            `;

}
function ChangeTheme(event)
{
  let target = event.target;
  if (target.nodeName != "DIV") 
  {
    target = target.parentNode;
  }
  console.log(target.id)

  
  for (let index = 1; index < 6; index++) {
    const currentId = `day${index}`;
    const div = document.getElementById(`day${index}`);
    if (target.id === currentId) 
    {
      div.classList.remove("daydiv")
      div.classList.add("specdiv")
      PrintData(index);
      
    }else{
      div.classList.remove("specdiv")
      div.classList.add("daydiv")
    }
    
  }


  
}
printTopDiv();
PrintData(1);

