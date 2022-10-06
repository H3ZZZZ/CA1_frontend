

const getPersons = () => {
    var url = "https://fluffatheduck.dk/tomcat/CA1/api/persons/all";
    const table = document.getElementById("allUserRows")
    fetch(url)
        .then(res => res.json())
        .then(data => table.innerHTML = data.map((el) =>
            `<tr><td>${el.id}</td>
           <td>${el.personFirstname}</td>
           <td>${el.personLastname}</td>
           <td>${el.personEmail}</td>`
        ).join(""))
}

const getPersonsByHobby = () => {
    const hobbyInput = document.getElementById("personByHobbyInput")
    const personByHobbyOut = document.getElementById("personByHobbyOut")
    var url = "https://fluffatheduck.dk/tomcat/CA1/api/persons/hobby?hobby=" + hobbyInput.value;

    fetch(url)
        .then(res => res.json())
        .then(data => personByHobbyOut.innerHTML = data.map((el) =>
            `${el.personFirstname} ${el.personLastname}`))
}

const getCountByZip = () => {
    const zipInput = document.getElementById("countZipInput")
    const countZipOut = document.getElementById("zipCountOut")
    var url = "https://fluffatheduck.dk/tomcat/CA1/api/persons/count/zip?zip=" + zipInput.value

    fetch(url)
        .then((response) => response.json())
        .then((data) => (countZipOut.innerHTML = data + " people are living in " + zipInput.value));

}

const getCountByHobby = () => {
    const hobbyInput = document.getElementById("countHobbyNameInput")
    const countHobbyOut = document.getElementById("hobbyCountOut")
    var url = "https://fluffatheduck.dk/tomcat/CA1/api/persons/count/hobby?hobby=" + hobbyInput.value;

    fetch(url)
        .then((response) => response.json())
        .then((data) => (countHobbyOut.innerHTML = data + " people are doing " + hobbyInput.value));

}
const getPersonByPhone = () => {
    const phoneNumberInput = document.getElementById("personByPhoneInput")
    const personByPhoneOut = document.getElementById("personByPhoneOut")
    var url = "https://fluffatheduck.dk/tomcat/CA1/api/persons/phone?phone=" + phoneNumberInput.value;

    fetch(url)
        .then(res => res.json())
        .then(data => personByPhoneOut.innerHTML = `${data.personFirstname} ${data.personLastname}`)
}

const getPersonsByZipAndCity = () => {
    const personByZipInput = document.getElementById("personByZipInput")
    const personByCityInput = document.getElementById("personByCityInput")
    const personByZipAndCityOut = document.getElementById("personsByZipAndCityOut")
    var url = `https://fluffatheduck.dk/tomcat/CA1/api/persons/city?zipcode=${personByZipInput.value}&cityname=${personByCityInput.value}`

    fetch(url)
        .then(res => res.json())
        .then(data => personByZipAndCityOut.innerHTML = data.map((el) =>
            `${el.personFirstname} ${el.personLastname}`))
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

const addPerson = () => {
    const addForm = document.getElementById("formid")
    var url = "https://fluffatheduck.dk/tomcat/CA1/api/persons/"
    const fName = document.getElementById("addFirstName")
    const lName = document.getElementById("addLastName")
    const email = document.getElementById("addEmail")
    const succespTag = document.getElementById("addSuccesP")

    const jsonObj = {
        personFirstname: fName.value,
        personLastname: lName.value,
        personEmail: email.value
    }
    const options = makeOptions("POST", jsonObj)
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => (succespTag.innerHTML = "Greeeat success"));
getPersons()
}

const personFacade = {
    getPersons,
    getPersonByPhone,
    getPersonsByHobby,
    addPerson,
    getPersonsByZipAndCity,
    getCountByHobby,
    getCountByZip,
    // editPerson
};

export default personFacade;