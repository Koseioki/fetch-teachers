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
  const response = await fetch("https://headlesswp.koseioki.dk/wp-json/wp/v2/teachers?acf_format=standard");
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
        <img src="${teacher.acf.image}" alt="${teacher.acf.name}">
          <h2>${teacher.acf.name}</h2>
          <p>${teacher.acf.title}</p>
          <a href="mailto:${teacher.acf.mail}">${teacher.acf.mail}</a>
          <p>${teacher.acf.name} likes strawberries so much (because strawberries are very delicious)</p>
          <p>${teacher.acf.name} likes Very nice bear because ${teacher.acf.bear}</p>
      </article>`

    );
  }

}