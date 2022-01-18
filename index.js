function load_countries(){
    let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function(){
    let response = JSON.parse(xhr.response);
    response.forEach(res => {
        console.log(res)
        let box = document.createElement('div');
        box.classList.add('card', 'm-1');
        let headerBox = document.createElement('div');
        headerBox.classList.add('card-header');
        headerBox.innerHTML = `<h5>${res.name.common}</h5>`
        box.appendChild(headerBox);

        let body = document.createElement('div');
        body.classList.add('card-body');
        body.classList.add('row');
        let flag = document.createElement('div');
        flag.classList.add('col-6')
        let flag_img = document.createElement('img');
        flag_img.src = res.flags.png;
        flag_img.style.maxWidth = '90%';
        flag.appendChild(flag_img)

        let info = document.createElement('div');
        info.classList.add('col-6')
        info.innerHTML = `
        <p>Located in : ${res.continents !== undefined ? res.continents : 'unknown'}</p>
        <p>Capital City : ${res.capital !== undefined ? res.capital : 'unknown'}</p>
        <p>Population : ${res.population} </p>
        <p>Time Zone : ${res.timezones} </p>
        <p>Is UN member ? ${res.unMember} </p>
        `
        body.appendChild(flag);
        body.appendChild(info);
        box.appendChild(body);
        
        document.getElementById('countrys').appendChild(box);
    })
}
xhr.send();
}