(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
})(jQuery);

function OpenMailForm() {

 }

 $(".icon").hover(function() {
   if (this.className == "icon devicon-php-plain"
 || this.className == "icon devicon-javascript-plain"){
    this.className +="         ";
   }else {
           this.className += '-wordmark';
         }
 }, function() {
   /* Stuff to do when the mouse leaves the element */
   this.className = this.className.substring(0, this.className.length-9); 
 });
 

 $("#Email").submit(function(event) {
if (Cookies.get('sent')  == null ) {
  Cookies.set('sent' , 0 ,{ expires: 1 });
}
if (Cookies.get('sent').length  >3 ){
   $("#contact").html(`
      <div class="alert alert-info">
  <strong>Sorry!</strong> 
  It appears you've sent me too many emails recently,
   Please consider calling me if you need to reach me or try again at a later date .
</div> `);
   return;
}
   console.log("start");
 $.ajax({
     url: 'php/email.php',
     type: 'post',
     data: {  
      namef: $("#namef").val(),
      namel: $("#namel").val(),
      telephone: $("#telephone").val(),
      address: $("#address").val(),
      subject: $("#subject").val(),
      message: $("#message").val()
   },
   })
   .done(function(data) {
     console.log("success :" + data);
     $("#contact").html(`
      <div class="alert alert-success">
  <strong>Email Sent Successfully!</strong> I will try to get back to you as soon as possible.
</div>  `);
   })
   .fail(function(data ) {
     console.log("error : " + data);
      $("#contact").html(`
      <div class="alert alert-warning">
  <strong>Warning! Email Wasn't Sent</strong> I am sorry for whatever may have caused the issue, Please send me an Email via your own email platform at Waail.saleh@ryerson.ca.
</div>  `);
   })
   .always(function() {
     console.log("complete");
  Cookies.set('sent', Cookies.get("sent") + 1, { expires: 1 });
   });
     
 });

