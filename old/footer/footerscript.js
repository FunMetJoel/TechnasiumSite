/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


// Function to load and insert the footer dynamically
function insertFooter() {
    fetch('/footer/footer.html')
      .then(response => response.text())
      .then(footerHTML => {
        // Select the placeholder element in the current page
        const footerPlaceholder = document.getElementById('footer-placeholder');

        // Insert the footer HTML into the placeholder
        footerPlaceholder.outerHTML = footerHTML;

        // Highlight the current page link in the footer (adjust 'href' value accordingly)
        const currentPage = window.location.pathname.split('/').pop(); // Extract current page filename
        const footerLinks = document.querySelectorAll('/footer/footer a');

        footerLinks.forEach(link => {
          const linkHref = link.getAttribute('href').split('/').pop(); // Extract link filename
          if (linkHref === currentPage) {
            link.classList.add('current-page'); // Add a class to highlight the current page link
          }
        });
      })
      .catch(error => {
        console.error('Error fetching footer:', error);
      });
  }

  // Call the function to insert the footer when the page is loaded
  window.addEventListener('DOMContentLoaded', insertFooter);