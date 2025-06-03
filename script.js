function getDayOfYear(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = date.getTime() - start.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}
function isLeapYear(date) {
    var year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
function whoIsOnDuty(date) {
    var dayOfYear = getDayOfYear(date);
    var leap = isLeapYear(date);
    var nonLeapYearPattern = ["Daren", "Danika", "Jaden", "Daren", "Danika", "Jaden"];
    var leapYearPattern = ["Daren", "Danika", "Jaden", "Daren", "Danika", "Jaden", "Daren"];
    var pattern = leap ? leapYearPattern : nonLeapYearPattern;
    var index = (dayOfYear - 1) % pattern.length;
    return pattern[index];
}
function printDuties(date) {
    var who = whoIsOnDuty(date);
    var result = "";
    if (who === "Daren") {
        result += "\n\n🟢 For doing the dishes, It's Daren's Turn<br>";
        result += "⚪ For feeding the dog, It's Danika's Turn<br>";
        result += "⚪ For undoing the dishes, It's Jaden's Turn<br>";
    
    }
    else if (who === "Danika") {
        result += "\n\n⚪ For undoing the dishes, It's Daren's Turn<br>";
        result += "🟢 For doing the dishes, It's Danika's Turn<br>";
        result += "⚪ For feeding the dog, It's Jaden's Turn<br>";
    }
    else if (who === "Jaden") {
        result += "\n\n⚪ For feeding the dog, It's Daren's Turn<br>";
        result += "⚪ For undoing the dishes, It's Danika's Turn<br>";
        result += "🟢 For doing the dishes, It's Jaden's Turn<br>";
    }
    document.getElementById("result").innerHTML = result;
}