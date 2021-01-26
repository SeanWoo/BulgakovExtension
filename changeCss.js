function changeCss(){
    let styles = document.head.querySelectorAll("style")
    for(let i = 0; i < styles.length; i++)
    {
        
        let style = styles[i]
        style.innerText = style.innerText.replace("background-color: rgba(255,255,255,0.85)", "background-color: #232323")
        style.innerText = style.innerText.replace("background-color: #f6f6f6", "background-color: #494949")
        style.innerText = style.innerText.replace("background-color: #fff", "background-color: #333")
        style.innerText = style.innerText.replace("background-color: #f9f9f9", "background-color: #363636")
        style.innerText = style.innerText.replace("background-color: #eaeaea", "background-color: #454545")
        style.innerText = style.innerText.replace("background-color: #faebca", "background-color: #14455a")
        style.innerText = style.innerText.replace("background-color: #f5e1b7", "background-color: #10394a")
        style.innerText = style.innerText.replace("background-color: #eff0f1", "background-color: #333")
        style.innerText = style.innerText.replace("background-color: #fafafa", "background-color: #363636")
        style.innerText = style.innerText.replace("background: #fff", "background: #333")

        style.innerText = style.innerText.replace("border-bottom: 55px solid #f6f6f6", "border-bottom: 55px solid #353535")
        
        style.innerText = style.innerText.replace("color: rgba(0,0,0,0.4)", "color: rgba(255,255,255,0.4)")
        style.innerText = style.innerText.replace("color: #434343", "color: #AAA")
        style.innerText = style.innerText.replace("color: #474747", "color: #BBB")
        
    }
}