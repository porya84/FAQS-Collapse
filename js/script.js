let $ = document;
let title_divs = $.querySelectorAll(".title_div");
let answersElems = $.querySelectorAll(".answers");
show_flag = false;
title_divs.forEach((title) => {
  title.addEventListener("click", () => {
    if (show_flag === false) {
      title.lastElementChild.classList.remove("gg-math-plus");
      title.lastElementChild.classList.add("gg-math-minus");
      title.parentElement.lastElementChild.style.display = "block";

      show_flag = true;
    } else {
      title.lastElementChild.classList.remove("gg-math-minus");
      title.lastElementChild.classList.add("gg-math-plus");
      title.parentElement.lastElementChild.style.display = "none";
      show_flag = false;
    }
  });
});
