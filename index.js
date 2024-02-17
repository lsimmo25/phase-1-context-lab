/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 const createTimeInEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    });
    return this
};

const createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    });
    return this
};

function hoursWorkedOnDate(dateStamp) {
    const date = dateStamp.substring(0, 10);
    let timeInEvent = this.timeInEvents.find(event => event.date === date);
    let timeOutEvent = this.timeOutEvents.find(event => event.date === date);

    let timeInHours = parseInt(timeInEvent.hour);
    let timeOutHours = parseInt(timeOutEvent.hour);

    const hoursWorked = (timeOutHours - timeInHours) / 100;

    return hoursWorked;
}

function wagesEarnedOnDate(dateStamp) {
    const payOwned = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
    return payOwned
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(array) {
    return array.reduce((totalPayRoll, array) => {
        return totalPayRoll + allWagesFor.call(array)
    }, 0)
}

class EmployeeRecord {
    constructor(firstName, familyName, title, payPerHour, timeInEvents = [], timeOutEvents = []) {
        this.firstName = firstName;
        this.familyName = familyName;
        this.title = title;
        this.payPerHour = payPerHour;
        this.timeInEvents = timeInEvents;
        this.timeOutEvents = timeOutEvents;
    }
}

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return new EmployeeRecord(
      firstName,
      familyName,
      title,
      payPerHour,
      [],
      []
    );
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
};

