/*This file will handle the form logic. */
const error = document.querySelector('#error');
const ownerNameInput = document.querySelector('#ownerName');
const phoneNumberInput = document.querySelector('#phoneNumber');
const petNameInput = document.querySelector('#petName');
const petBreedInput = document.querySelector('#breed');
const petAgeInput = document.querySelector('#age');
const dateTimeInput = document.querySelector('#dateTime');
const serviceNameInput = document.querySelector('#serviceName');
const serviceTypeInput = document.querySelector('#serviceType');
const submitButton = document.querySelector('#submitButton')//fix typo later
Inputs = [dateTimeInput, ownerNameInput, phoneNumberInput, petNameInput, petBreedInput, petAgeInput, serviceNameInput, serviceTypeInput]
// event.preventDefault();
//create an event when submittion button is clicked to store inputs into local variables for local storage
submitButton.addEventListener('click', function (event){
    var  True = true
    while (True === true) {
        for (let i = 0; i < Inputs.length; i++) {
            if (Inputs[i].value.length !== 0) {
                event.preventDefault();
            } else {
                True = false
                break
            }}

        if (!True === false) {
            const ownerName = ownerNameInput.value;
            const phoneNumber = phoneNumberInput.value;
            const petName = petNameInput.value;
            const petBreed = petBreedInput.value;
            const petAge = petAgeInput.value;
            const dateTime = dateTimeInput.value;
            const serviceName = serviceNameInput.value;
            const serviceType = serviceTypeInput.value;
            //creates an object using functions from appointment.js 
            const appointmentInfo= createAppointment(
                createOwner(ownerName,phoneNumber),
                createPet(petName,petBreed,petAge),
                createService(serviceName,serviceType),
                createDayAndTime(dateTime)
            );
            //sets appointmentInfo to localStorage
            storeLocalStorage(appointmentInfo);
           // console.log(localStorage)
            break
    
}}})  