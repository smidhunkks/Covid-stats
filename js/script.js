
var x=document.getElementById("bdy").addEventListener("load",apfh());
/*var z=document.getElementById("srbtn").addEventListener("click",cntryfetch());*/
function apfh(){
    var y=document.getElementById("res");
   /* console.log("success");*/
    fetch("https://covid-19-data.p.rapidapi.com/totals?format=undefined", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "7817005512msh32521a41050f8b3p1ba7bcjsn466b7a5211dd"
	}
})
.then(response =>response.json())
.then(data=>{
    let output=`<h1 class="reshead">World Wide Stats</h1>
    <div class="rsdiv">
            <img src="images/confirmed.png" class="cnfrm">
            <div class="innerdiv">
                <h3 class="fntclr">Confirmed</h3>
                <h4 class="fntclr">${data[0].confirmed}</h4>
            </div>
        
        
            <img src="images/recovered.png" class="rcvr">
            <div class="innerdiv">
                <h3 class="fntclr">Recovered</h3>
                <h4 class="fntclr">${data[0].recovered}</h4>
            </div>
        
        
            <img src="images/death.png" class="dth">
            <div class="innerdiv">
                <h3 class="fntclr">Death</h3>
                <h4 class="fntclr">${data[0].deaths}</h4>
            </div>
        
    </div>`;
    /*console.log(data);*/
    y.innerHTML=output;
})

.catch(err => {
	console.log(err);
});
}


function cntryfetch(){
    var y=document.getElementById("res");
   /* console.log("cntryfetch");*/
    var a="https://covid-19-data.p.rapidapi.com/country?format=undefined&name=";
    var b=document.getElementById("srbr").value;
    a+=b;
    /*console.log(a);*/
fetch(a, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "7817005512msh32521a41050f8b3p1ba7bcjsn466b7a5211dd"
	}
})
.then(response =>response.json())
.then(data=>{
   /* console.log(data);*/
    let output=`<h1 class="reshead">${data[0].country}'s Stats</h1>
    <div class="rsdiv">
            <img src="images/confirmed.png" class="cnfrm">
            <div class="innerdiv">
                <h3 class="fntclr">Confirmed</h3>
                <h4 class="fntclr">${data[0].confirmed}</h4>
            </div>
        
        
            <img src="images/recovered.png" class="rcvr">
            <div class="innerdiv">
                <h3 class="fntclr">Recovered</h3>
                <h4 class="fntclr">${data[0].recovered}</h4>
            </div>
        
        
            <img src="images/death.png" class="dth">
            <div class="innerdiv">
                <h3 class="fntclr">Death</h3>
                <h4 class="fntclr">${data[0].deaths}</h4>
            </div>
        
    </div>`;
    y.innerHTML=output;
})
.catch(err => {
	console.log(err);
});
}

/*------------------------------------graph function------------------------*/
function historyfh(){

var b=document.getElementById("srbr").value;
console.log(b);
var y=document.getElementById("res");
var op;
var Label=new Array();
var active=new Array();
var recover=new Array();
var death=new Array();
var a="https://covid-193.p.rapidapi.com/history?country=";
a+=b;
console.log(a);
var i=0;
    fetch(a, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "7817005512msh32521a41050f8b3p1ba7bcjsn466b7a5211dd"
        }
    })
    .then(response =>response.json())
    .then(data=>{
        var l=data.response.length;
        l=l-1;
        for(i=l;i>=l-30;i--)
        {
            Label[l-i]=data.response[i].day;
            active[l-i]=data.response[i].cases.active;
            recover[l-i]=data.response[i].cases.recovered;
            death[l-i]=data.response[i].deaths.total;
        }
        /*---------------------graph script----------------------------*/
        var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: Label,
        datasets: [{
            label: 'Active cases',
            backgroundColor:'rgb(255, 102, 102,.6)',
            borderColor: 'red',
            data: active
        },
        {
            label: 'Recovered',
           backgroundColor: 'rgb(51, 204, 51,.6)',
            borderColor: 'green',
            data: recover
        },
        {
            label: 'Death',
            backgroundColor: 'rgb(179, 179, 179,.6)',
            borderColor: 'grey',
            data: death
        }
    
    ]
    },

    // Configuration options go here
    options: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'rgb(255, 255, 255)',
                FontFamily:'Monospace'
            }
        }
    }
});
/*---------------------graph script end----------------------------*/
window.scrollBy(0, 150);









        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
    
    return 1;
}

