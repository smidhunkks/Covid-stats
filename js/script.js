var x=document.getElementById("bdy").addEventListener("load",apfh());
/*var x=document.getElementById("butn").addEventListener("click",apfh());*/
function apfh(){
    var y=document.getElementById("res");
    console.log("success");
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
    <img src="images/confirmed.png" class="cnfrm">`;
    console.log(data);
    y.innerHTML=output;
})

.catch(err => {
	console.log(err);
});
}