if(localStorage.getItem('maxWidthforcplus') === null) {
    localStorage.setItem('maxWidthforcplus', 0);
}
if(localStorage.getItem('maxWidthforcss') === null) {
    localStorage.setItem('maxWidthforcss', 0);
}
if(localStorage.getItem('maxWidthfordsa') === null) {
    localStorage.setItem('maxWidthfordsa', 0);
}
if(localStorage.getItem('maxWidthforhtml') === null) {
    localStorage.setItem('maxWidthforhtml', 0);
}
if(localStorage.getItem('maxWidthforjava') === null) {
    localStorage.setItem('maxWidthforjava', 0);
}
if(localStorage.getItem('maxWidthforjs') === null) {
    localStorage.setItem('maxWidthforjs', 0);
}
if(localStorage.getItem('maxWidthforpython') === null) {
    localStorage.setItem('maxWidthforpython', 0);
}
if(localStorage.getItem('maxWidthforwebd') === null) {
    localStorage.setItem('maxWidthforwebd', 0);
}


fetch('profile.html')
  .then(response => response.text())
  .then(() => {
    const hambar = document.querySelector('.hambar');
    const mobileNavBar = document.querySelector('.mobile-nav-bar');
    const myButtons = document.querySelectorAll('.my-buttons');

    const basicDetails = document.querySelector('.basic-details');
    const progress = document.querySelector('.progress');
    const interests = document.querySelector('.interests');
    const settings = document.querySelector('.settings');


    let isShowing = 0;
    hambar.addEventListener('click', () => {
        if(isShowing) {
            mobileNavBar.classList.add('hide');
            isShowing = 0;
        } else {
            mobileNavBar.classList.remove('hide');
            isShowing = 1;
        }
    })

    function refreshPage(target) {
        myButtons.forEach((button) => {
            if(button.classList.contains(target)) {
                button.classList.remove('hide');
            } else {
                button.classList.add('hide');
            }
        })
    }

    basicDetails.addEventListener('click', () => {
        refreshPage('basic-details-part');
    })
    progress.addEventListener('click', () => {
        refreshPage('progress-part');
    })
    interests.addEventListener('click', () => {
        refreshPage('interests-part');
    })
    settings.addEventListener('click', () => {
        refreshPage('settings-part');
    })

    
    /*************Progress Part**************/
    const childLineforcplus = document.querySelector('.cplus .child-line');
    childLineforcplus.style.width = `${localStorage.getItem('maxWidthforcplus')}%`;

    const childLineforcss = document.querySelector('.css .child-line');
    childLineforcss.style.width = `${localStorage.getItem('maxWidthforcss')}%`;
    
    const childLinefordsa = document.querySelector('.dsa .child-line');
    childLinefordsa.style.width = `${localStorage.getItem('maxWidthfordsa')}%`;
    
    const childLineforhtml = document.querySelector('.html .child-line');
    childLineforhtml.style.width = `${localStorage.getItem('maxWidthforhtml')}%`;
    
    const childLineforjava = document.querySelector('.java .child-line');
    childLineforjava.style.width = `${localStorage.getItem('maxWidthforjava')}%`;

    const childLineforjs = document.querySelector('.js .child-line');
    childLineforjs.style.width = `${localStorage.getItem('maxWidthforjs')}%`;
    
    const childLineforpython = document.querySelector('.python .child-line');
    childLineforpython.style.width = `${localStorage.getItem('maxWidthforpython')}%`;
    
    const childLineforwebd = document.querySelector('.webd .child-line');
    childLineforwebd.style.width = `${localStorage.getItem('maxWidthforwebd')}%`;
    

});

/*****************COURSE FILES**********************/

