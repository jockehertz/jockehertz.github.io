document.addEventListener("DOMContentLoaded", function() {
  let links = document.querySelectorAll(".inline-anchor");
  let siblings = [];
  for (let i = 0; i< links.length; i++) {
    siblings[i] = links[i].parentElement.querySelector(".hidden");
    
    links[i].addEventListener("mouseover", function() {
      siblings[i].style.color = "#414559";
    });
    
    links[i].addEventListener("mouseout", function() {
      siblings[i].style.color = "transparent";
    });
  }

  let titles = document.querySelectorAll(".title-anchor");
  let title_siblings = [];

  for (let i = 0; i < titles.length; i++) {
    title_siblings[i] = titles[i].parentElement.querySelector(".hidden");

    titles[i].addEventListener("mouseover", function() {
      title_siblings[i].style.color = "#414559";
    });

    titles[i].addEventListener("mouseout", function() {
      title_siblings[i].style.color = "transparent";
    });
  }
});
