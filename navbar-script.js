// Fetch the content of the navbar.html file
fetch('navbar.html')
  .then(response => response.text())
  .then(html => {
    // Insert the navbar content into the placeholder div
    document.getElementById('navbar-placeholder').innerHTML = html;
  });




  