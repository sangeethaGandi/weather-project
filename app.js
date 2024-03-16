function weatherReport(){
var city = document.getElementById("input-feild").value;


fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
.then((response) =>{
    return response.json()
}).then((jsonData) => {
    console.log(jsonData);
    document.getElementById("location").textContent=`${jsonData.resolvedAddress}`
    document.getElementById("one").textContent =`${jsonData.days[0].hours[0].temp}`
    document.getElementById("two").textContent=`${jsonData.days[0].hours[1].temp}`
    document.getElementById("three").textContent=`${jsonData.days[0].hours[2].temp}`
    document.getElementById("four").textContent=`${jsonData.days[0].hours[3].temp}`
    document.getElementById("five").textContent=`${jsonData.days[0].hours[4].temp}`
    document.getElementById("six").textContent=`${jsonData.days[0].hours[5].temp}`
    document.getElementById("seven").textContent=`${jsonData.days[0].hours[6].temp}`
    document.getElementById("eight").textContent=`${jsonData.days[0].hours[7].temp}`
    document.getElementById("nine").textContent=`${jsonData.days[0].hours[8].temp}`
    document.getElementById("ten").textContent=`${jsonData.days[0].hours[9].temp}`
    document.getElementById("eleven").textContent=`${jsonData.days[0].hours[10].temp}`
    document.getElementById("twelve").textContent=`${jsonData.days[0].hours[11].temp}`
    document.getElementById("thirteen").textContent=`${jsonData.days[0].hours[12].temp}`
    document.getElementById("fourteen").textContent=`${jsonData.days[0].hours[13].temp}`
    document.getElementById("fifteen").textContent=`${jsonData.days[0].hours[14].temp}`
    document.getElementById("sixteen").textContent=`${jsonData.days[0].hours[15].temp}`
    document.getElementById("seventeen").textContent=`${jsonData.days[0].hours[16].temp}`
    document.getElementById("eightteen").textContent=`${jsonData.days[0].hours[17].temp}`
    document.getElementById("ninteen").textContent=`${jsonData.days[0].hours[18].temp}`
    document.getElementById("twenty").textContent=`${jsonData.days[0].hours[19].temp}`
    document.getElementById("twentyone").textContent=`${jsonData.days[0].hours[20].temp}`
    document.getElementById("twentytwo").textContent=`${jsonData.days[0].hours[21].temp}`
    document.getElementById("twentythree").textContent=`${jsonData.days[0].hours[22].temp}`
    document.getElementById("twentyfour").textContent=`${jsonData.days[0].hours[23].temp}`
  
    




})
}


