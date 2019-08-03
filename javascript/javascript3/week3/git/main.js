const fathionsons = fetch('https://github.com/fathionsons/hyf-homework')
const bennaUrl2 =  fetch('https://api.github.com/search/repositories?q=user:benna100')
const ul = document.querySelector('ul');
Promise.all([bennaUrl2, lillaUrl2])
.then(responses => {
    let responsesToJson = responses.map(response => response.json());
    return Promise.all(responsesToJson)
})
.then(json =>  {
    let onlyName;
    for (let i = 0; i < json.length; i++) {
        console.log(json[i])
        const userName = json[i].items[1].owner.login;
        createLiForUserName(userName);
        console.log(userName)
        for (let j = 0; j < json[i].items.length; j++) {
            const repos = json[i].items[j];
            const nameOfRepo = json[i].items[j].full_name;
            const repoUrl = 'https://github.com/' + json[i].items[j].full_name;
            const onlyRepoName = getRepoName(nameOfRepo);
            createLi(onlyRepoName, repoUrl);
            
           

            

        }

    }
})
function createLiForUserName(userName) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = userName;
}

function createLi(nameOfRepo, repoUrl) {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML =`${nameOfRepo} -  url: ${repoUrl}`;
}

function getRepoName(full_name) {
    let arrOfSeperateStrings = full_name.split('/');
    arrOfSeperateStrings.shift();
    
    return arrOfSeperateStrings.toString();
}
const myArray = [1, 2, 3, 4, 5, 6, 7];
myArray.shift();
console.log(myArray)
