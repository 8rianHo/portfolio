
const aboutBtn = document.getElementsByClassName("aboutBtn")[0];
const aboutBtnMobile = document.getElementsByClassName("aboutBtn")[1];
const aboutContent = document.getElementById("about");

const contentBtn = document.getElementsByClassName("contentBtn")[0];
const contentBtnMobileFromAbout = document.getElementsByClassName("contentBtn")[1];
const contentBtnMobileFromContact = document.getElementsByClassName("contentBtn")[2];
const contentContent = document.getElementById("content");

const contactBtn = document.getElementsByClassName("contactBtn")[0];
const contactBtnMobile = document.getElementsByClassName("contactBtn")[1];
const contactContent = document.getElementById("contact");

const navItems = document.getElementsByClassName("nav-item");
const contentList = [aboutContent, contentContent, contactContent];

const modal = document.getElementById("myModal");
const modalBtns = document.getElementsByClassName("modalClass");
const modalImages = document.getElementsByClassName("modal-image");
const modalDiv = document.getElementsByClassName("modal-content")[0];
const spanBtn = document.getElementsByClassName("close")[0];

let isContentOff = false;
let activePageNumber = 1;

// EVENT LISTENERS
aboutBtn.addEventListener("click", function() {
    if (activePageNumber != 1) {
        setNavClasses(1, navItems);
        setPageViews(activePageNumber, 1, contentList);
        activePageNumber = 1;
    }
});
aboutBtnMobile.addEventListener("click", function() {
    if (activePageNumber != 1) {
        setNavClasses(1, navItems);
        setPageViews(activePageNumber, 1, contentList);
        activePageNumber = 1;
    }
});
contentBtn.addEventListener("click", function() {
    if (activePageNumber != 2) {
        setNavClasses(2, navItems);
        setPageViews(activePageNumber, 2, contentList);
        activePageNumber = 2;
    }
});
contentBtnMobileFromAbout.addEventListener("click", function() {
    if (activePageNumber != 2) {
        setNavClasses(2, navItems);
        setPageViews(activePageNumber, 2, contentList);
        activePageNumber = 2;
    }
});
contentBtnMobileFromContact.addEventListener("click", function() {
    if (activePageNumber != 2) {
        setNavClasses(2, navItems);
        setPageViews(activePageNumber, 2, contentList);
        activePageNumber = 2;
    }
});
contactBtn.addEventListener("click", function() {
    if (activePageNumber != 3) {
        setNavClasses(3, navItems);
        setPageViews(activePageNumber, 3, contentList);
        activePageNumber = 3;
    }
});
contactBtnMobile.addEventListener("click", function() {
    if (activePageNumber != 3) {
        setNavClasses(3, navItems);
        setPageViews(activePageNumber, 3, contentList);
        activePageNumber = 3;
    }
});
spanBtn.addEventListener("click", function() {
    modal.style.display = "none";
});
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// HELPER FUNCTIONS
function movePageAnimation(last, next, leftover, leftToRight, rightToLeft, pageList) {

    if (leftToRight && !rightToLeft) {
        pageList[last].className = "animated fadeOutLeft";
        setTimeout(function() {
            pageList[last].style.display = "none";
            pageList[next].style.display = "block";
            pageList[next].className = "animated fadeInRight";
        }, 250);
    } else if (!leftToRight && rightToLeft) {
        pageList[last].className = "animated fadeOutRight";
        setTimeout(function() {
            pageList[last].style.display = "none";
            pageList[next].style.display = "block";
            pageList[next].className = "animated fadeInLeft";
        }, 250);
    }

    pageList[leftover].style.display = "none";
    pageList[leftover].className = "";
}

function setPageViews(last, next, pageList) {
    let active = last - 1;
    let nextPage = next - 1;
    pageList[active].className = "";
    pageList[nextPage].className = "";

    if (active == 0 && nextPage == 1) {
        movePageAnimation(0, 1, 2, true, false, pageList);
        return true;
    }
    if (active == 1 && nextPage == 0) {
        movePageAnimation(1, 0, 2, false, true, pageList);
        return true;
    }

    if (active == 1 && nextPage == 2) {
        movePageAnimation(1, 2, 0, true, false, pageList);
        return true;
    }
    if (active == 2 && nextPage == 1) {
        movePageAnimation(2, 1, 0, false, true, pageList);
        return true;
    }

    if (active == 0 && nextPage == 2) {
        movePageAnimation(0, 2, 1, true, false, pageList);
        return true;
    }
    if (active == 2 && nextPage == 0) {
        movePageAnimation(2, 0, 1, false, true, pageList);
        return true;
    }

}

function setNavClasses(pageNumber, pages) {
    let activeClassName = "nav-item nav-item-active";
    let normalClassName = "nav-item";

    for (let i=0; i<pages.length; i++) {
        if (i == pageNumber - 1) {
            pages[i].className = activeClassName;
        } else {
            pages[i].className = normalClassName;
        }
    }
}

function contentBtnHelper(idName) {
    const buttonId = document.getElementById(idName);
    buttonId.addEventListener("click", function() {
        if (isContentOff) {
            aboutContent.className = "";
            contentContent.className = "";
    
            aboutContent.className += "animated fadeOutLeft";
            setTimeout(function() {
                contentContent.style.display = "block";
                aboutContent.style.display = "none";
            }, 500)
            contentContent.className += "animated fadeInRight";
    
            let pagesToSwap = switchActivePage(navItems[0], navItems[1]);
            navItems[0] = pagesToSwap[1];
            navItems[1] = pagesToSwap[0];
    
            isContentOff = false;
        }
    });
}
contentBtnHelper("mobileButton");

function loadImages() {
    for (let i = 0; i < modalBtns.length; i++) {
        modalBtns[i].addEventListener("click", function() {
            displayCorrectPhoto(modalBtns[i], modalImages, modal);
        });
    }
}
loadImages();

function displayCorrectPhoto(modalBtnNumber, modalImageList, modalView) {
    let active = "modal-image modal-active";
    let inactive = "modal-image";

    for (let i = 0; i < modalImageList.length; i++) {
        if (modalImageList[i].dataset.image == modalBtnNumber.dataset.image) {
            modalImageList[i].className = active;
        } else {
            modalImageList[i].className = inactive;
        }
    }

    modalView.style.display = "block";
}

function startUpAnimation() {
    window.onload = function() {
        let header = document.getElementsByClassName("brand-title")[0];
        header.className += " animated fadeInLeft fast";

        aboutContent.className += "animated fadeInUp fast";
    }
}

function onPageLoad() {
    startUpAnimation();
}

// PAGE LOADER
function init() {
    onPageLoad();
}
init();