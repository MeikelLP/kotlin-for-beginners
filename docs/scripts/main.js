

// Get all "navbar-burger" elements
var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {

  // Add a click event on each of them
  $navbarBurgers.forEach(function ($el) {
    $el.addEventListener('click', function () {

      // Get the target from the "data-target" attribute
      var target = $el.dataset.target;
      var $target = document.getElementById(target);

      // Toggle the class on both the "navbar-burger" and the "navbar-menu"
      $el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
}

/////
// Themes controlled by JS
/////

const themes = {
  dark: {
    theme: "https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.7.1+1/solar/bulmaswatch.min.css",
    highlight: "/kotlin-for-beginners/assets/highlight-dark.css"
  },
  light: {
    theme: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
    highlight: "/kotlin-for-beginners/assets/highlight-light.css"
  }
}

const themeSwticher = document.getElementById('theme-switcher')
themeSwticher.checked = localStorage.getItem('theme') === 'dark'
themeSwticher.addEventListener('change', _ => {
  refreshTheme(themeSwticher.checked)
  const theme = getThemeKey(themeSwticher.checked)
  localStorage.setItem('theme', theme)
})

function refreshTheme(toggle) {
  const newTheme = getTheme(toggle)
  document.getElementById('theme').href = newTheme.theme
  document.getElementById('theme-highlight').href = newTheme.highlight
}

function getTheme(toggle) {
  return themes[getThemeKey(toggle)]
}

function getThemeKey(toggle) {
  if (toggle) {
    return 'dark'
  } else {
    return 'light'
  }
}