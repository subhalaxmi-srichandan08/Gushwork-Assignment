fetch("./pages/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;
    console.log("Navbar Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading navbar:", error);
  });


// LOAD PATH
fetch("./pages/path.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("path-container").innerHTML = data;
    console.log("Path Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading Path:", error);
  });


// LOAD HOME
fetch("./pages/home.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("home-container").innerHTML = data;
    console.log("Home Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading home:", error);
  });

  // LOAD HOME
fetch("./pages/tech.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("tech-container").innerHTML = data;
    console.log("Home Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading tech:", error);
  });