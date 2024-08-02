
const displayResult = document.querySelector('#result');
const submitBtn = document.querySelector('#submitButton');

submitBtn.addEventListener('click', () => {
    const inputHours = parseFloat(document.querySelector('#hours').value);
    const inputMinutes = parseFloat(document.querySelector('#minutes').value);
    const inputSeconds = parseFloat(document.querySelector('#seconds').value);
    const inputDistance = parseFloat(document.querySelector('#distance').value);

    if (isNaN(inputHours) || isNaN(inputMinutes) || isNaN(inputSeconds) || isNaN(inputDistance)) {
        displayResult.innerText = `Error - input missing`;
        return;
    };

    const convertHoursToSeconds = (inputHours * 60) * 60;
    const convertMinutesToSeconds = (inputMinutes * 60);
    const totalTimeSeconds = convertHoursToSeconds + convertMinutesToSeconds + inputSeconds;

    const averageTimePerMile = (totalTimeSeconds*inputDistance)/60;

    const result = averageTimePerMile;
    displayResult.innerText = `Result: ${result} minute per mile`;
});

