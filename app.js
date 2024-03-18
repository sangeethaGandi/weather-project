function updateTime() {
    let today = new Date();
    let dayOfWeek = today.getDay();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let todayDay = days[dayOfWeek];
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    let timeString = hours + ':' + minutes;
    document.getElementById("days").textContent = `${todayDay} ${timeString}`
}
updateTime()
setInterval(updateTime, 1000);

function weatherReport() {
    var city = document.getElementById("input-feild").value

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        console.log(jsonData);

document.getElementById("celsius").textContent=`${jsonData.currentConditions.temp}℃`
 document.getElementById ("location").textContent= `${jsonData.resolvedAddress}℃` 
 document.getElementById("one").textContent=`${jsonData.days[0].hours[0].temp}℃`
 document.getElementById("two").textContent=`${jsonData.days[0].hours[1].temp}℃`
 document.getElementById("three").textContent=`${jsonData.days[0].hours[2].temp}℃`
 document.getElementById("four").textContent=`${jsonData.days[0].hours[3].temp}℃`
 document.getElementById("five").textContent=`${jsonData.days[0].hours[4].temp}℃`
 document.getElementById("six").textContent=`${jsonData.days[0].hours[5].temp}℃`
 document.getElementById("seven").textContent=`${jsonData.days[0].hours[6].temp}℃`
 document.getElementById("eight").textContent=`${jsonData.days[0].hours[7].temp}℃`
 document.getElementById("nine").textContent=`${jsonData.days[0].hours[8].temp}℃`
 document.getElementById("ten").textContent=`${jsonData.days[0].hours[9].temp}℃`
 document.getElementById("eleven").textContent=`${jsonData.days[0].hours[10].temp}℃`
 document.getElementById("twelve").textContent=`${jsonData.days[0].hours[11].temp}℃`
 document.getElementById("thirteen").textContent=`${jsonData.days[0].hours[12].temp}℃`
 document.getElementById("fourteen").textContent=`${jsonData.days[0].hours[13].temp}℃`
 document.getElementById("fifteen").textContent=`${jsonData.days[0].hours[14].temp}℃`
 document.getElementById("sixteen").textContent=`${jsonData.days[0].hours[15].temp}℃`
 document.getElementById("seventeen").textContent=`${jsonData.days[0].hours[16].temp}℃`
 document.getElementById("eighteen").textContent=`${jsonData.days[0].hours[17].temp}℃`
 document.getElementById("nineteen").textContent=`${jsonData.days[0].hours[18].temp}℃`
 document.getElementById("twenty").textContent=`${jsonData.days[0].hours[19].temp}℃`
 document.getElementById("twentyone").textContent=`${jsonData.days[0].hours[20].temp}℃`
 document.getElementById("twentytwo").textContent=`${jsonData.days[0].hours[21].temp}℃`
 document.getElementById("twentythree").textContent=`${jsonData.days[0].hours[22].temp}℃`
 document.getElementById("twentyfour").textContent=`${jsonData.days[0].hours[23].temp}℃`
 document.getElementById("partly-cloudy").textContent = `${jsonData.days[0].conditions}`
 document.getElementById("perc").textContent =` Perc - ${jsonData.days[0].precip}%`


let imagesrc = ["https://i.ibb.co/PZQXH8V/27.png", "https://i.ibb.co/kBd2NTS/39.png", "https://i.ibb.co/rb4rrJL/26.png", "https://i.ibb.co/1nxNGHL/10.png", "https://i.ibb.co/Kzkk59k/15.png"]

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("firstimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("firstimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("firstimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("firstimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("firstimage").src=imagesrc[4]
   }
   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("secondimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("secondimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("secondimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("secondimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("secondimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("thirdimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("thirdimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("thirdimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("thirdimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("thirdimage").src=imagesrc[4]
   }


   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("fourthimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("fourthimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("fourthimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("fourthimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("fourthimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("fourthimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("fourthimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("fourthimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("fourthimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("fourthimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("fifthimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("fifthimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("fifthimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("fifthimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("fifthimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("sixthimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("sixthimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("sixthimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("sixthimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("sixthimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("seventhimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("seventhimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("seventhimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("seventhimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("seventhimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("eigthimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("eigthimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("eigthimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("eigthimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("eigthimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("ninethimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("ninethimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("ninethimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("ninethimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("ninethimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("tenthimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("tenthimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("tenthimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("tenthimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("tenthimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("eleventhimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("eleventhimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("eleventhimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("eleventhimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("eleventhimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("twelvethimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("twelvethimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("twelvethimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("twelvethimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("twelvethimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("thirteenimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("thirteenimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("thirteenimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("thirteenimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("thirteenimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("fourteenimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("fourteenimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("fourteenimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("fourteenimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("fourteenimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("fifteenimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("fifteenimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("fifteenimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("fifteenimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("fifteenimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("sixteenimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("sixteenimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("sixteenimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("sixteenimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("sixteenimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("seventeenimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("seventeenimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("seventeenimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("seventeenimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("seventeenimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("eightteenimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("eightteenimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("eightteenimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("eightteenimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("eightteenimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("nineteenimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("nineteenimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("nineteenimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("nineteenimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("nineteenimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("twentyimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("twentyimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("twentyimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("twentyimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("twentyimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("twentyoneimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("twentyoneimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("twentyoneimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("twentyoneimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("twentyoneimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("twentytwoimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("twentytwoimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("twentytwoimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("twentytwoimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("twentytwoimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("twentythreeimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("twentythreeimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("twentythreeimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("twentythreeimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("twentythreeimage").src=imagesrc[4]
   }

   if(jsonData.days[0].hours[0].icon === "partly cloudy"){
    document.getElementById("twentyfourimage").src=imagesrc[0]
   }else if(jsonData.days[0].hours[0].icon==="rain"){
    document.getElementById("twentyfourimage").src=imagesrc[1]
   }else if(jsonData.days[0].hours[0].icon==="clear-day"){
    document.getElementById("twentyfourimage").src=imagesrc[2]
   }else if(jsonData.days[0].hours[0].icon==="clear-night"){
    document.getElementById("twentyfourimage").src=imagesrc[3]
   }else if(jsonData.days[0].hours[0].icon==="partly-cloudy-night"){
    document.getElementById("twentyfourimage").src=imagesrc[4]
   }




})
}


