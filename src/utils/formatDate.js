const formatDate = (date) => {
    const day = formatNumber(date.getDate());
    const month = formatNumber(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${day}.${month}.${year}`
}

const formatNumber = (number) => {
    return number > 9 ? `${number}` : `0${number}` 
}

export { formatDate };