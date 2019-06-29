console.log("file loaded");
const title = document.querySelector(".h1");
setTimeout (() => {
    title.innerHTML = "Hi after 1.5 seconds";

} , 1500);

function delayTime(stringToLog, delay){
    setTimeout (() => {
        title.innerHTML = stringToLog;
    }, delay);
}
delayTime("Hi one and half second later",1500);
const delayButton = document.querySelector(".delaybutton");
delayButton.addEventListener("click", () => {
    title.style.color = "red" ;
    delayTime("1.5 seconds after clicking", 1500);
});
 function showEarth(earthLogFunction){
     const Earth = {
         earth: () =>console.log("Hi Earth"),
         onsturn: () =>console.log("Hi onsturn")
     };
     return EARTH [earthLogFunction];
 }
 showEarth("OnsFathi");
 const locaButton = document.querySelector(".Onsbutton");
 locaButton.addEventListener("click", () =>{
     navigator.geolocation.getCurrentPosition(function(positionLoca){
         console.log(positionLoca.coords.latitude, positionLoca.coords.longitude);
         const currentLoca = {
             longitude: positionLoca.coords.longitude,
             latitude: positionLoca.coords.latitude
         };
         renderLocation(
             currentLoca.latitude,
             currentLoca.longitude

          );
         } );
        });
    
    function renderLocation(lat, lng) {
        const map = document.querySelector("#locationmap");
        const map1 = new google.maps.Map(map,{
            center: {lat, lng},
            zoom: 12
        });
        console.log(map1);
    }
    function runDelayAfter(delay, callback) {
        setTimeout(callback, delay);
    }
    runDelayAfter(12000,() => {
        title.innerHTML = "Hi callback after 12seconds";
        title.style.color =" blue";
    });
    runDelayAfter(40000, () =>{
        title.innerHTML ="Hi callback after 40seconds";
        title.style.color = "black";
    });
    let clickCount = 0;
    function doubleClick() {
        title.innerHTML ="double click";
        title.style.color ="grey";
    }
    document.body.addEventListener("click", function() {
        clickCount++;
        let singleClickTimer;
        if (clickCount=== 1){
            singleClickTimer = setTimeout(() =>{
                clickCount = 0;
            } , 300);
        } else if (clickCount === 3) {
            clearTimeout(singleClickTimer);
            clickCount = 0;
            doubleClick();
        }
    });
    function funnyJokeCreator(funnyJoke = false, onsFunnyJoke, onsBadJoke){
        return funnyJoke ? onsFunnyJoke : onsBadJoke;
    }
    function onsFunnyJoke (){
        return "I am lying every day , because Iam not a liar";

    }
    function onsBadJoke() {
        return `What is a hygge?
                   nothing hahha`;

    }
    console.log(funnyJokeCreator(false, onsFunnyJoke(),onsBadJoke() ) );
