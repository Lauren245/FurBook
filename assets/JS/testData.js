//turn test on and off
let testDataEnabled = false;

if(testDataEnabled){
    const apptArray = [];

    //create test appointments
    //https://www.w3schools.com/js/js_dates.asp
    //these times are not adjusted for time zones

    apptArray.push(createAppointment(
        createOwner('John', '456-123-5632'),
        createPet('Sam', 'Great Dane', 2),
        createService('bathing and drying', 'basic grooming'),
        createDayAndTime(new Date())
    ));

    apptArray.push(createAppointment(
        createOwner('Jane', '123-455-6354'),
        createPet('Buddy', 'lab', 7),
        createService('nail trim', 'basic grooming'),
        createDayAndTime('2024-04-05T14:30:00Z')
    ));

    apptArray.push(createAppointment(
        createOwner('Molly Anderson','555-123-4567'),
        createPet('Bella', 'Golden Retriever', 3),
        createService('flea and tick treatment', 'skin and coat'),
        createDayAndTime('2023-03-08T10:30:00Z')
        
    ));

    apptArray.push(createAppointment(
        createOwner('James Campbell','555-234-5678'),
        createPet('Max', 'Beagle', 5),
        createService('full body haircut', 'haircuts and styling'),
        createDayAndTime('2023-07-21T15:00:00Z')
    ));

    apptArray.push(createAppointment(
        createOwner('William Price','555-456-3210'),
        createPet('Daisy', 'Poodle', 2),
        createService('brush and de-shedding', 'skin and coat'),
        createDayAndTime('2024-03-14T09:00:00Z')
        
    ));

    apptArray.push(createAppointment(
        createOwner('Isabella Ross','555-345-2109'),
        createPet('Rocky', 'German Shepherd', 4),
        createService('de-matting', 'haircuts and styling'),
        createDayAndTime('2024-12-05T13:50:00Z')
        
    ));

    apptArray.push(createAppointment(
        createOwner('Emma Rivera','555-345-6789'),
        createPet('Luna', 'Labrador Retriever', 1),
        createService('flea and tick treatment', 'skin and coat'),
        createDayAndTime('2024-04-27T11:30:00Z')
    ));

    apptArray.push(createAppointment(
        createOwner('Liam Thompson','555-456-7890'),
        createPet('Charlie', 'Bulldog', 0.5),
        createService('nail trim', 'basic grooming'),
        createDayAndTime('2025-01-10T08:45:00Z')
    ));

    apptArray.push(createAppointment(
        createOwner('Sophia Martinez','555-567-8901'),
        createPet('Milo', 'Dachshund', 2),
        createService('bathing and drying', 'basic grooming'),
        createDayAndTime('2024-04-06T17:00:00Z')
    ));

    apptArray.push(createAppointment(
        createOwner('Noah Stewart','555-789-0123'),
        createPet('Luna', 'Bulldog', 6),  
        createService('nail trim', 'basic grooming'),  
        createDayAndTime('2024-12-05T07:00:00Z')
    ));

    function outputArray(){
        for(let i = 0; i < apptArray.length; i++){
            console.log("appointment " + (i + 1) + ": \n" + "owner:" +  JSON.stringify(apptArray[i].owner) + '\n pet: ' + JSON.stringify(apptArray[i].pet)
            + " \n service: " + JSON.stringify(apptArray[i].service) + " \n date and time(UTC): " + JSON.stringify(apptArray[i].dayAndTime) + 
                "\n date and time (Locale String): " + apptArray[i].dayAndTime.dateTime.toLocaleString());
            console.log("------------------------------------------");
            //string variations
            //JSON.stringify(apptArray[i].dayAndTime) : shows the time in UTC
            //apptArray[i].dayAndTime.dateTime.toLocaleString() : converts time to local time and alters output to improve readability.
        }
    }

    //call functions
    console.log("Array before sort: ");
    outputArray()
    //sort by time is defined in home.js
    sortByTime(apptArray);
    console.log("Array after sort: ");
    outputArray()
    console.log(JSON.stringify(apptArray[6])); //this person is being added by passing a new Date object to createDayAndTime (not a string).
}