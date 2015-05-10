var tabs = document.querySelector('paper-tabs');

tabs.addEventListener('core-select', function() {
  console.log("Selected: " + tabs.selected);
});

var list = document.querySelector('post-list');

tabs.addEventListener('core-select', function() {
  list.show = tabs.selected;
});