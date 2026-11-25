# Paw Patrol – Lern-App 🐾

Einfache statische Seite: Startseite mit 6 farbigen Kacheln (Chase, Marshall, Skye, Rubble, Rocky, Zuma), Detailseite mit wischbarer Galerie und Emoji-Fakten.

## Lokal ansehen

Mit Node.js (keine Installation im Projekt nötig):

```
npx http-server -p 8000
```

Dann `http://localhost:8000` öffnen (am Handy: `http://<PC-IP>:8000`).

Alternativ: `npx serve -l 8000` oder mit Python `python -m http.server 8000`.

## Hunde-Bilder (PNG)

Pro Hund ein quadratisches Bild als `images/<id>.png` ablegen (`chase`, `marshall`, `skye`, `rubble`, `rocky`, `zuma`, empfohlen: 800×800 px). Fehlt die Datei, wird automatisch das gezeichnete SVG-Gesicht angezeigt.

## Eigene Fotos

Bilder (jpg, jpeg, png oder webp, empfohlen: 1200×1200 px) in `images/` ablegen und beim jeweiligen Hund in `js/dogs.js` unter `photos` eintragen, z. B. `photos: ['rocky-1.webp', 'rocky-2.png']`. Sie erscheinen in dieser Reihenfolge in der Galerie. Nur eingetragene Dateien werden geladen (keine 404-Fehler in der Konsole).

## GitHub Pages

1. Repository auf GitHub pushen (Branch `main`).
2. Settings → Pages → Source: **GitHub Actions**.
3. Der Workflow `.github/workflows/pages.yml` veröffentlicht die Seite bei jedem Push.
