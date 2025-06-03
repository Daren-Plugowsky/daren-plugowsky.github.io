function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days;
}

function isLeapYear(date: Date): boolean {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function whoIsOnDuty(date: Date): "Daren" | "Danika" | "Jaden" {
  const dayOfYear = getDayOfYear(date);
  const leap = isLeapYear(date);

  const nonLeapYearPattern = ["Daren", "Danika", "Jaden", "Daren", "Danika", "Jaden"];
  const leapYearPattern = ["Daren", "Danika", "Jaden", "Daren", "Danika", "Jaden", "Daren"];
  const pattern = leap ? leapYearPattern : nonLeapYearPattern;

  const index = (dayOfYear - 1) % pattern.length;
  return pattern[index] as "Daren" | "Danika" | "Jaden";
}

function printDuties(date: Date) {
  const who = whoIsOnDuty(date);
  let result = "";

  if (who === "Daren") {
    result += `For undoing the dishes, It's Jaden's Turn<br>`;
    result += `For doing the dishes, It's Daren's Turn<br>`;
    result += `For feeding the dog, It's Danika's Turn<br>`;
  } else if (who === "Danika") {
    result += `For undoing the dishes, It's Daren's Turn<br>`;
    result += `For doing the dishes, It's Danika's Turn<br>`;
    result += `For feeding the dog, It's Jaden's Turn<br>`;
  } else if (who === "Jaden") {
    result += `For undoing the dishes, It's Danika's Turn<br>`;
    result += `For doing the dishes, It's Jaden's Turn<br>`;
    result += `For feeding the dog, It's Daren's Turn<br>`;
  }
  (document.getElementById("result") as HTMLElement).innerHTML = result;
}