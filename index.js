const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteinputElement = document.getElementById('quoteInput')

quoteinputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteinputElement.value.split('')
    arrayQuote.forEach((characterSpan,index) =>{
        const character = arrayValue[index]
        if (character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }
        else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')

        }
    })
})
function getRandomQuote(){
return fetch(RANDOM_QUOTE_API_URL)
.then(response => response.json())
.then(data => data.content)
}

async function renderNextQuote(){
    const quote = await getRandomQuote()
    quoteDisplayElement.innerText = quote
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText =character 
        characterSpan.classList.add('correct')
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteinputElement.value = null
}
renderNextQuote()