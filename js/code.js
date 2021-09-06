let month = new Date().getMonth().toString(),
  thisMonth = document.getElementById("thisMonth"),
  nextMonth = document.getElementById("nextMonth"),
  thirdMonth = document.getElementById("thirdMonth");

switch (month) {
  case "0":
    {
      thisMonth.textContent = "January: limited";
      nextMonth.textContent = "February: Availale";
      thirdMonth.textContent = "March:  Available";
    }
    break;
  case "1":
    {
      thisMonth.textContent = "February: limited";
      nextMonth.textContent = "March: Available";
      thirdMonth.textContent = "April:  Available";
    }

    break;
  case "2":
    {
      thisMonth.textContent = "March: limited";
      nextMonth.textContent = "April: Available";
      thirdMonth.textContent = "May:  Available";
    }
    break;
  case "3":
    {
      thisMonth.textContent = "April: limited";
      nextMonth.textContent = "May: Available";
      thirdMonth.textContent = "June: Available";
    }
    break;
  case "4":
    {
      thisMonth.textContent = "May: limited";
      nextMonth.textContent = "June: Available";
      thirdMonth.textContent = "July: Available";
    }
    break;

  case "5":
    {
      thisMonth.textContent = "June: limited";
      nextMonth.textContent = "July: Available";
      thirdMonth.textContent = "August: Available";
    }

    break;
  case " 6":
    {
      thisMonth.textContent = "July: limited";
      nextMonth.textContent = "August: Available";
      thirdMonth.textContent = "September: Available";
    }
    break;
  case "7":
    {
      thisMonth.textContent = "August: limited";
      nextMonth.textContent = "September: Available";
      thirdMonth.textContent = "October: Available";
    }

    break;
  case "8":
    {
      thisMonth.textContent = "November: limited";
      nextMonth.textContent = "December: Available";
      thirdMonth.textContent = "January: Available";
    }
    break;
  case "11":
    {
      thisMonth.textContent = "December: limited";
      nextMonth.textContent = "January: Available";
      thirdMonth.textContent = "February: Available";
    }
    break;
}
