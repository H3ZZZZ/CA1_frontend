

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

const getPersonByPhone = () => {
    const phoneNumberInput = document.getElementById("personByPhoneInput")
    const personByPhoneOut = document.getElementById("personByPhoneOut")
    var url = "https://fluffatheduck.dk/tomcat/CA1/api/persons/phone?phone=" + phoneNumberInput.value;

    fetch(url)
        .then(res => res.json())
        .then(data => personByPhoneOut.innerHTML = `${data.personFirstname} ${data.personLastname}`)
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
    addPerson
    // getPersonsByZipAndCity,
    // editPerson,
    // getCountByHobby,
    // getCountByZip
};

export default personFacade;