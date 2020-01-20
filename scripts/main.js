

// Compter le nombre de caractères pour le nom
// Déclarer les variables
var Nom = document.getElementById('nom');
var nbcaractere = document.getElementById('nbcaractere');

Nom.addEventListener("keyup",function(){
    var characters = Nom.value.split(''); //fonction qui va compter le nombre de caractères
    nbcaractere.innerText = characters.length;
});

// Compter le nombre de caractères pour le mot de passe
// Déclarer les variables
var Mdp = document.getElementById('mdp');
var nbcaractere1 = document.getElementById('nbcaractere1');

Mdp.addEventListener("keyup",function(){
    var characters = Mdp.value.split(''); //fonction qui va compter le nombre de caractères
    nbcaractere1.innerText = characters.length;
});
    



// Confirmation du mot de passe 
function myfun() {
    var a = document.getElementById('mdp').value;
    var b = document.getElementById('mdpp').value;


    // si aucun caractères a été insérés mettre un message d'erreur
    if(a==""){
        document.getElementById('messages').innerHTML="** Attention, vous devez entrer un mot de passe";
        return false; 
    }
    // message erreur si mdp inférieur à 4 caractères
    if (a.length < 4) {
        document.getElementById('messages').innerHTML="** Votre mot de passe doit comporter 4 caractères minimum";
        return false;
    }
    // message erreur si mdp ne comporte pas 8 caractères
    if (a.length < 8) {
        document.getElementById('messages').innerHTML="** Votre mot de passe doit comporter obligatoirement 8 caractères";
        return false;
    }
     // message erreur si mdp de confirmationne se correspondent pas
    if (a!=b) {
        document.getElementById('messages').innerHTML="Vos mots de passe ne correspondent pas !";
        return false;
    }
    // pas de message si le mot de passe comporte bien 8 caractères
    if (a.length = 8) {
        document.getElementById('messages').innerHTML="";
        return false;
    }

}

/// message d'erreur ou non pour savoir si les conditions ont été acceptées
function is_checked() {
    var accept = document.getElementById('accept').checked; //savoir si ça a été coché

    //si ça n'a pas été coché alors il y un message d'erreur
    if(accept==false) {
        document.getElementById('messagess').innerHTML="** Vous devez accepter les conditions pour valider";
        return false;
    }

    //si ça a été coché alors il y a pas un message d'erreur
    else {
        document.getElementById('messagess').innerHTML="";
        return true;
    }
}




// Slide transition
$owlCarousel.on("changed.owl.carousel", e => {
    $(".owl-slide-animated").removeClass("is-transitioned");
    const $currentOwlItem = $(".owl-item").eq(e.item.index);
    $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
  });

  // faire naviguer le slide S
  const $owlCarousel = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
      '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
    ]
  });