
const getCityinfo = () => {
    var url = "https://fluffatheduck.dk/tomcat/CA1/api/cityinfo/all"
    const table = document.getElementById("allCityRows")
    fetch(url)
        .then(res => res.json())
        .then(data => table.innerHTML = data.map((el) =>
            `<tr><td>${el.cityinfoZipcode}</td>
           <td>${el.cityinfoCity}</td>`
        ).join(""))
}


const cityFacade = {
    getCityinfo
}

export default cityFacade;