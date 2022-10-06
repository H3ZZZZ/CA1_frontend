import "./style.css";
import personFacade from "./personFacade.js";
import hobbyFacade from "./hobbyFacade.js";
import cityFacade from "./cityFacade.js";

document.getElementById("all-content").style.display = "block";
const findPersonByPhoneBtn = document.getElementById("personByPhoneBtn")
const findPersonsByHobbyBtn = document.getElementById("personByHobbyBtn")
const findPersonsByZipBtn = document.getElementById("personByZipAndCityBtn")
const addPersonBtn = document.getElementById("addBtn")
const findCountByHobbyBtn = document.getElementById("hobbyCountBtn")


function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none";
  document.getElementById("ex1_html").style = "display:none";
  document.getElementById("ex2_html").style = "display:none";
  document.getElementById("ex3_html").style = "display:none";
  document.getElementById(idToShow).style = "display:block";
}


function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1":
      personFacade.getPersons();
      findPersonByPhoneBtn.addEventListener("click", personFacade.getPersonByPhone);
      findPersonsByHobbyBtn.addEventListener("click", personFacade.getPersonsByHobby);
      addPersonBtn.addEventListener("click", personFacade.addPerson);
      findPersonsByZipBtn.addEventListener("click", personFacade.getPersonsByZipAndCity);
      findCountByHobbyBtn.addEventListener("click", personFacade.getCountByHobby);

      hideAllShowOne("ex1_html");
      break;
    case "ex2":
      hobbyFacade.getHobbies();
      hideAllShowOne("ex2_html");
      break;
    case "ex3":
      cityFacade.getCityinfo();
      hideAllShowOne("ex3_html");
      break;
    default:
      hideAllShowOne("about_html");
      break;
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");
