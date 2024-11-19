//Js file resposible for writing and reading local storage values
    

  // Function using info from form.js to store appointments into an array to store previous appointments 
  function storeLocalStorage(appointmentInfo){
    const newAppointment = JSON.parse(localStorage.getItem('appointmentInfo')) || [];
      newAppointment.push(appointmentInfo);
      localStorage.setItem('appointmentInfo', JSON.stringify(newAppointment));
      console.log(newAppointment);
    }
