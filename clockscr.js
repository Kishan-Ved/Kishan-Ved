var date;
var time;
var date;
const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"}

setInterval(() => {
    a = new Date();
    h = a.getHours();
    s = a.getSeconds();
    m = a.getMinutes();
    if(h<10){
        h = '0'+h;
    }
    if(s<10){
        s = '0'+s;
    }

    if(m<10){
        m = '0'+m;
    }
    time = h +':'+m+':'+s;
    date = a.toLocaleDateString(undefined,options);
    document.getElementById("time").innerHTML = time +"<br>On "+date;
}, 1000);

    