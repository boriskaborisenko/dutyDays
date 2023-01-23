const range = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = [
    {
        url:"https://oblenergo.cv.ua/shutdowns/GPV.png?ver="+range(1000000000000,9999999999999),
        element:"kstrg"
    },
    {
        url:"https://www.toe.com.ua/index.php/hrafik-pohodynnykh-vymknen-spozhyvachiv",
        element:"zl"
    }
]

data.map(x=>{
    document.getElementById(x.element).src = x.url
})

