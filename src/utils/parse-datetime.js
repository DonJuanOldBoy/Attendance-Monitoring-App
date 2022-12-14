const parseServerDate = (dateAndTime) => {
    const dateTime = new Date(dateAndTime);

    let timeString = dateTime.toLocaleTimeString().slice(0, 5);

    let dateString = dateTime.toLocaleDateString();
    dateString =
        dateString.slice(0, dateString.length - 4) +
        (dateTime.getFullYear() - 2000);

    return {
        timeString,
        dateString,
    };
};

export default parseServerDate;
