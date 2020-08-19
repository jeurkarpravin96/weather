function weather(){
    let textinput=document.querySelector('#textinput').value;
    document.querySelector('#cityname').innerHTML=textinput.toUpperCase();
    let input=textinput.toLowerCase();
    ajax(input);
    
}

let ajax=(inputvalue)=>{
      let ciytname=inputvalue;
      let xhr=new XMLHttpRequest();
      let url="https://api.openweathermap.org/data/2.5/weather?appid=681b1d1c51fad0909fad9ecfc6fb9e7e&units=metric&q="+ ciytname;
      xhr.open("GET",url);
      xhr.onload=()=>{
          let refjson=xhr.responseText;
          let json=JSON.parse(refjson);
          domooperation(json);
      };
      xhr.send();
};

let domooperation=(jsontext)=>{
    let jsonvalue=jsontext;
    console.log(jsonvalue);
    let temp=jsonvalue.main.temp_max;
    let weather=jsonvalue.weather[0].description;
    let speed=jsonvalue.wind.speed;
    let country=jsonvalue.sys.country;
    document.querySelector('#temp').children[0].innerHTML=temp;
    document.querySelector('#humidity').innerHTML=weather;
    document.querySelector('#wind').children[0].innerHTML=speed;
    document.querySelector('#country').innerHTML=country;
    console.log(temp)
};