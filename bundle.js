window.onload = function() {

  function doToggle () {
    document.body.classList.toggle("dark");
    // document.getElementsByClassName("nav").classList.toggle("dark");
  }

    // if no localstorage, set default to light
  if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light")
  }

  // if theme is already set to dark, set to dark
  if (localStorage.getItem("theme") == "dark") {
    doToggle();
    // document.getElementById("clickme").classList.toggle("dark");
  }


  function toggleTheme() {

    doToggle();
    // document.getElementById("clickme").classList.toggle("dark");
    
    // update localstorage to opposite of whatever it was
    if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark");
    }
    else if (localStorage.getItem("theme") == "dark") {
      localStorage.setItem("theme", "light");
    }
  }

  const btn = document.getElementById("theme-toggle")
  btn.addEventListener("click", () => {
    console.log("AAAAAAAAAAAAAAAAAAa")
    toggleTheme();
  })
};