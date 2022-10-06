import "./style.css";
import personFacade from "./personFacade.js";
document.getElementById("all-content").style.display = "block";
const findPersonByPhoneBtn = document.getElementById("personByPhoneBtn")
const findPersonByHobbyBtn = document.getElementById("personByHobbyBtn")
const addPersonBtn = document.getElementById("addBtn")

/*
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */

/* JS For Exercise-2 below */

/* JS For Exercise-3 below */

/*
 If you do not understand the code below, don´t worry, it is not necessary for completing the exercises
*/

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
      findPersonByHobbyBtn.addEventListener("click", personFacade.getPersonsByHobby);
      addPersonBtn.addEventListener("click", personFacade.addPerson)
      hideAllShowOne("ex1_html");
      break;
    case "ex2":
      hideAllShowOne("ex2_html");
      break;
    case "ex3":
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
