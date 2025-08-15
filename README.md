<div align="center">

# 📄 Valerio Anzil — CV / Portfolio

Portfolio personale sviluppato in **Angular**, pubblicato tramite **GitHub Pages**

🔗 **Live preview:** https://valerioa96.github.io/cv-valerio/login

</div>

---

## 🧭 Panoramica

Questo repository contiene il mio **CV interattivo** / portfolio, realizzato con Angular (standalone components) e pubblicato come **static site** su GitHub Pages.

Le pagine (Home, Experience, Contacts) sono responsive, animate e allineate ad un tema visivo basato su **gradiente viola / rosa**.

---

## 🔧 Stack & Librerie

| Tecnologia/Libreria     | Ruolo                                                             |
|--------------------------|------------------------------------------------------------------|
| Angular 17              | Framework principale (standalone components)                     |
| TypeScript              | Tipizzazione + logica                                             |
| SCSS / CSS              | Styling (glassmorphism, animazioni, gradient, responsiveness)     |
| ngx-translate           | Internationalization 🇮🇹 / 🇬🇧                                      |
| Feather Icons / Bootstrap Icons | Icone vettoriali                                      |
| GitHub Pages            | Hosting del sito statico                                          |

---

## ▶️ Avvio in locale

```bash
# installa le dipendenze (una sola volta)
npm install

# avvia l’applicazione in modalità sviluppo
npm run start

```
---

## 🚀 Deploy

develop  →  master →  deploy

porto tutti i nuovi lavori su master e poi eseguo il comando:

```bash
npm run deploy
```

che corrisponde a fare:

```bash

ng build --configuration production --base-href "/cv-valerio/"

npx angular-cli-ghpages --dir=dist/cv-valerio/browser

```
---

## 🔖 Release

In seguito al rilascio per creare una release(Tag Git) eseguire il seguente comando: 

```bash
npm run release --tag=<versione> --msg="<descrizione>"
```

ESEMPIO:

```bash
npm run release --tag=1.1.0 --msg="Nuova pagina Contatti + refactoring Home"
```

Verranno eseguiti in automatico:

```bash
git tag -a v1.1.0 -m "Nuova pagina Contatti + refactoring Home"
git push origin v1.1.0
```

---

## 🔁 Release

develop   →   master   →   npm run deploy   →   npm run release --tag=x.y.z


<div align="center">
  <sub>Built & designed with ♥ by Valerio Anzil</sub>
</div>