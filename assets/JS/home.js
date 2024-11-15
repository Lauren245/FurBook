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

// TODO: Create a function called `renderAppointments` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderAppointments(){
    mainContent.innerHTML = '';
    const listEl = document.createElement('ul');
    mainContent.appendChild(listEl);

    let appointments = JSON.parse(localStorage.getItem('appointmentInfo'));

    if(appointments === null){
        noAppointments();
    }
    //if the local storage is not an array (It will be in the future)
    else{
        const listItemEl = document.createElement('li');
        const sectionEl = document.createElement('section');
        const h1El = document.createElement('h1');
        const h2El = document.createElement('h2');
        const pEl = document.createElement('p');

        h1El.textContent = `appointment 1`;
        h2El.textContent = `${appointments.dayAndTime}`;
        //pEl.textContent = `${appointments[i].dateTime}`

        mainContent.appendChild(sectionEl);

        sectionEl.appendChild(h1El);
        sectionEl.appendChild(h2El);
        sectionEl.appendChild(pEl);

        listItemEl.appendChild(sectionEl);
        listEl.appendChild(listItemEl);
        
        console.log(listEl);
    }
    // else{
    //     console.log("Appointments.length = " + appointments.length);
    //     //console.log ("appointments = " + JSON.stringify(appointments));
    //     for(let i = 0; i < appointments.length; i++){
    //         const listItemEl = document.createElement('li');

    //         const sectionEl = document.createElement('section');
    //         const h1El = document.createElement('h1');
    //         const h2El = document.createElement('h2');
    //         const pEl = document.createElement('p');

    //         h1El.textContent = `appointment number ${appointments[i + 1]}`;
    //         console.log("i = " + i);
    //         h2El.textContent = `${appointments[i].dayAndTime}`;
    //         //pEl.textContent = `${appointments[i].dateTime}`

    //         mainContent.appendChild(sectionEl);
    //         sectionEl.appendChild(h1El);
    //         sectionEl.appendChild(h2El);
    //         sectionEl.appendChild(pEl);

    //         listItemEl.appendChild(sectionEl);
    //         listEl.appendChild(listItemEl);
            
    //         console.log(listEl);

    //         // const articleEl = document.createElement('article');
    //         // const articleH2El = document.createElement('h2');
    //         // //const pEl = document.createElement('p');
    //         // const blockQuoteEl = document.createElement('blockquote');

    //         // articleH2El.textContent = `${appointments[i].title}`;
    //         // pEl.textContent = `${appointments[i].username}`;
    //         // blockQuoteEl.textContent = `${appointments[i].content}`;

    //         // articleEl.appendChild(articleH2El);
    //         // articleEl.appendChild(pEl);
    //         // articleEl.appendChild(blockQuoteEl);

    //         // listItemEl.appendChild(articleEl);
    //         // listEl.appendChild(listItemEl);
            
    //         // console.log(listEl);
    //     }
    // }

}

//call functions
renderAppointments()
