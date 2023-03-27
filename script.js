// https://polisen.se/api/events?locationname=Stockholm

let cityField = document.getElementById('inputCity');
let selectedParameters = document.getElementById('selectedParameters');

let misshandelOption = document.getElementById('misshandelOption');
let rattfylleriOption = document.getElementById('rattfylleriOption');

let city = '';
let crimeEvent = '';

let api_URL = `https://polisen.se/api/events?type=${crimeEvent}&locationName=${city}`;


//search button stuff
let searchCrimes = document.getElementById('searchCrimes');

//card items
let valueID = document.getElementById('value1');
let valueDateTime = document.getElementById('value2');
let nameIncident = document.getElementById('value3');
let summary = document.getElementById('value4');
let polisURL = document.getElementById('value5');
let type = document.getElementById('value6');
let locationName = document.getElementById('value7');


window.onload = function() {
    fetchData();
  };

cityField.addEventListener('input', () => {
    if (cityField.value != '') {
        setVisibleParams();
    }
});
misshandelOption.addEventListener('click', () => {
    crimeEvent = 'Misshandel';
    setVisibleParams();
});
rattfylleriOption.addEventListener('click', () => {
    crimeEvent = 'Rattfylleri';
    setVisibleParams();
});

const setVisibleParams = () => {
    selectedParameters.value = `${cityField.value}, ${crimeEvent}`;
}
const fetchData = () => {
    fetch(`https://polisen.se/api/events?type=Misshandel&locationName=Stockholm`)
    .then((resp) => resp.json())
    .then((data) => {
        valueID.innerHTML = data[0].id;
        valueDateTime.innerHTML = data[0].datetime;
        nameIncident.innerHTML = data[0].name;
        summary.innerHTML = data[0].summary;
        // polisURL.innerHTML = data[0].url;
        type.innerHTML = data[0].type;
        locationName.innerHTML = data[0].location.name;
    });
}