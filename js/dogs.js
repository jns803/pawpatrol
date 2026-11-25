// Daten der sechs Hunde.
// Eigene Fotos: Dateien als images/<id>-1.jpg, images/<id>-2.jpg, ... ablegen (bis 8 Stück).
// Sie erscheinen automatisch in der Galerie.
var DOGS = [
  {
    id: 'chase', name: 'Chase', color: '#1e5bb8', fur: '#a9713c', spots: false,
    hat: '👮', job: 'Polizeihund', vehicle: '🚓', breed: 'Schäferhund',
    facts: [
      { icon: '👮', text: 'Polizei' },
      { icon: '🚓', text: 'Polizeiauto' },
      { icon: '🚦', text: 'Verkehr regeln' },
      { icon: '🔍', text: 'Spuren suchen' },
      { icon: '📣', text: 'Megafon' },
      { icon: '🐕‍🦺', text: 'Schäferhund' }
    ]
  },
  {
    id: 'marshall', name: 'Marshall', color: '#e53935', fur: '#ffffff', spots: true,
    hat: '🧑‍🚒', job: 'Feuerwehrhund', vehicle: '🚒', breed: 'Dalmatiner',
    facts: [
      { icon: '🧑‍🚒', text: 'Feuerwehr' },
      { icon: '🚒', text: 'Feuerwehrauto' },
      { icon: '💧', text: 'Wasser spritzen' },
      { icon: '🪜', text: 'Leiter' },
      { icon: '🚑', text: 'Sanitäter' },
      { icon: '🤪', text: 'Ein bisschen tollpatschig' }
    ]
  },
  {
    id: 'skye', name: 'Skye', color: '#ec6fa5', fur: '#d9b38c', spots: false,
    hat: '👩‍✈️', job: 'Flughund', vehicle: '🚁', breed: 'Cockapoo',
    facts: [
      { icon: '🚁', text: 'Hubschrauber' },
      { icon: '☁️', text: 'Fliegen' },
      { icon: '🥽', text: 'Pilotenbrille' },
      { icon: '🤸', text: 'Saltos' },
      { icon: '👀', text: 'Von oben retten' },
      { icon: '🐩', text: 'Cockapoo' }
    ]
  },
  {
    id: 'rubble', name: 'Rubble', color: '#f2b400', fur: '#d8b070', spots: false,
    hat: '👷', job: 'Baustellenhund', vehicle: '🚜', breed: 'Bulldogge',
    facts: [
      { icon: '👷', text: 'Bauarbeiter' },
      { icon: '🚜', text: 'Bagger' },
      { icon: '🏗️', text: 'Bauen' },
      { icon: '🔨', text: 'Hämmern' },
      { icon: '🧱', text: 'Steine' },
      { icon: '🐶', text: 'Bulldogge' }
    ]
  },
  {
    id: 'rocky', name: 'Rocky', color: '#43a047', fur: '#9aa0a6', spots: false,
    hat: '♻️', job: 'Recyclinghund', vehicle: '🚛', breed: 'Mischling',
    facts: [
      { icon: '♻️', text: 'Recycling' },
      { icon: '🚛', text: 'Müllwagen' },
      { icon: '🔧', text: 'Reparieren' },
      { icon: '🧰', text: 'Werkzeug' },
      { icon: '💡', text: 'Gute Ideen' },
      { icon: '🐕', text: 'Mischling' }
    ]
  },
  {
    id: 'zuma', name: 'Zuma', color: '#fb8c00', fur: '#7b4a2a', spots: false,
    hat: '🤿', job: 'Wasserretter', vehicle: '🚤', breed: 'Labrador',
    facts: [
      { icon: '🤿', text: 'Tauchen' },
      { icon: '🚤', text: 'Boot' },
      { icon: '🌊', text: 'Wellen' },
      { icon: '🏄', text: 'Surfen' },
      { icon: '🛟', text: 'Retten im Wasser' },
      { icon: '🦮', text: 'Labrador' }
    ]
  }
];

// Gezeichnetes Hunde-Gesicht als SVG (eigene Illustration).
function dogFaceSVG(d) {
  var spots = d.spots
    ? '<circle cx="78" cy="62" r="9" fill="#222"/><circle cx="128" cy="70" r="7" fill="#222"/><circle cx="92" cy="42" r="5" fill="#222"/>' : '';
  var earColor = d.spots ? '#222' : shade(d.fur, -35);
  return '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + d.name + '">' +
    '<ellipse cx="42" cy="95" rx="24" ry="48" fill="' + earColor + '" transform="rotate(12 42 95)"/>' +
    '<ellipse cx="158" cy="95" rx="24" ry="48" fill="' + earColor + '" transform="rotate(-12 158 95)"/>' +
    '<circle cx="100" cy="106" r="62" fill="' + d.fur + '" stroke="#00000022" stroke-width="3"/>' +
    spots +
    '<ellipse cx="100" cy="132" rx="38" ry="30" fill="#fff6e8"/>' +
    '<circle cx="78" cy="98" r="11" fill="#fff"/><circle cx="122" cy="98" r="11" fill="#fff"/>' +
    '<circle cx="80" cy="100" r="6.5" fill="#222"/><circle cx="120" cy="100" r="6.5" fill="#222"/>' +
    '<circle cx="82" cy="97" r="2.2" fill="#fff"/><circle cx="122" cy="97" r="2.2" fill="#fff"/>' +
    '<ellipse cx="100" cy="122" rx="13" ry="9" fill="#222"/>' +
    '<path d="M100 131 V142 M100 142 Q88 154 78 142 M100 142 Q112 154 122 142" stroke="#222" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
    '<path d="M90 147 Q100 172 110 147 Z" fill="#ff6b81"/>' +
    '<text x="100" y="52" font-size="50" text-anchor="middle">' + d.hat + '</text>' +
    '</svg>';
}

function shade(hex, amt) {
  var n = parseInt(hex.slice(1), 16);
  var c = function (v) { return Math.max(0, Math.min(255, v + amt)); };
  var r = c(n >> 16), g = c((n >> 8) & 255), b = c(n & 255);
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
