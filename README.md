# Portfolio — Luca Skowronek

Zweisprachige (DE/EN) Single-Page-Portfolio-Seite, statisch (HTML/CSS + minimal JS), für GitHub Pages.

## Lokal ansehen

`index.html` doppelklicken (oder im Browser öffnen). Kein Build-Step, keine Abhängigkeiten.

## PDF erzeugen

1. Gewünschte Sprache oben rechts wählen (DE oder EN).
2. `Strg + P` → Ziel „Als PDF speichern".
3. Das Print-Stylesheet reduziert die Seite automatisch auf eine ATS-freundliche 1-Seiten-Ansicht (Navigation/Buttons/Animationen ausgeblendet, auswählbarer Text).

## GitHub-Username

Gesetzt auf `business664` (Hero- + Kontakt-GitHub-Button, Council-Repo-Link).

## Deploy auf GitHub Pages

```bash
# Repo auf GitHub anlegen (Name z. B. "portfolio" oder "business664.github.io")
git remote add origin https://github.com/business664/portfolio.git
git branch -M main
git push -u origin main
# Danach auf GitHub: Settings → Pages → Source: main / root → Save
# Optional Custom Domain: CNAME-Datei mit "lucaskowronek.de" + DNS-Eintrag
```

## /council-Skill veröffentlichen (für den Repo-Link)

```bash
# Skill-Dateien aus ~/.claude kopieren: agents/beam-*.md + commands/council.md
git init && git add . && git commit -m "feat: /council multi-persona Claude Code skill"
git remote add origin https://github.com/business664/council.git
git push -u origin main
```

## Foto

`assets/photo.jpg` einsetzen (quadratisch, wird kreisförmig zugeschnitten). Hinweis: rein ATS-technisch ist „ohne Foto" sicherer — der Slot ist auf Wunsch drin.
