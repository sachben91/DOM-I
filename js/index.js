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
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])
let navAnchor = document.querySelectorAll('nav a')
navAnchor[0].textContent = "Services"
navAnchor[1].textContent = "Product"
navAnchor[2].textContent = "Vision"
navAnchor[3].textContent = "Features"
navAnchor[4].textContent = "About"
navAnchor[5].textContent = "Contact"
navAnchor.forEach(function(navelement){navelement.style.color = "green"})
var nanchor = document.createElement('a')
var textanchor = document.createTextNode('Company')
nanchor.appendChild(textanchor)
document.querySelector('nav').appendChild(nanchor) 
var panchor = document.createElement('a')
var pcontent = document.createTextNode('Team')
panchor.appendChild(pcontent)
document.querySelector('nav').prepend(panchor)
let ctaH1 = document.querySelector('.cta-text h1')
ctaH1.innerHTML = 'Dom<br>is<br>Awesome'
let ctaButton = document.querySelector('.cta-text button ')
ctaButton.textContent = siteContent['cta']['button']
let imgHeader = document.getElementById('cta-img')
imgHeader.setAttribute('src', siteContent['cta']['img-src'])
let textContentH4 = document.querySelectorAll('.text-content h4')
textContentH4[0].textContent = siteContent['main-content']['features-h4']
textContentH4[1].textContent = siteContent['main-content']['about-h4']
textContentH4[2].textContent = siteContent['main-content']['services-h4']
textContentH4[3].textContent = siteContent['main-content']['product-h4']
textContentH4[4].textContent = siteContent['main-content']['vision-h4']
let textContentBody = document.querySelectorAll('.text-content p')
textContentBody[0].textContent = siteContent['main-content']['features-content']
textContentBody[1].textContent = siteContent['main-content']['about-content']
textContentBody[2].textContent = siteContent['main-content']['services-content']
textContentBody[3].textContent = siteContent['main-content']['product-content']
textContentBody[4].textContent = siteContent['main-content']['vision-content']
let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4']
let contactBody = document.querySelectorAll('.contact p')
contactBody[0].textContent = siteContent['contact']['address']
contactBody[1].textContent = siteContent['contact']['phone']
contactBody[2].textContent = siteContent['contact']['email']
let footer = document.querySelector ('footer')
footer.textContent = siteContent['footer']['copyright']