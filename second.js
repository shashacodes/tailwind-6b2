//FUNCTIONS
const text = document.querySelector('#truncatedText')


function truncatedString(value, length){
    if(value.length > length) {
     return `${value.slice(0, length)} <span style="color: blue; text-decoration: underline;">Read More</span>`
    }

    return value
}

text.innerHTML = truncatedString(text.textContent, 20)
