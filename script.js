fetch('./bilder.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        var container = document.querySelector(".container")
        var title = document.querySelector(".title")
        var img1 = document.querySelector(".img1")
        var img2 = document.querySelector(".img2")
        var img3 = document.querySelector(".img3")
        var img4 = document.querySelector(".img4")
        var img5 = document.querySelector(".img5")
        var img6 = document.querySelector(".img6")
        var img7 = document.querySelector(".img7")
        var img8 = document.querySelector(".img8")
        var img9 = document.querySelector(".img9")
        var resetButton = document.querySelector(".resetButton")
        var counter = 0
        var imgarray = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
        var winner = imgarray[Math.floor(Math.random() * imgarray.length)]

        console.log(winner)

        img1.src = json[0].images
        img2.src = json[0].images
        img3.src = json[0].images
        img4.src = json[0].images
        img5.src = json[0].images
        img6.src = json[0].images
        img7.src = json[0].images
        img8.src = json[0].images
        img9.src = json[0].images

        img1.addEventListener('click', function(){
            if(img1.src == json[0].images && counter < 3){
                if(img1 == winner){
                  img1.src = json[1].images
                  switch(counter){
                    case 0: 
                    title.innerHTML="U win tesla"
                    break;

                    case 1: 
                    title.innerHTML="U win Esykkel"
                    break;

                    case 2:
                    title.innerHTML="u win trehjuling"
                    break;
                  }
                  counter = 4
                }
                else {
                  img1.src = json[2].images
                  counter++
                  switch(counter){
                    case 1: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 2: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 3:
                    title.innerHTML="u Lose"
                    break;
                }
              }
            } 
        })
        img2.addEventListener('click', function(){
            if(img2.src == json[0].images && counter < 3){
                if(img2 == winner){
                  img2.src = json[1].images
                  switch(counter){
                    case 0: 
                    title.innerHTML="U win tesla"
                    break;

                    case 1: 
                    title.innerHTML="U win Esykkel"
                    break;

                    case 2:
                    title.innerHTML="u win trehjuling"
                    break;
                  }
                  counter = 4
                }
                else {
                  img2.src = json[2].images
                  counter++
                  switch(counter){
                    case 1: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 2: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 3:
                    title.innerHTML="u Lose"
                    break;
                }
                }
              }
        })
        img3.addEventListener('click', function(){
            if(img3.src == json[0].images && counter < 3){
                if(img3 == winner){
                  img3.src = json[1].images
                  switch(counter){
                    case 0: 
                    title.innerHTML="U win tesla"
                    break;

                    case 1: 
                    title.innerHTML="U win Esykkel"
                    break;

                    case 2:
                    title.innerHTML="u win trehjuling"
                    break;
                  }
                  counter = 4
                }
                else {
                  img3.src = json[2].images
                  counter++
                  switch(counter){
                    case 1: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 2: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 3:
                    title.innerHTML="u Lose"
                    break;
                }
                }
              }
        })
        img4.addEventListener('click', function(){
            if(img4.src == json[0].images && counter < 3){
                if(img4 == winner){
                  img4.src = json[1].images
                  switch(counter){
                    case 0: 
                    title.innerHTML="U win tesla"
                    break;

                    case 1: 
                    title.innerHTML="U win Esykkel"
                    break;

                    case 2:
                    title.innerHTML="u win trehjuling"
                    break;
                  }
                  counter = 4

                }
                else {
                  img4.src = json[2].images
                  counter++
                  switch(counter){
                    case 1: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 2: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 3:
                    title.innerHTML="u Lose"
                    break;
                }
                }
              }
        })
        img5.addEventListener('click', function(){
            if(img5.src == json[0].images && counter < 3){
                if(img5 == winner){
                  img5.src = json[1].images
                  switch(counter){
                    case 0: 
                    title.innerHTML="U win tesla"
                    break;

                    case 1: 
                    title.innerHTML="U win Esykkel"
                    break;

                    case 2:
                    title.innerHTML="u win trehjuling"
                    break;
                  }
                  counter = 4

                }
                else {
                  img5.src = json[2].images
                  counter++
                  switch(counter){
                    case 1: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 2: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 3:
                    title.innerHTML="u Lose"
                    break;
                }
                }
              }
        })
        img6.addEventListener('click', function(){
            if(img6.src == json[0].images && counter < 3){
                if(img6 == winner){
                  img6.src = json[1].images
                  switch(counter){
                    case 0: 
                    title.innerHTML="U win tesla"
                    break;

                    case 1: 
                    title.innerHTML="U win Esykkel"
                    break;

                    case 2:
                    title.innerHTML="u win trehjuling"
                    break;
                  }
                  counter = 4

                }
                else {
                  img6.src = json[2].images
                  counter++
                  switch(counter){
                    case 1: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 2: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 3:
                    title.innerHTML="u Lose"
                    break;
                }
                }
              }
        })
        img7.addEventListener('click', function(){
            if(img7.src == json[0].images && counter < 3){
                if(img7 == winner){
                  img7.src = json[1].images
                  switch(counter){
                    case 0: 
                    title.innerHTML="U win tesla"
                    break;

                    case 1: 
                    title.innerHTML="U win Esykkel"
                    break;

                    case 2:
                    title.innerHTML="u win trehjuling"
                    break;
                  }
                  counter = 4

                }
                else {
                  img7.src = json[2].images
                  counter++
                  switch(counter){
                    case 1: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 2: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 3:
                    title.innerHTML="u Lose"
                    break;
                }
                }
              }
        })
        img8.addEventListener('click', function(){
            if(img8.src == json[0].images && counter < 3){
                if(img8 == winner){
                  img8.src = json[1].images
                  switch(counter){
                    case 0: 
                    title.innerHTML="U win tesla"
                    break;

                    case 1: 
                    title.innerHTML="U win Esykkel"
                    break;

                    case 2:
                    title.innerHTML="u win trehjuling"
                    break;
                  }
                  counter = 4

                }
                else {
                  img8.src = json[2].images
                  counter++
                  switch(counter){
                    case 1: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 2: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 3:
                    title.innerHTML="u Lose"
                    break;
                }
                }
              }
        })
        img9.addEventListener('click', function(){
            if(img9.src == json[0].images && counter < 3){
                if(img9 == winner){
                  img9.src = json[1].images
                  switch(counter){
                    case 0: 
                    title.innerHTML="U win tesla"
                    break;

                    case 1: 
                    title.innerHTML="U win Esykkel"
                    break;

                    case 2:
                    title.innerHTML="u win trehjuling"
                    break;
                  }
                  counter = 4
                }
                else {
                  img9.src = json[2].images
                  counter++
                  switch(counter){
                    case 1: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 2: 
                    title.innerHTML="du har bare " + (3- counter) + " sjangser igjen"
                    break;

                    case 3:
                    title.innerHTML="u Lose"
                    break;
                }
                }
              }
        })



        resetButton.addEventListener('click', function(){
            window.location.reload()
        })
    }
);