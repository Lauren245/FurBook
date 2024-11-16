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
