document.querySelectorAll(".image-container img").forEach(i => {
    i.onclick = () => {
        document.querySelector('.popup-image').style.background = (document.getElementById("myColor").value)
        document.querySelector('.popup-image').style.fontFamily = (document.getElementById("font").value)
        document.querySelector('.popup-image').style.display = 'block'
        document.querySelector('.popup-image img').src = i.getAttribute('src')
        document.querySelector('.popup-image h2').innerHTML = i.getAttribute('caption')
        document.querySelector('.popup-image p').innerHTML = i.getAttribute('desc')
    }
    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none'
    }
})