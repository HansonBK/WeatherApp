   
   
   
    const apiKey = "4263a2ce70fbb1ee2ac565903e9d9d5a";
    const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox= document.querySelector(".search input");
    const searchBtn= document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");

    async function checkWeather(city)
    {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 

        if(response.status == 404)
        {
            document.querySelector('.error').style.display = "block";
            document.querySelector('.weather').style.display = "none";
        }
        else
        {
            var data = await response.json();
     
    

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
            document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
            document.querySelector(".wind").innerHTML = data.wind.speed +" Km/h";

            if(data.weather[0].main == "Clouds")
            {
                weatherIcon.src = "Assets/img/Clouds.png"
            }
            else if (data.weather[0].main == "Clear")
            {
                weatherIcon.src = "Assets/img/Clear.png"
            }
            else if (data.weather[0].main == "Rain")
            {
                weatherIcon.src = "Assets/img/Rain.png"
            }
            else if (data.weather[0].main == "Drizzle")
            {
                weatherIcon.src = "Assets/img/Drizzle.png"
            }
            else if (data.weather[0].main == "Mist")
            {
                weatherIcon.src = "Assets/img/Mist.png"
            }
            else if (data.weather[0].main == "Snow")
            {
                weatherIcon.src = "Assets/img/Snow.png"
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector('.error').style.display = "none";


        }

    }
 

    searchBtn.addEventListener('click', ()=>
    {
        checkWeather(searchBox.value);
    })