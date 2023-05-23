const setSurname = () => {
    if (document.getElementsByTagName('input')[0].value !== '') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Yuriy ' + document.getElementsByTagName('input')[0].value;  
    } else {
        document.getElementsByTagName('h1')[0].innerHTML = 'Yuriy Kurunin';  
    } 
}

const setWallColor = () => {
    function getRandomInt() {
        return Math.floor(Math.random() * 8);
    };
    let colors = ['#FFC970', 'pink', '#AC66F8', '#59E5D9', '#C4F866', 'white', '#74C4B3', '#FFD006'];
    document.body.style.backgroundColor = colors[getRandomInt()];
}

const createResume = () => {
    const block = document.createElement('div');
    const name = document.createElement('h4');
    name.textContent = 'Имя: ' + document.getElementsByTagName('input')[1].value;
    const surname = document.createElement('h4');
    surname.textContent = 'Фамилия: ' + document.getElementsByTagName('input')[2].value;
    const age = document.createElement('h4');
    age.textContent = 'Возраст: ' + document.getElementsByTagName('input')[3].value;
    const pol = document.createElement('h4');
    if (document.getElementById('male').checked) {
        pol.textContent = 'Пол: ' + document.getElementById('male').value;
    };
    if (document.getElementById('female').checked) {
        pol.textContent = 'Пол: ' + document.getElementById('female').value;
    };
    if (document.getElementById('male').checked && document.getElementById('female').checked) {
        pol.textContent = 'Пол: выбери конкретный пол';
    };
    const bio = document.createElement('h4');
    bio.textContent = 'Обо мне: ' + document.getElementsByTagName('textarea')[0].value;
    document.getElementsByClassName('resume')[0].append(block);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(name);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(surname);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(age);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(pol);
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].append(bio);
}

const deleteResume = () => {
    document.getElementsByClassName('resume')[0].getElementsByTagName('div')[0].remove();
}