fetch('c++.html')
  .then(response => response.text())
  .then(() => {
    let mainContainer = document.querySelector('.main-container-cplus');
    
    document.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const containerHeight = mainContainer.clientHeight;
        const windowHeight = window.innerHeight;

        let percentWidth = Math.trunc((scrollTop / (containerHeight - windowHeight)) * 100);
        let maxWidth = Math.max(localStorage.getItem('maxWidthforcplus'), percentWidth);
        localStorage.setItem('maxWidthforcplus', maxWidth);
    })
});

fetch('css.html')
  .then(response => response.text())
  .then(() => {
    const mainContainer = document.querySelector('.main-container-css');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const containerHeight = mainContainer.clientHeight;
        const windowHeight = window.innerHeight;

        let percentWidth = Math.trunc((scrollTop / (containerHeight - windowHeight)) * 100);
        let maxWidth = Math.max(localStorage.getItem('maxWidthforcss'), percentWidth);
        localStorage.setItem('maxWidthforcss', maxWidth);
    })
});

fetch('dsa.html')
  .then(response => response.text())
  .then(() => {
    const mainContainer = document.querySelector('.main-container-dsa');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const containerHeight = mainContainer.clientHeight;
        const windowHeight = window.innerHeight;

        let percentWidth = Math.trunc((scrollTop / (containerHeight - windowHeight)) * 100);
        let maxWidth = Math.max(localStorage.getItem('maxWidthfordsa'), percentWidth);
        localStorage.setItem('maxWidthfordsa', maxWidth);
    })
});

fetch('html.html')
  .then(response => response.text())
  .then(() => {
    const mainContainer = document.querySelector('.main-container-html');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const containerHeight = mainContainer.clientHeight;
        const windowHeight = window.innerHeight;

        let percentWidth = Math.trunc((scrollTop / (containerHeight - windowHeight)) * 100);
        let maxWidth = Math.max(localStorage.getItem('maxWidthforhtml'), percentWidth);
        localStorage.setItem('maxWidthforhtml', maxWidth);
    })
});

fetch('java.html')
  .then(response => response.text())
  .then(() => {
    const mainContainer = document.querySelector('.main-container-java');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const containerHeight = mainContainer.clientHeight;
        const windowHeight = window.innerHeight;

        let percentWidth = Math.trunc((scrollTop / (containerHeight - windowHeight)) * 100);
        let maxWidth = Math.max(localStorage.getItem('maxWidthforjava'), percentWidth);
        localStorage.setItem('maxWidthforjava', maxWidth);
    })
});

fetch('js.html')
  .then(response => response.text())
  .then(() => {
    const mainContainer = document.querySelector('.main-container-js');
    
    document.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const containerHeight = mainContainer.clientHeight;
        const windowHeight = window.innerHeight;

        let percentWidth = Math.trunc((scrollTop / (containerHeight - windowHeight)) * 100);
        let maxWidth = Math.max(localStorage.getItem('maxWidthforjs'), percentWidth);
        localStorage.setItem('maxWidthforjs', maxWidth);
    })
});

fetch('python.html')
  .then(response => response.text())
  .then(() => {
    const mainContainer = document.querySelector('.main-container-python');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const containerHeight = mainContainer.clientHeight;
        const windowHeight = window.innerHeight;

        let percentWidth = Math.trunc((scrollTop / (containerHeight - windowHeight)) * 100);
        let maxWidth = Math.max(localStorage.getItem('maxWidthforpython'), percentWidth);
        localStorage.setItem('maxWidthforpython', maxWidth);
    })
});

fetch('web-d.html')
  .then(response => response.text())
  .then(() => {
    const mainContainer = document.querySelector('.main-container-web-d');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const containerHeight = mainContainer.clientHeight;
        const windowHeight = window.innerHeight;

        let percentWidth = Math.trunc((scrollTop / (containerHeight - windowHeight)) * 100);
        let maxWidth = Math.max(localStorage.getItem('maxWidthforwebd'), percentWidth);
        localStorage.setItem('maxWidthforwebd', maxWidth);
    })
});



// localStorage.clear()