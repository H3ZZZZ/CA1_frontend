

const getHobbies = () => {
    var url = "https://fluffatheduck.dk/tomcat/CA1/api/hobby/all"
    const table = document.getElementById("allHobbyRows")
    fetch(url)
        .then(res => res.json())
        .then(data => table.innerHTML = data.map((el) =>
            `<tr><td>${el.id}</td>
           <td>${el.hobbyName}</td>
           <td>${el.hobbyDesc}</td>`
        ).join(""))
}

const hobbyFacade = {
    getHobbies
};

export default hobbyFacade;