(function () {
  var id = new URLSearchParams(location.search).get('dog');
  var d = DOGS.filter(function (x) { return x.id === id; })[0];
  var page = document.getElementById('page');

  if (!d) {
    page.innerHTML = '<p class="notfound">🐾❓</p>';
    return;
  }

  document.title = d.name + ' – Paw Patrol';
  document.body.style.setProperty('--c', d.color);
  var meta = document.querySelector('meta[name=theme-color]');
  if (!meta) { meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta); }
  meta.content = d.color;

  var slides = [
    '<div class="slide face"></div>',
    '<div class="slide emoji"><span>' + d.vehicle + '</span></div>',
    '<div class="slide emoji"><span>' + d.hat + '</span><span>' + d.vehicle + '</span></div>'
  ];

  page.innerHTML =
    '<h1 class="dog-name">' + d.name + '</h1>' +
    '<p class="dog-job">' + d.hat + ' ' + d.job + ' ' + d.vehicle + '</p>' +
    '<section class="gallery">' +
      '<div class="slides" id="slides">' + slides.join('') + '</div>' +
      '<div class="dots" id="dots"></div>' +
    '</section>' +
    '<section class="facts">' +
      d.facts.map(function (f) {
        return '<div class="fact"><span class="fact-icon">' + f.icon + '</span><span class="fact-text">' + f.text + '</span></div>';
      }).join('') +
    '</section>' +
    '<a class="back back-bottom" href="index.html" aria-label="Zurück">⬅️ 🏠</a>';

  var slidesEl = document.getElementById('slides');
  fillDogFace(slidesEl.firstChild, d);
  var dotsEl = document.getElementById('dots');

  function renderDots() {
    var n = slidesEl.children.length;
    dotsEl.innerHTML = '';
    for (var i = 0; i < n; i++) {
      var s = document.createElement('span');
      s.className = 'dot';
      dotsEl.appendChild(s);
    }
    updateDots();
  }
  function updateDots() {
    var i = Math.round(slidesEl.scrollLeft / slidesEl.clientWidth);
    Array.prototype.forEach.call(dotsEl.children, function (el, k) {
      el.classList.toggle('active', k === i);
    });
  }
  slidesEl.addEventListener('scroll', updateDots, { passive: true });

  // Optionale eigene Fotos: images/<id>-1.jpg ... (nur vorhandene werden angezeigt)
  var tried = 0;
  for (var n = 1; n <= 8; n++) {
    (function (n) {
      var url = 'images/' + d.id + '-' + n + '.jpg';
      var img = new Image();
      img.onload = function () {
        var div = document.createElement('div');
        div.className = 'slide photo';
        img.alt = d.name;
        div.appendChild(img);
        slidesEl.insertBefore(div, slidesEl.children[Math.min(n, slidesEl.children.length)]);
        renderDots();
      };
      img.src = url;
    })(n);
  }
  renderDots();
})();
