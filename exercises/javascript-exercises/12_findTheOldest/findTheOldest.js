const findTheOldest = function(people) {
    let list = {}
    let oldestName = "";
    let oldestAge = 0;
    for (const p in people) {
        let tempAge = 0;
        if (!("yearOfDeath" in people[p])) tempAge = (new Date().getFullYear()) - people[p]["yearOfBirth"];
        else tempAge = people[p]["yearOfDeath"] - people[p]["yearOfBirth"];
        
        if (tempAge > oldestAge) {
            oldestName = people[p]["name"];
            oldestAge = tempAge;
        }
    }
    list["name"] =  oldestName;
    return list;
};

// Do not edit below this line
module.exports = findTheOldest;
