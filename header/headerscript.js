/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("headernav");
    if (x.className === "headernav") {
      x.className += " responsive";
    } else {
      x.className = "headernav";
    }
}

// Function to load and insert the header dynamically
function insertHeader() {
    fetch('/header/header.html')
      .then(response => response.text())
      .then(headerHTML => {
        // Select the placeholder element in the current page
        const headerPlaceholder = document.getElementById('header-placeholder');

        // Insert the header HTML into the placeholder
        headerPlaceholder.outerHTML = headerHTML;

        // Highlight the current page link in the header (adjust 'href' value accordingly)
        const currentPage = window.location.pathname.split('/').pop(); // Extract current page filename
        const headerLinks = document.querySelectorAll('/header/header a');

        headerLinks.forEach(link => {
          const linkHref = link.getAttribute('href').split('/').pop(); // Extract link filename
          if (linkHref === currentPage) {
            link.classList.add('current-page'); // Add a class to highlight the current page link
          }
        });
      })
      .catch(error => {
        console.error('Error fetching header:', error);
      });
  }

  // Call the function to insert the header when the page is loaded
  window.addEventListener('DOMContentLoaded', insertHeader);

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    var x = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      if (!x.classList.contains("scrolled")) {
        x.classList.add("scrolled");
      }
    }else
    {
      if (x.classList.contains("scrolled")) {
        x.classList.remove("scrolled");
      }
    }
  }