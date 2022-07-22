var numCase = 0;
var dNbr = -1;
document.addEventListener("DOMContentLoaded", function () {
     // Afficher le tableau analogies dans la console
     console.log(tortuga);
     // Afficher "Si j'étais" suivi de chaque analogie
     tortuga.forEach(function afficheNote(analogieData) {
          // Affichage de chaque case du tableau, appelée tortuga
          console.log('analogieData: ' + analogieData);
          // Afficher un bloc HTML pour chaque analogie
          document.querySelector('.liste-analogies').innerHTML = document.querySelector('.liste-analogies').innerHTML + "<section class=\"division d" + numCase + "\"><h3>Si j’étais " + analogieData.analogie + ", je serais " + analogieData.valeurAnalogie + ".</h3><h4>" + analogieData.explainAnalogie + " </h4><img " + analogieData.image + " class='imageAnalogie' alt='image_de_l_analogie'><h5>" + analogieData.creditImage + "</h5></section>";
          numCase += 1;
          console.log(numCase);
     })

     document.querySelector('.link').addEventListener('click', function (clique) {
          //On cherche ici si mentions à déjà la classe mentionsOpen afin de savoir l'action à faire
          if (document.querySelector('.mentions').classList.contains('mentionsOpen')) {
               document.querySelector('.mentions').classList.remove('mentionsOpen')
          } else {
               document.querySelector('.mentions').classList.add('mentionsOpen')
          }
          console.log('click');

     });
     document.querySelector('.linkHome').addEventListener('click', function (clique) {
          //On cherche à revenir sur la page d'accueil quelque soit notre position sur le site
          if (dNbr == tortuga.length) {
               document.querySelector('.formulaire').setAttribute('style', 'display:none');
               document.querySelector('.Rarrow').setAttribute('style', 'display:block');
          } else {
               document.querySelector('.d' + dNbr).setAttribute('style', 'opacity:0');
          }
          dNbr = -1;
          document.querySelector('.presentation').setAttribute('style', 'display:block');
          document.querySelector('.Larrow').setAttribute('style', 'display:none');
     });
     document.querySelector('.linkForm').addEventListener('click', function (clique) {
          //On cherche à revenir se rendre sur la page formualire quelque soit notre position sur le site
          if (dNbr == -1) {
               document.querySelector('.presentation').setAttribute('style', 'display:none');
               document.querySelector('.Larrow').setAttribute('style', 'display:block');
          } else {
               console.log(dNbr + 'toto');
               document.querySelector('.d' + dNbr).setAttribute('style', 'opacity:0');
          }
          dNbr = tortuga.length;
          document.querySelector('.formulaire').setAttribute('style', 'display:flex');
          document.querySelector('.Rarrow').setAttribute('style', 'display:none');

     });

     document.querySelector('.Rarrow').addEventListener('click', function (event) {
          if(dNbr == -1){
          document.querySelector('.presentation').setAttribute('style', 'display:none');
          //apparition de la flèche de gauche à partir de la première analogie
          document.querySelector('.Larrow').setAttribute('style', 'display:block');
          }

          //disparition de l'analogie entre 0 et 6
          if (dNbr >= 0 && dNbr < tortuga.length) {
               document.querySelector('.d' + dNbr).setAttribute('style', 'opacity:0');
          }
          if (dNbr == tortuga.length-1) {
               document.querySelector('.Rarrow').setAttribute('style', 'display:none');
               document.querySelector('.formulaire').setAttribute('style', 'display:flex');
          }
          //Incrémentation tant que dNbr < tortuga.length
          if (dNbr < tortuga.length) {
               dNbr++;
          }
          //Exécution des étapes en dessous tortuga.length
          if (dNbr < tortuga.length) {
               document.querySelector('.d' + dNbr).animate({ opacity: 1 }, { duration: 500 })
               setTimeout(function () {
                    document.querySelector('.d' + dNbr).style.opacity = 1;
                    //dNbr dans setTimeout pour ne pas prendre le paramètre de la div incrémenter
               }, 300);
               console.log(dNbr)
          }
     });

     document.querySelector('.Larrow').addEventListener('click', function (event) {
          //==1 car on prépare la prochaine en appuyant sur la flèche de droite
          if (dNbr == 0) {
               document.querySelector('.presentation').setAttribute('style', 'display:block');
               document.querySelector('.Larrow').setAttribute('style', 'display:none');
          }
          console.log(dNbr)

          //affichage de la flèche de droite après l'étape n°7
          if (dNbr >= 0 && dNbr < tortuga.length) {
               document.querySelector('.d' + dNbr).setAttribute('style', 'opacity:0');
          }
          if (dNbr == tortuga.length) {
               document.querySelector('.formulaire').setAttribute('style', 'display:none');
               document.querySelector('.Rarrow').setAttribute('style', 'display:block');
          }
          if (dNbr >=0) {
               dNbr--;
          }
          //Exécution des étapes en dessous de 8 étapes
          if (dNbr > -1) {

               document.querySelector('.d' + dNbr ).animate({ opacity: 1 }, { duration: 500 })
               setTimeout(function () {
                    document.querySelector('.d' + dNbr).style.opacity = 1;
                    // Incrémentation pour chaque div division.
                    //dNbr dans setTimeout pour ne pas prendre le paramètre de la div incrémenter
               }, 300);
          }
     });
     //document.querySelector("#analogie").value (TP6Q2)
     document.querySelector('#analogie').addEventListener('keyup', function (e) {
          console.log("champs modifié")
          document.querySelector("#analogieSuggeree").innerHTML = document.querySelector("#analogie").value;
     });
     document.querySelector('#valeurAnalogie').addEventListener('keyup', function (e) {
          console.log("champs modifié")
          document.querySelector("#valeurAnalogieSuggeree").innerHTML = document.querySelector("#valeurAnalogie").value;
     });
     document.querySelector('#explainAnalogie').addEventListener('keyup', function (e) {
          console.log("champs modifié")
          document.querySelector("#explainAnalogieSuggeree").innerHTML = document.querySelector("#explainAnalogie").value;
     });
     document.querySelector('#send').addEventListener('click', function (event) {
          const formAnalogie = document.getElementById('analogie').value;
          const formVAnalogie = document.getElementById('valeurAnalogie').value;
          const formEAnalogie = document.getElementById('explainAnalogie').value;
          const formIAnalogie = document.getElementById('imageAnalogie').value;
          const url = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=philippe.gambette@u-pem.fr&message=Si%20j%27%C3%A9tais%20' + formAnalogie + '%20je%20serais%20' + formVAnalogie + '%20parce%20que%20' + formEAnalogie + '.';
          console.log(url);
          fetch(url).then(function (response) {
               response.json().then(function (data) {
                    console.log("Réponse reçue : ")
                    console.log(data);
                    document.querySelector('form').setAttribute('style', 'display:none');
                    document.querySelector('.imageAnalogieSuggeree').setAttribute('src', formIAnalogie);
                    document.querySelector('.newAnalogie').innerHTML = document.querySelector('.newAnalogie').innerHTML + '<a href="' + formIAnalogie + '" class="creditImageAnalogieSuggeree" target="_blank">crédit Photographique</a>'
                    alert(data.message)
               })
          })
     });
});
//https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=philippe.gambette@u-pem.fr&message=Je%20n%E2%80%99ai%20aucune%20suggestion%20d%E2%80%99analogie%20mais%20je%20vous%20f%C3%A9licite%20pour%20votre%20site%20web%20d%E2%80%99autoportrait%20que%20je%20trouve%20tr%C3%A8s%20r%C3%A9ussi%20!//
