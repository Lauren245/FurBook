/*this file will handle tasks associated with pulling an appointment
    from local storage and putting it on the index.html page */

/* ***KNOWN BUGS***
    put any bugs found in here:
 */
const mainContent = document.querySelector('main');


//gets the contents of the local storage array and returns the array sorted by appointment date and time.
function getStorageArray(){
    let appointments = JSON.parse(localStorage.getItem('appointmentInfo'));
    
    if(appointments !== null && appointments.length > 1){
        /*This arrow function is used to find the difference between the dates
        The array sort method sorts the array based on the results of the arrow function*/
        /*https://chatgpt.com/share/67324451-5a8c-8012-8c7e-d26b3c1277e8 */
        /*https://www.geeksforgeeks.org/arrow-functions-in-javascript/ */
        //must be parsed into dates because local storage stores data as strings
        return appointments.sort((a,b) => Date.parse(a.dayAndTime.dateTime) - Date.parse(b.dayAndTime.dateTime));
    }
    return appointments;
}


// Create a function that handles the case where there are no appointments
function noAppointments(){
    const noApptErr = document.createElement('p');
    noApptErr.textContent = 'There are no appoinments'
    mainContent.appendChild(noApptErr);
}

//Create a function called `renderAppointments` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderAppointments(){
    mainContent.innerHTML = '';
    const listEl = document.createElement('ul');
    mainContent.appendChild(listEl);

    let appointments = getStorageArray()

    if(appointments === null){
        noAppointments();
    }
    else{
        console.log("Appointments.length = " + appointments.length);
        for(let i = 0; i < appointments.length; i++){

            const listItemEl = document.createElement('li');

            const sectionEl = document.createElement('section');
            const h1El = document.createElement('h1');
        
            const dateHeadingEl = document.createElement('h2');
            const dateEl = document.createElement('p');
        
            const ownerHeadingEl = document.createElement('h2');
            const ownerNameEl = document.createElement('p');
            const ownerPhoneEl = document.createElement('p');
        
            const petHeadingEl = document.createElement('h2');
            const petNameEl = document.createElement('p');
            const petBreedEl = document.createElement('p');
            const petAgeEl = document.createElement('p');
        
            const serviceHeadingEl = document.createElement('h2')
            const serviceNameEl = document.createElement('p');
            const serviceTypeEl = document.createElement('p');
        
            let apptNumber = i+1;

            h1El.textContent = `appointment number ${apptNumber}`;
            console.log("i = " + i);

            //DATE
            /*This will most likely be taken care of in form validation. If this value is null, then
            the use of toLocaleString will cause a console error and stop the data from rendering. */
            if(appointments[i].dayAndTime.dateTime !== null){
                dateHeadingEl.textContent = `Appointment Date and Time: `
                dateEl.textContent = `Date: ${new Date(appointments[i].dayAndTime.dateTime.toLocaleString())}`;
            }
            
           
            //OWNER
            ownerHeadingEl.textContent = `Owner:`;
            ownerNameEl.textContent = `Name: ${appointments[i].owner.name}`;
            ownerPhoneEl.textContent = `Phone Number: ${appointments[i].owner.phoneNumber}`;


            //PET
            petHeadingEl.textContent = 'Pet:';
            petNameEl.textContent = `Name: ${appointments[i].pet.name}`;
            petBreedEl.textContent = `Breed: ${appointments[i].pet.breed}`;
            petAgeEl.textContent = `Age: ${appointments[i].pet.age}`;

            //SERVICE
            serviceHeadingEl.textContent  = `Service`;
            serviceNameEl.textContent = `Service Name: ${appointments[i].service.name}`;
            serviceTypeEl.textContent = `Service Type: ${appointments[i].service.type}`;


            mainContent.appendChild(sectionEl);

            sectionEl.appendChild(h1El);

            sectionEl.appendChild(dateHeadingEl);
            sectionEl.appendChild(dateEl);

            sectionEl.appendChild(ownerHeadingEl);
            sectionEl.appendChild(ownerNameEl);
            sectionEl.appendChild(ownerPhoneEl);

            sectionEl.appendChild(petHeadingEl);
            sectionEl.appendChild(petNameEl);
            sectionEl.appendChild(petBreedEl);
            sectionEl.appendChild(petAgeEl);

            sectionEl.appendChild(serviceHeadingEl);
            sectionEl.appendChild(serviceNameEl);
            sectionEl.appendChild(serviceTypeEl);

            listItemEl.appendChild(sectionEl);
            listEl.appendChild(listItemEl);
            
            console.log(listEl);
        }
    }
}

//call functions
renderAppointments();


//Create button to direct to form page
//!!! NOTE: In the release version this button will be created in index.html and referenced here instead.
const backButton = document.createElement('button');
backButton.textContent = "New Appointment Form";
mainContent.appendChild(backButton);

backButton.addEventListener('click', function(){
    location.assign("form.html");
});