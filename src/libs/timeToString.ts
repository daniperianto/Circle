export function timeToString(time: Date): string {
    const minutes = time.getMinutes()
    const hour24 = time.getHours()
    const day = time.getDate()
    const m = time.getMonth()
    let month = "Unidecember"
    const year = time.getFullYear()

    switch(m) {
        case 0 : month = "January"; break;
        case 1 : month = "February"; break;
        case 2 : month = "March"; break;
        case 3 : month = "April"; break;
        case 4 : month = "May"; break;
        case 5 : month = "June"; break;
        case 6 : month = "July"; break;
        case 7 : month = "August"; break;
        case 8 : month = "September"; break;
        case 9 : month = "October"; break;
        case 10: month = "November"; break;
        case 11: month = "December"; break;
    }

    return `${hour24}:${minutes} · ${day} ${month} ${year}`
}

export function monthYearToString(time: Date) {
    const m = time.getMonth()
    let month = "Unidecember"
    const year = time.getFullYear()

    switch(m) {
        case 0 : month = "January"; break;
        case 1 : month = "February"; break;
        case 2 : month = "March"; break;
        case 3 : month = "April"; break;
        case 4 : month = "May"; break;
        case 5 : month = "June"; break;
        case 6 : month = "July"; break;
        case 7 : month = "August"; break;
        case 8 : month = "September"; break;
        case 9 : month = "October"; break;
        case 10: month = "November"; break;
        case 11: month = "December"; break;
    }

    return `${month} ${year}`
}

export function TimeInterval(time: Date): string {
    const timeMs = time.getTime()
    const nowMS = Date.now()
    const interval = nowMS - timeMs
    const second = 1000
    const minutes = 60 * second
    const hour = 60 * minutes
    const day = 24 * hour
    const week = 7 * day
    const month = 20 * day

    if(interval < minutes) {
        return "just now"
    } else if(interval < 5 * minutes) {
        return "1m"
    } else if(interval < 10 * minutes) {
        return "5m"
    } else if(interval < 15 * minutes) {
        return "10m"
    } else if(interval < 30 * minutes) {
        return "15m"
    } else if(interval < hour) {
        return "30m"
    } else if(interval < 2 * hour) {
        return "1h"
    } else if(interval < 3 * hour) {
        return "2h"
    } else if(interval < 5 * hour) {
        return "3h"
    } else if(interval < 10 * hour) {
        return "5h"
    } else if(interval < 15 * hour) {
        return "10h"
    } else if(interval < day) {
        return "15h"
    } else if(interval < 2 * day) {
        return "1d"
    } else if(interval < 3 * day) {
        return "2d"
    } else if(interval < 5 * day) {
        return "3d"
    } else if(interval < week) {
        return "5d"
    } else if(interval < 2 * week) {
        return "1w"
    } else if(interval < 3 * week) {
        return "2w"
    } else if(interval < month) {
        return "3w"
    } else return monthYearToString(time)
}

