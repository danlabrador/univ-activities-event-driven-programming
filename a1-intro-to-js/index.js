/**
 * Returns the number of days in a month
 * @param {number} month - The month number (1-12)
 * @returns {number} - The number of days in the month
 */

const daysInAMonth = (month) => {
  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      return 31;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      return 30;
    case 2: // February
      return 28;
    default:
      return -1;
  }  
}

console.log(daysInAMonth(3)); // 28