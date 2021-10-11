var job = ["Teacher","Designer","Journalist","Programmer"];
var city = ["Dallas","Houston", " Lubbock","McAllen"]; 
var spouse = ["Michelle","Valerie","Melissa", "Anne"];
var numKids = [3,0,5,1];

var xx = Math.floor(Math.random() * 4);



function fortune(job, city, spouse,numKids){
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}


fortune(job[xx], city[xx], spouse[xx],numKids[xx])
