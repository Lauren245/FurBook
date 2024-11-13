/*This file will handle reading and writing to local storage.*/
//Create variables to accept the userInputs from the html forum
const ownerNameInput = document.querySelector('#ownerName');
const phoneNumberInput = document.querySelector('#phoneNumber');
const petNameInput = document.querySelector('#petName');
const petBreedInput = document.querySelector('#breed');
const petAgeInput = document.querySelector('#age');
const dateTimeInput = document.querySelector('#dateTime');
const serviceNameInput = document.querySelector('#serviceName');
const serviceTypeInput = document.querySelector('#serviceType');
const submitButton = document.querySelector('#sumbitButton');

//create an event when submittion button is clicked to store inputs into local variables for local storage
submitButton.addEventListener('click', function (event){
    event.preventDefault();

    const ownerName = ownerNameInput.value;
    const phoneNumber = phoneNumberInput.value;
    const petName = petNameInput.value;
    const petBreed = petBreedInput.value;
    const petAge = petAgeInput.value;
    const dateTime = dateTimeInput.value;
    const serviceName = serviceNameInput.value;
    const serviceType = serviceTypeInput.value;

    const appointmentInfo={
        ownerName,
        phoneNumber,
        petName,
        petBreed,
        petAge,
        dateTime,
        serviceName,
        serviceType
    };

    localStorage.setItem('appointmentInfo', JSON.stringify(appointmentInfo));

})