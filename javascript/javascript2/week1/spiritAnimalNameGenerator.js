
let animals = ['sommerfugl', 'tiger', 'løv', 'kat', 'hund', 'mus',
     'fugl', 'fisk', 'mariehøne', 'elefant'];

       

function over() {
              animal();
            }

function out() {
               animal();
            }


function required()
{  
let empt = document.forms["form1"]["text1"].value;
if (empt == "")
    {
    alert("Please input a Value");
    return false;
    }
else 
    {
    
    animal();
    return true;
    }
}
function animal() 
    {
    let name= document.getElementById("name").value;
    let animalName = animals[Math.floor(Math.random()*animals.length)] ;
    document.getElementById("demo").innerHTML = "Hej " + name+ ", dit dyr er " + animalName;    
    }


function change( el ) 
{ 
 if (required()) 
    {
    animal();
    if ( el.value === "Confirm" )
        el.value = "Do it again";
    else
        el.value = "Confirm";
    }  
}


function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';

  if (document.getElementById('noCheck').checked) {
        document.getElementById('ifNo').style.visibility = 'visible';
      required();
          }
    else document.getElementById('ifNo').style.visibility = 'hidden';

}

