function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_WORKING_DAYS = 20;

// Function to get work hours based on employee type
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0; // Employee is absent
    }
}


let empDailyWageArr=new Array();
let totalEmpHrs = 0;
let totalWorkingDays = 0;

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs=getWorkingHours(empCheck);
    // Ensure total hours do not exceed MAX_HRS_IN_MONTH
    if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) {
        empHrs = MAX_HRS_IN_MONTH - totalEmpHrs;
    }
    
    totalEmpHrs +=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage =calcDailyWage(totalEmpHrs);
console.log("UC5 - Total Days: " + totalWorkingDays + " | Total Hours: " + totalEmpHrs + " | Employee Wage: " + empWage);
