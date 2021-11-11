let submitBtn = document.querySelector('.form__submit');
let form = document.querySelector('.form');
let select = document.querySelector('.form__select');
let inputOne = document.querySelector('.form__input-one');
let inputTwo = document.querySelector('.form__input-two');
let resultBlock = document.querySelector('.result');
let results = {};

getData = () => {
    fetch('./data.json')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log(response.status);
                    return;
                }
                return response.json();
            }
        )
        .then(function (data) {
            alert(JSON.stringify(data));
        })
        .catch(function (err) {
            console.log(err);
        });
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    results = {
        number: select.value,
        name: inputOne.value,
        age: inputTwo.value
    }
    let jsonString = JSON.stringify(results);
    resultBlock.innerHTML = jsonString;
    getData()
})