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