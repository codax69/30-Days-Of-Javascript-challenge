// Activity 1:
//Task 1
let num = 40;
if (num < 0) {
  console.log(num, "Number is Negative");
} else if (num > 0) {
  console.log(num, "Number Is Positive");
} else {
  console.log("Number is Zero");
}

// Task 2
let age = 8;
if (age >= 18) {
  console.log("You are eligible to vote ");
} else {
  console.log("Your Age less then 18 You can't vote");
}

//Task 3

const largestNum = (a, b, c) => {
  let largestNumber;
  if (a >= b) {
    if (a >= c) {
      largestNumber = a;
    } else {
      largestNumber = c;
    }
  } else {
    if (b >= c) {
      largestNumber = b;
    } else {
      largestNumber = c;
    }
  }
  return largestNumber;
};
console.log(largestNum(10, 45, 76));

//Task 4

const getDayNumber = (day) => {
  let dayName;
  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "tuesday";
      break;
    case 3:
      dayName = "wednesday";
      break;
    case 4:
      dayName = "thursday";
      break;
    case 5:
      dayName = "friday";
      break;
    case 6:
      dayName = "saturday";
      break;
    case 7:
      dayName = "sunday";
      break;

    default:
      "Invalid Number for Day";
  }
  return dayName;
};

console.log(getDayNumber(1));

// Task 5

const getGrade = (marks) => {
  let grade;
  switch (true) {
    case marks >= 90:
      grade = "A";
      break;
    case marks >= 75:
      grade = "B";
      break;
    case marks >= 50:
      grade = "C";
      break;
    case marks >= 33:
      grade = "D";
      break;
    default:
      grade = "F";
      break;
  }

  return grade;
};
console.log(getGrade(80));

// Task 6
let newNumber = 45;
console.log(newNumber / 2 === 0 ? "even" : "odd");

//Task 7
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};


const year = 2026;
if (isLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
