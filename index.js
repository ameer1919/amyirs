document.addEventListener('DOMContentLoaded', function () {
    // Get the "See more cat photos" link
    var catPhotosLink = document.querySelector('a[href="https://www.youtube.com/watch?v=ZgQLhk_61l0"]');
  
    // Add a click event listener to the link
    catPhotosLink.addEventListener('click', function (e) {
     
      alert('You clicked on the cat photos link!'); // Display an alert message
    });
  });
  