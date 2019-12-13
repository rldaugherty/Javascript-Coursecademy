/* Define sleep hours */
/* define Weekday list */
let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getSleepHours = day => {
  switch (day.toLowerCase()) {
    case "sunday":
      return 8;
      break;
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 8;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    default:
      return 'Error!';
      break;
  }
};

/* Track actual sleep hours */
const getActualSleepHours = () => {
    let totalHours = 0;
    for (day in weekDays) {
        totalHours = totalHours+getSleepHours(weekDays[day]);
    };
    return totalHours;
};

const getIdealSleepHours = idealHours  => {
  // let idealHours = 8;
  totalIdealHours = idealHours * 7;
  return totalIdealHours;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(5);

  switch (true) {
    case actualSleepHours === idealSleepHours:
      message = "You've slept the right amount.";
      return message;
      break;
    case actualSleepHours < idealSleepHours:
      let underSlept = idealSleepHours - actualSleepHours;
      message = "You need more sleep. You should have slept " + underSlept + " hours more.";
      return message;
      break;
    case actualSleepHours > idealSleepHours:
      let overSlept = actualSleepHours - idealSleepHours;
      message = "You've overslept. You should sleep " + overSlept + " hours less.";
      return message;
      break;
    default:
      console.log("Somethings amiss.");
      break;
  }
};
console.log(calculateSleepDebt());
