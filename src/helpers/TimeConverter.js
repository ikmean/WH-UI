export function getDate(date) {
    const newDate = new Date(date)
    const year = new Date(newDate).getFullYear()
    const month = new Date(newDate).getMonth()
    const day = new Date(newDate).getDate()

  const monthName =   getMonthName(month)

    return `${monthName} ${day}, ${year}`

  }


  function getMonthName(monthNumber) {
    const date = new Date()
    date.setMonth(monthNumber - 1)

    return date.toLocaleString("en-US", { month: "long" })
  }