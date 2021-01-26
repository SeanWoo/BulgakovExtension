let oldURL = "";
let currentURL = window.location.href;

function checkURLchange(currentURL){
    if(currentURL != oldURL){
        oldURL = currentURL;
        changeCss()
    }

    oldURL = window.location.href;
    setTimeout(() => {
        checkURLchange(window.location.href);
    }, 250);
}

function main()
{
    let counter = 0;

    checkURLchange();
    changeCss()
    
    let background = document.querySelector(".page-content")
    background.classList.add("background-style")

    let navbar = document.querySelector(".hub-page-top-bar");
    let line = document.createElement("div")
    line.style.cssText = `
        height: 5px;
        background: linear-gradient(to left, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    `
    navbar.appendChild(line)
    setInterval((e) => 
    {
        line.style.backgroundPositionX = `${counter += 10}px`

        //navbar.style.cssText = `border-bottom: 5px solid linear-gradient(crimson, gold, yellowgreen, teal, crimson);`;
    }, 10)
}

function callback(mutationsList, observer)
{
    for (let mutation of mutationsList) 
    {
        if (mutation.type === 'attributes') 
        {
            if(mutation.attributeName === "isloaded")
            {
                observer.disconnect();
                main()
            }
        }
    }
}

window.onload = () =>
{
    const config = 
    {
        attributes: true,
        childList: false,
        subtree: false
    };
    let element = document.querySelector(".hub-page-top-bar")

    const observer = new MutationObserver(callback)
    observer.observe(element, config)
}