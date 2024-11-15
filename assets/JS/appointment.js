//Factory Functions
function createOwner(name, phoneNumber){
    return {name, phoneNumber};
};

function createPet(name, breed, age){
    return {name, breed, age};
}

function createService(name, type){
    return {name, type};
}

function createDayAndTime(dateTime){
    return {dateTime: new Date(dateTime)};
}

function createAppointment(owner, pet, service, dayAndTime){
    return{
        owner,
        pet,
        service,
        dayAndTime
    };
};










