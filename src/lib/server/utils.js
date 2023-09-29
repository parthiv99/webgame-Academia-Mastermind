// Date-time format
export const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',
    hour12: true
})

// Get sum of elements of array of numbers
export const getSumOfNumberArray = (numberArray) => {
    let sum = 0;
    numberArray.forEach(number => {
        sum += number
    });
    return sum
}

// Validate input
export const validateInput = (input, pattern) => {
    return input.match(pattern)
}
