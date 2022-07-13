(function () {
    
    // Création dynamique d'une galerie d'images.
    
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__fermeture = document.querySelector('.carrousel__fermeture');
    let elmCarrousel__radio = document.querySelector('.carrousel__radio');
    //console.log(elmGalerieImg[0].getAttribute('src'))
    let index = 0;
    let ancien_index = -1;
    let compteur = 0;

    for (const img of elmGalerieImg) {
        img.dataset.index = compteur++;
        ajouter_elmImg(img);
        ajouter_elmRadio();
        // écouteur sur la galerie pour ouvrir le carrousel
        img.addEventListener('mousedown', function () {
            elmCarrousel.classList.add('carrousel_ouvrir');
            index = this.dataset.index;
            affiche_carrousel_img();
        })
    }

    /**
     * Écouteur pour fermer le carrousel
     * 
     */
     elmCarrousel__fermeture.addEventListener('mousedown', function () {
        elmCarrousel.classList.remove('carrousel_ouvrir');
    });

    /**
     * Ajouter un img créé dynamiquement dans le conteneur elmCarrousel__figure
     * 
     * @param {ChildNode} img   Une image de la galerie
     */
    function ajouter_elmImg(img) {
        let elmImg = document.createElement('img');
        elmImg.classList.add('carrousel_figure__img')
        elmImg.setAttribute('src', img.getAttribute('src'));
        elmCarrousel__figure.appendChild(elmImg);
        elmImg.dataset.index = index;
    }

    /**
     * Ajouter un bouton radio créé dynamiquement dans le conteneur elmCarrousel__radio. Ce radio bouton permettra de
     * naviguer dans le carrousel d'une image à l'autre
     * 
     * @param aucun
     * 
     * */
    function ajouter_elmRadio(){
        let elmRadio = document.createElement('input');
        elmRadio.setAttribute('type', 'radio');
        elmRadio.setAttribute('name','radImg')
        elmRadio.dataset.index = index;
        index = index + 1;
        elmCarrousel__radio.appendChild(elmRadio);
        elmRadio.addEventListener('mousedown',function() {
            index = this.dataset.index;
            affiche_carrousel_img();
        })
    }
    

    function affiche_carrousel_img() {
        if (ancien_index != -1) {
            elmCarrousel__figure.children[ancien_index].classList.remove('carrousel_figure__img--activer');
        }
        elmCarrousel__figure.children[index].classList.add('carrousel_figure__img--activer');
        ancien_index = index;
    }
    
    
    
    })();