const calenderText = document.querySelectorAll(".calender-text");
const calenderInput = document.querySelectorAll(".calender-input");


const errorDisplay = document.getElementById("error");
const calculateBtn = document.querySelector("#calculate-btn");


const hyphenYear = document.querySelector("#hyphen-year");
const hyphenMonth = document.querySelector("#hyphen-month");
const hyphenDay = document.querySelector("#hyphen-day");

const placeholderText = [ "DD", "MM", "YYYY" ];



calculateBtn.addEventListener('click', function(){
    let day = calenderInput[0].value.trim();
    let month = calenderInput[1].value.trim();
    let year = calenderInput[2].value.trim();
    // console.log(day , month , year)
    if(isValidDayMonthYear(day,month,year)) {
        errorDisplay.style.display = 'none';
        calenderInput.forEach(e => {
            e.style.borderColor = 'hsl(0, 0%, 86%)';
        })
        calenderText.forEach(e => {
            e.style.color = 'hsl(0, 1%, 44%)';
        })
        // console.log("HI")

        let ageYear = Math.abs(2023-year);
        let ageMonth = Math.abs(10-month);
        let ageDay = Math.abs(22-day);

        hyphenYear.textContent = ageYear;
        hyphenMonth.textContent = ageMonth;
        hyphenDay.textContent = ageDay;
    } else{
        errorDisplay.style.display = 'flex';
        calenderInput.forEach(e => {
            e.style.borderColor = 'red';
        })

        calenderText.forEach(e => {
            e.style.color = 'red';
        })

        hyphenYear.textContent = "--";
        hyphenMonth.textContent = "--";
        hyphenDay.textContent = "--";
        // console.log("I")
    }
});


function isValidDayMonthYear(day,month,year){
    const numericDay = parseInt(day, 10);
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);

    if(isNaN(day) || isNaN(month) || isNaN(year)){
        return false;
    }
    if(year < 1 || year > 2023) {
        return false;
    }

    if(month < 1 || month > 12){
        return false;
    }

    const daysInMonth = [
        31,28,31,30,31,30,31,31,30,31,30,31
    ];

    if(day < 1 || day > daysInMonth[month-1]){
        return false;
    }

    return true;

    
    
}


function isLeapYear(year){
    if((year%4 === 0 && year%100 !== 0) && year%400===0){
        return true;
    }

    return false;
}
