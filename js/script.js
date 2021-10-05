const dragArea = document.querySelector(".box1");
  new Sortable(dragArea, {
    group: 'shared',
    animation: 350
});

const dragArea2 = document.querySelector(".box2");
  new Sortable(dragArea2, {
    group: 'shared',
    animation: 350
});