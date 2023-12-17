function calculateAverage() {
    var day1 = parseFloat(document.getElementById('day1').value);
    var day2 = parseFloat(document.getElementById('day2').value);
    var day3 = parseFloat(document.getElementById('day3').value);
    var day4 = parseFloat(document.getElementById('day4').value);
    var day5 = parseFloat(document.getElementById('day5').value);
    var day6 = parseFloat(document.getElementById('day6').value);
    var day7 = parseFloat(document.getElementById('day7').value);

    var average = (day1 + day2 + day3 + day4 + day5 + day6 + day7) / 7;

    document.getElementById('result').innerHTML = "Average Weight: " + average.toFixed(1);
}