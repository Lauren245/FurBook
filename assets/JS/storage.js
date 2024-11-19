//Js file resposible for writing and reading local storage values
    

  // No typo but does not work properly. Does not create a proper array to store additional appointments.
  //Current issue is that it creates an array that stores the same object twices and does not properly store a new appointment
  function storeLocalStorage(){

    const newAppointment = JSON.parse(localStorage.getItem('appointmentInfo'));
        if(localStorage.getItem('appointmentInfo') === null){
          localStorage.setItem('appointmentInfo', '[]');
          console.log('is null'); 
        }
    
      const oldAppointment = [JSON.parse(localStorage.getItem('appointmentInfo'))];
      oldAppointment.push(newAppointment);

      localStorage.setItem('appointmentInfo', JSON.stringify(oldAppointment));
      console.log(oldAppointment);
    }

    submitButton.addEventListener('click', function (event){
      storeLocalStorage();
            })


  // with typo accidently creates a second localStorage that works but need it to rewrite original localStorage
  // function storeLocalStorage(){

  //   let newAppointment = JSON.parse(localStorage.getItem('appointmentInfo'));
  //       if(localStorage.getItem('appoinmentInfo') === null){//typo
  //         localStorage.setItem('appoinmentInfo', '[]');//typo appoinment
  //         console.log('is null'); 
  //       }
    
  //     let oldAppointment = JSON.parse(localStorage.getItem('appoinmentInfo'));//typo
      
  //     oldAppointment.push(newAppointment);

  //     localStorage.setItem('appoinmentInfo', JSON.stringify(oldAppointment));//typo
  //     console.log(oldAppointment);
  //   }

  //   submitButton.addEventListener('click', function (event){
  //     storeLocalStorage();
  //           })