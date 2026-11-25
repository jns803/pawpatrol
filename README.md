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

Pro Hund ein quadratisches Bild als `images/<id>.png` ablegen (`chase`, `marshall`, `skye`, `rubble`, `rocky`, `zuma`, ca. 400×400 px). Fehlt die Datei, wird automatisch das gezeichnete SVG-Gesicht angezeigt.

## Eigene Fotos

Bilder als `images/<name>-1.jpg`, `images/<name>-2.jpg` … ablegen (z. B. `images/chase-1.jpg`, bis 8 pro Hund). Sie erscheinen automatisch in der Galerie.

## GitHub Pages

1. Repository auf GitHub pushen (Branch `main`).
2. Settings → Pages → Source: **GitHub Actions**.
3. Der Workflow `.github/workflows/pages.yml` veröffentlicht die Seite bei jedem Push.
