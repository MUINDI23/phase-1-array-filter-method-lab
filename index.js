// Code your solution here
const driversObject = ["Bobby","Sammy","Sally","Annette","Sarah","Bobby"];
function findMatching(drivers, name) {
    return drivers.filter(driver => 
        typeof driver === "string" && driver.toLowerCase() === name.toLowerCase()
    );
}

    console.log( findMatching(drivers,"Sammy"));
    console.log( findMatching(drivers,"Bobby"));

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}
console.log(fuzzyMatch(["Sammy", "Sarah", "Sally", "Bobby"], "Sa")); 

function matchName( drivers,name){
    return drivers.filter( drivers=>drivers.name===name);

}
console.log(matchName ,Bobby);
