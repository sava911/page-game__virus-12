    // 1. каждую секунду перемещаем img в другой рандомный div
    // 2. реагировать на клик по img
    // 3. инкрементировать счётчик

    var okImage = document.createElement('img');
    okImage.src = 'img/ok.jpg';

    // перемещаем img в 3 div
    var image = document.createElement('img');
    image.src = 'img/virus.png';
    var audio = document.querySelector("audio");
    var spanOK = document.querySelector("#ok");
    var spanKO = document.querySelector("#ko");
    var divs = document.querySelectorAll("div > div");
    var index;
    var clicked = true; // flag

    setInterval(function () {
        if (clicked === false) {
            spanKO.innerText++;
        } else {
            clicked = false;
        }
        // генерируем новый индекс
        index = randomInteger(0,8);
        // вставляем основную картинку в дивку по идексу
        divs[index].append(image);       
        // удаляем из разметки картинк-OK, потому что начался новый круг
        okImage.remove();
    }, 1000);

    // addEventListener
    image.onclick = function () {
        clicked = true;
        // ok увеличиваем счётчик
        spanOK.innerText++;
        // прематываем плеер на начало и проигрываем трек
        audio.currentTime = 0;
        audio.play();
        // удаляет кликнутую картинку из разметки
        image.remove();     
        // в эту же дивку вставляется картинка-ok
        divs[index].append(okImage);
    }

    function randomInteger(min, max) {       
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
