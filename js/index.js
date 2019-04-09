// as the window scrolls
$(window).scroll(function() {
  
  // get the position of the top of the scroll bar
  let position = $(this).scrollTop();
  
  // for each section
  $('.section').each(function() {
    // get the top of the section when it is in the middle of the window
    // and get the id of the section
    let target = $(this).offset().top - ($(window).height() / 2);
    let id = $(this).attr('id');
    
    // position of the top of the scroll bar is greater than the target
    // we're at a new section, remove old actives, mark this section active
    if (position >= target) {
      $('.nav-link').removeClass('active');
      $('.nav-link[href="#' + id + '"]').addClass('active');
    }
    
    // if were at the bottom of the page, contact is active
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $('.nav-link').removeClass('active');
      $('.nav-link[href="#contact"]').addClass('active');
    }
  });
});
 
// scroll to page sections
$('nav').find('a').click(function(e) {
  e.preventDefault();
  var section = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(section).offset().top
  });
});
// code for page section scrolling from Devers @ Coderwall
// https://coderwall.com/p/z7gfjq/scroll-to-page-sections-with-nav-links





//Code for scrolling adapted from Greg Klien's portfolio example. https://codepen.io/GKlein/