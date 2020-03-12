const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codeSnipped = document.getElementById("cta-img");

codeSnipped.setAttribute('src','img/header-img.png')

let nav = document.getElementsByTagName("nav");


let navLinks = document.querySelectorAll('nav a');

navLinks.forEach((element, index) =>
  element.textContent = siteContent.nav[`nav-item-${index+1}`]
  );

console.log(navLinks);

// let logo = document.getElementById('cta-img');
// l rewriting earlier code derp

let sectionText = document.getElementsByClassName('cta-text');

console.log(sectionText);

sectionText[0].children[0].textContent = siteContent.cta.h1;

sectionText[0].children[1].textContent = siteContent.cta.button;

//

let middleImg = document.getElementById('middle-img');

middleImg.setAttribute(`src`, `img/mid-page-accent.jpg`);

let topContent = document.getElementsByClassName('top-content');

console.log(topContent)

topContent[0].children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent[0].children[0].children[1].textContent = siteContent["main-content"]["features-content"];

topContent[0].children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent[0].children[1].children[1].textContent = siteContent["main-content"]["about-content"];

//

let bottomContent = document.getElementsByClassName('bottom-content');

console.log(bottomContent)

//services
bottomContent[0].children[0].children[0].textContent = siteContent["main-content"][`services-h4`]
bottomContent[0].children[0].children[1].textContent = siteContent["main-content"]["services-content"]

//product
bottomContent[0].children[1].children[0].textContent = siteContent["main-content"]["product-h4"]
bottomContent[0].children[1].children[1].textContent = siteContent["main-content"]["product-content"]

//vision
bottomContent[0].children[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
bottomContent[0].children[2].children[1].textContent = siteContent["main-content"]["vision-content"]

let footerP = document.querySelector('footer p')

console.log(footerP)
footerP.textContent = siteContent.footer.copyright;

//## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

navLinks.appendChild('my appended link');

navLinks.prependChild('my prepended link');
