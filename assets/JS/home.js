/*this file will handle tasks associated with pulling an appointment
    from local storage and putting it on the index.html page */


/*TODO (in future): It may be a good idea to provide a way to filter these dates compared to the current date
    because appointments in the future may be more relevant*/

function sortByTime(apptArray){
    /*This arrow function is used to find the difference between the dates
     The array sort method sorts the array based on the results of the arrow function*/
    /*https://chatgpt.com/share/67324451-5a8c-8012-8c7e-d26b3c1277e8 */
    /*https://www.geeksforgeeks.org/arrow-functions-in-javascript/ */
    return apptArray.sort((a,b) => a.dayAndTime.dateTime - b.dayAndTime.dateTime);
}

// TODO: Create button to direct to form page
const mainContent = document.querySelector('main')


// TODO: Create a function that handles the case where there are no appointments
function noAppointments(){
    const noApptErr = document.createElement('p');
    noApptErr.textContent = 'There are no appoinments'
    mainContent.appendChild(noApptErr);
}

function generateElements(){
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
}
// TODO: Create a function called `renderAppointments` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderAppointments(){
    mainContent.innerHTML = '';
    const listEl = document.createElement('ul');
    mainContent.appendChild(listEl);

    let appointments = JSON.parse(localStorage.getItem('appointmentInfo'));

    if(appointments === null){
        noAppointments();
    }
    else{
        console.log("Appointments.length = " + appointments.length);
        //console.log ("appointments = " + JSON.stringify(appointments));
        for(let i = 0; i < appointments.length; i++){
        
            let apptNumber = i+1;

            h1El.textContent = `appointment number ${apptNumber}`;
            console.log("i = " + i);

            //DATE
            dateHeadingEl.textContent = `Appointment Date and Time: `
            dateEl.textContent = `Date: ${new Date(appointments[i].dayAndTime.dateTime.toLocaleString())}`;
           
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
renderAppointments()

    //if the local storage is not an array (It will be in the future)
    // else{
    //     const listItemEl = document.createElement('li');
    //     const sectionEl = document.createElement('section');
    //     const h1El = document.createElement('h1');
    //     const h2El = document.createElement('h2');
    //     const pEl = document.createElement('p');

    //     h1El.textContent = `appointment 1`;
    //     h2El.textContent = `${appointments.dayAndTime.dateTime}`;
    //     //pEl.textContent = `${appointments[i].dateTime}`

    //     mainContent.appendChild(sectionEl);

    //     sectionEl.appendChild(h1El);
    //     sectionEl.appendChild(h2El);
    //     sectionEl.appendChild(pEl);

    //     listItemEl.appendChild(sectionEl);
    //     listEl.appendChild(listItemEl);
        
    //     console.log(listEl);
    // }