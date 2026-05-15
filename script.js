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

fetch("./pages/requestquote.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("request-container").innerHTML = data;
    console.log("Request for Quote Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading Request for quote:", error);
  });

fetch("./pages/faq.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("faq-container").innerHTML = data;
    console.log("faq Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading faq:", error);
  });

fetch("./pages/versatileapplication.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("versatile-container").innerHTML = data;
    console.log("versatile Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading versatile:", error);
  });

fetch("./pages/process-section.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("process-container").innerHTML = data;
    console.log("process Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading process:", error);
  });


fetch("./pages/tp.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("trusted-container").innerHTML = data;
    console.log("process Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading process:", error);
  });

fetch("./pages/piping-solution.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("piping-container").innerHTML = data;
    console.log("piping-solution Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading process:", error);
  });

  fetch("./pages/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
    console.log("footer-container Loaded Successfully");
  })
  .catch((error) => {
    console.log("Error loading process:", error);
  });