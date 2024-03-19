console.log('hi')

//fetching from an api
// var data = fetch('https://randomuser.me/api')
//     .then((response) => response.json())
//     .then((data) => console.log(data))//gives us the name
    //.then((title) => title.title)

// var firstName = fetch('https://randomuser.me/api')
//     .then((response) => response.json())
//     .then((data) => console.log(data.results[0]))//gives us the name
//     .then((firstName) => firstName.first)

// var lastName = fetch('https://randomuser.me/api')
//     .then((response) => response.json())
//     .then((data) => data.results[0].last)//gives us the name
//     .then((lastName) => lastName.last)


// console.log(`title is ${title}`)

function displayUser(gender) {
    if (gender === 'female') {
      document.body.style.backgroundColor = 'rebeccapurple';
    } else {
      document.body.style.backgroundColor = 'steelblue';
    }
}

function onClick() {
    console.log('clicked');
    showSpinner();
    fetch('https://randomuser.me/api')
        .then((response) => response.json())
        .then((data) => {
            hideSpinner();
            console.log('data is')
            console.log(data.results[0]);
            // displayUser(data.results[0]);
            console.log(data)
        })
    
    var userPromise = fetch('https://randomuser.me/api')
                        .then((response) => response.json());

    userPromise.then((data) => {
        var gender = data.results[0].gender;
        displayUser(gender); // Move displayUser inside this block
        console.log(`gender is ${gender}`)
    });
    var gender = userPromise.then((data) => data.results[0].gender);
    console.log(`gender is ${gender}`)
    var gender1 = userPromise.then((data) => console.log(data.results[0].gender));
    displayUser(gender);

    console.log(userPromise)
    var userNamePromise = userPromise.then((data) => data.results[0].name);

    userNamePromise.then((userName) => {
        const title = userName.title;
        const first = userName.first;
        const last = userName.last;

        const fullName = `${title} ${first} ${last}`;
        const nameElement = document.querySelector('#name');
        nameElement.innerHTML = `<span class="font-bold">Name: </span>${fullName}`;
    });

    var userEmailPromise = userPromise.then((data) => data.results[0].email);

    userEmailPromise.then((email) => {
        const emailElement = document.querySelector('#email');
        emailElement.innerHTML = `<span class="font-bold">Email: </span>${email}`;
    });

    var userMobilePromise = userPromise.then((data) => data.results[0].cell);

    userMobilePromise.then((cell) => {
        const cellElement = document.querySelector('#cell');
        cellElement.innerHTML = `<span class="font-bold">Phone: </span>${cell}`;
    });

    var locationPromise = userPromise.then((data) => data.results[0].location.city);

    locationPromise.then((city) => {
        const locationElement = document.querySelector('#location');
        locationElement.innerHTML = `<span class="font-bold">Location: </span>${city}`;
    });

    var userAgePromise = userPromise.then((data) => data.results[0].dob.age);

    userAgePromise.then((age) => {
        const ageElement = document.querySelector('#age');
        ageElement.innerHTML = `<span class="font-bold">Age: </span>${age}`;
    });
}
const button = document.querySelector('#generate');

button.addEventListener('click',onClick);

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
  }

  function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
  }