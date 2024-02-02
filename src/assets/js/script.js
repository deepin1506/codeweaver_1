$(document).ready(function () {
  $("#sidebar-menu .sub-menu > a").click(function (e) {
    $("#sidebar-menu ul ul").slideUp(),
      $(this).next().is(":visible") || $(this).next().slideDown(),
      e.stopPropagation();
  });

  /*------------------------------------------------------------------------------*/
  /* bs-toggle
  /*------------------------------------------------------------------------------*/
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Mobile search
  $(".mobile-search").click(function () {
    $(".searchbar").toggleClass("open");
  });
});

/*------------------------------------------------------------------------------*/
/* Sidebar
    /*------------------------------------------------------------------------------*/

const body = document.querySelector("body"),
  sidber = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle");
toggle.addEventListener("click", () => {
  sidber.classList.toggle("close");
});
ctoggle.addEventListener("click", () => {
  sidber.classList.Ctoggle("close");
});
