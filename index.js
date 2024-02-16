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
};

const createTimeOutEvent = function(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    });
};

class EmployeeRecord {
    constructor(firstName, familyName, title, payPerHour, timeInEvents = [], timeOutEvents = []) {
        this.firstName = firstName;
        this.familyName = familyName;
        this.title = title;
        this.payPerHour = payPerHour;
        this.timeInEvents = timeInEvents;
        this.timeOutEvents = timeOutEvents;
        this.createTimeInEvent = createTimeInEvent.bind(this);
        this.createTimeOutEvent = createTimeOutEvent.bind(this);
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
