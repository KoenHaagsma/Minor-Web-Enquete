

# ⚙ [Web Enquete](https://browsertechnologiesenquete.herokuapp.com/)
![Preview](/readme-images/Preview.png)

## 📂 Assignment
Make a demo based on a chosen user story, make sure that all users with all browsers can use at least the core functionality and see/hear/feel it. At maximum a really good User Experience

## 🧔 User story
[User Story enquete](https://github.com/cmda-minor-web/browser-technologies-2122/blob/main/usecases/Usecase-enquete.md)

## 📃 Assignments
- [Assignment 1: Progressive enhancement research](https://github.com/KoenHaagsma/browser-technologies-2122/wiki/Assignment-1)
- [Assignment 2: Break the web](https://github.com/KoenHaagsma/browser-technologies-2122/wiki/Assignment-2)
- Final Assignment: Below here in the readme

## 🧾 Table of contents
-   [About the project](##About-the-project)
      * [Built with](###Built-with)
      * [Features](###Features)
      * [Wireflow](###Wireflow)
      * [Layers](###Layers)
      * [Browsers](###Browsers)
      * [Test Report](###Test-Report)
-   [Activity Diagram](##Activity-Diagram)
-   [Getting started](##Getting-started)
      * [Installation](##Installation)
-   [Sources](##Sources)
-   [License](##License)

## 📖 About the project
The project is an enquete that is made based on a chose user story, the project needs to be progressive enhanced so that all users with all different kind of devices and browsers can use it.

### 🛠 Built with
HTML, CSS, JS, Node.js, Pug, Express, 

### 🌟 Features
- Submit an enquete filled in correctly
- Feedback if fields are not filled in correctly
- Summary at end of enquete
- Editable content the whole way through
- Content is saved in between pages so that the user can continu if it wishes to pause in between
- Application is built PE, it works even when CSS and JS is disabled

Ik heb gebruik gemaakt van Progressive enhancement door de applicatie op te bouwen vanaf HTML, ik ervoor gezorgd dat alles het doet in HTML, dus de enquete versturen en onthouden. Dit doe ik doormiddel van de server die erachter zit, via de server schrijf ik naar JSON files om de tussenstand te bewaren per pagina render, dus ik submit per stukje waardoor hij schrijft naar de file waar de pagina bij hoort hierdoor heb ik aan de client side geen Javascript nodig om data op te slaan of te laden, dit gebeurt allemaal daar.

Daarna ben ik begonnen met het stylen van de pagina, toen heb ik gelijk gekeken naar feature detection in CSS met @supports kan ik reageren op browsers die bepaalde features niet ondersteunen denk bijvoorbeeld aan flex, wat ik zelf heel graag gebruik. Door die feature detection kan ik inspelen op de browser die dat niet heeft door m'n layout aan te passen met een andere feature die die specifieke browser wel ondersteund.

Als laatste ben ik bezig geweest met de Javascript client side, wat ik vooral gedaan heb met JS is feedback creëren voor de gebruiker, dus velden markeren die niet goed zijn en wat er dan precies fout is.

### 🧵 Breakdown
![Breakdown](/readme-images/Breakdown.png)

### 📚 Browsers
- Firefox - Version 99.0 (64-bits)
- Version 100.0.4896.75 (Official built) (64-bits)
- Apple Safari 15.3.1 (iOS 15.3.1, iPhone SE)
- Didn't have a Android device to my disposal

### 👩‍💻 Test report
- A description of the feature list that was tested
- -  Javascript features such as: Feedback for the user on not correctly filled in fields
- -  Submitting the forms
- -  Disabeling CSS and testing everything
- What browsers supported what feature
- -  On all the browsers that I looked on everything was supported, I used pretty modern browsers because i didn't have the opportunity to use the really old devices that school provided, the 'mondeling' will be my first change to do that
- What functionalities did i turn off in the tests
- -  I turned off Javascript to test everything and i turned off CSS to test everything.

## 🔍 Getting started
*Before you can start you need to follow the installation*

### 🔨 Installation
1. Open the terminal, or use the terminal in your IDE

2. Clone the repository
```
git clone https://github.com/KoenHaagsma/Minor-Web-Enquete.git
```
3. Go to the cloned repository
```
cd Minor-Web-Enquete
```
4. Install all packages
```
npm install || npm i
```
5. Start the application for development
```
npm run dev
```

## 📑 Sources
- [Can i use it](https://caniuse.com/)
- [Chromium based browsers](https://www.slant.co/topics/23761/~browsers-not-based-on-chromium)

## 🔖 License
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)]()
