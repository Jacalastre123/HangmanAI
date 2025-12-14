   const count = document.getElementById("count")
   const botAsk = document.getElementById("botAsk")
   const wordCont = document.getElementById("wordCont")
   const victor = document.getElementById("victor")
   const triesHome = document.getElementById("triesHome")
   let valula = Math.floor(Math.random() * botStore.length)
   let tries = 0
   
        function submit() {
            Object.entries(listo).forEach(([key, value]) => {
            for (let ii = 0; ii < value; ii++) {
                botStore.push(key)
            }
             })
            for (let i = 0; i < count.value; i++) {
            const hangLetter = document.createElement("div")
           
         
            hangLetter.maxLength = "1"
            hangLetter.classList = "square"
            hangLetter.maxLength = "1"
            hangLetter.onclick = function() {
                hangLetter.innerHTML = botStore[valula]
                let squareMount = document.querySelectorAll(".square")
                let filled = Array.from(squareMount).every(square => square.innerHTML !== "")
              if (filled) {
                    victor.showModal()
                    tries = 0
                    triesHome.innerHTML = "Tries: " + tries
                    document.querySelectorAll(".square").forEach((square) => {square.remove()}
                )
                }
            }
             wordCont.appendChild(hangLetter)
        }
        
            
       


       

valula = Math.floor(Math.random() * botStore.length)
      done.forEach((item) => {
      if (item == botStore[valula]) {
         valula = Math.floor(Math.random() * botStore.length)
      }
   })
botAsk.innerHTML = botStore[valula]



        }


function incorrect() {
tries++
triesHome.innerHTML = "Tries: " + tries
 botStore = []
Object.entries(listo).forEach(([key, value]) => {
        if (value >= 2) {
            value--
        }
            for (let i2 = 0; i2 < value; i2++) {
               
                botStore.push(key)
            }
           
        })

            valula = Math.floor(Math.random() * botStore.length)
botAsk.innerHTML = botStore[valula]

}

function correct() {
    tries++
    triesHome.innerHTML = "Tries: " + tries
           botStore = []
    Object.entries(listo).forEach(([key, value]) => {
        if (key == botStore[valula]) {
            value++
            done.push(key)
        }
            for (let i3 = 0; i3 < value; i3++) {
         
                botStore.push(key)
            }
           
        })
   
        valula = Math.floor(Math.random() * botStore.length)
   done.forEach((item) => {
      if (item == botStore[valula]) {
         valula = Math.floor(Math.random() * botStore.length)
      }
   })
botAsk.innerHTML = botStore[valula]


}

