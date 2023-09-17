// get a link to any of the headings being clicked (nodelist)
const headingAccord = document.querySelectorAll('a.accordion-heading');

headingAccord.forEach((heading) => {
  heading.addEventListener('click', function() {
    // get sibling of the a.accordion-heading element
    const contentAreaPara = this.nextElementSibling;
    contentAreaPara.classList.toggle('accordion-hidden');
  });
});
