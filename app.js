"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const teachers = await getTeachers();
  console.log(teachers);
  displayTeachers(teachers);
  displayTeachersGrid(teachers);
}


async function getTeachers() {
  //Fetch the data from the API
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json");
  const data = await response.json(); //Parse the data as JSON into readable JS
  return data;
}

function displayTeachers(teachers) {
  const teachersList = document.querySelector("#teachers-list");
  // for (const teacher of teachers) {
  //   teachersList.insertAdjacentHTML(
  //     "beforeend",
  //     `<li>
  //       ${teacher.name}
  //     </li>`
  //   );
  //   console.log(teacher);
  // }
}

function displayTeachersGrid(teachers) {
  const teachersGrid = document.querySelector("#teachers-grid");
  for (const teacher of teachers) {
    teachersGrid.insertAdjacentHTML(
      "beforeend",`
      <article class="grid-item">
        <img src="${teacher.image}" alt="${teacher.name}">
          <h2>${teacher.name}</h2>
          <p>${teacher.title}</p>
          <a href="mailto:${teacher.mail}">${teacher.mail}</a>
          <p>${teacher.name} likes strawberries so much (strawberries are very delicious)</p>
      </article>`

    );
  }

}