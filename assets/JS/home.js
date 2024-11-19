/*this file will handle tasks associated with pulling an appointment
    from local storage and putting it on the index.html page */

/* ***KNOWN BUGS***
    put any bugs found in here:
 */
//const mainContent = document.querySelector('main');
const templateEl = document.getElementById("AppointmentTemplate");
const tableEl = document.querySelector(".AppointmentTableBody");


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
    const errContainer = document.createElement('tr');
    const noApptErr = document.createElement('td');
    noApptErr.textContent = 'There are no appointments';
    noApptErr.colSpan = 8;
    noApptErr.style = "text-align: center";
    errContainer.appendChild(noApptErr);
    tableEl.appendChild(errContainer);
}

//Create a function called `renderAppointments` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderAppointments(){
    let appointments = getStorageArray();

    if(appointments === null){
        noAppointments();
    }
    else{
        console.log("Appointments.length = " + appointments.length);
        for(let i = 0; i < appointments.length; i++){
            const row = templateEl.content.cloneNode(true);

            const ownerNameEl = row.querySelector(".OwnerName");
            const ownerPhoneEl = row.querySelector(".PhoneNumber");;
        
    
            const petNameEl = row.querySelector(".PetName");
            const petBreedEl = row.querySelector(".PetBreed");;
            const petAgeEl = row.querySelector(".PetAge");
            
            const dateEl = row.querySelector(".DateTime");
            
            const serviceNameEl = row.querySelector(".ServiceName");
            const serviceTypeEl = row.querySelector(".ServiceType");
        
            console.log("i = " + i);

            //DATE
            /*This will most likely be taken care of in form validation. If this value is null, then
            the use of toLocaleString will cause a console error and stop the data from rendering. */
            if(appointments[i].dayAndTime.dateTime !== null){
                dateEl.textContent = new Date(appointments[i].dayAndTime.dateTime.toLocaleString());
            }
                   
            //OWNER
            ownerNameEl.textContent = appointments[i].owner.name;
            ownerPhoneEl.textContent = appointments[i].owner.phoneNumber;

            //PET
            petNameEl.textContent = appointments[i].pet.name;
            petBreedEl.textContent = appointments[i].pet.breed;
            petAgeEl.textContent = appointments[i].pet.age;

            //SERVICE
            serviceNameEl.textContent = appointments[i].service.name;
            serviceTypeEl.textContent = appointments[i].service.type;

            tableEl.appendChild(row);
        }
    }
}

//call functions
renderAppointments();

