(function () {
  var root = document.getElementById('tiles');
  DOGS.forEach(function (d) {
    var a = document.createElement('a');
    a.className = 'tile';
    a.href = 'dog.html?dog=' + d.id;
    a.style.setProperty('--c', d.color);
    a.setAttribute('aria-label', d.name);
    a.innerHTML =
      '<span class="tile-img"></span>' +
      '<span class="tile-name">' + d.name + '</span>';
    fillDogFace(a.firstChild, d);
    root.appendChild(a);
  });
})();
