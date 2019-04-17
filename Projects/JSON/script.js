
// //   "firstname": "Heather",
// //     "lastname": "Tovey",
// //     "cats": ["Hops", "Barley"]
// var myProfile =
// {
//     "firstName": "Jane",
//     "lastName": "Smith",
//     "address": {
//         "streetAddress": "425 2nd Street",
//         "city": "San Francisco",
//         "state": "CA",
//         "postalCode": 94107
//     },
//     "phoneNumbers": [
//         "212 732-1234", "646 123-4567"
//     ]
// }

// var p = document.createElement('p');
// p.innerHTML = 'my name is ' + myProfile.firstName + ' ' + myProfile.lastName + '. ';
// p.innerHTML = ' i live at ' + myProfile.address.join(' , ') + '.';

// // p.innerHTML += 'My cats are ' + myProfile.cats.join('and ') + '. ';
// var body = document.getElementsByTagName('body')[0];
// body.appendChild(p);

document.bgColor = localStorage.color;
function changeBackground() {
    event.preventDefault();
    var color2 = document.getElementById('colorTwo').value;
    // background color change
    document.bgColor = color2;
    localStorage.setItem('color', color2)
}
document.getElementById('submit2').addEventListener("click", changeBackground, false)
// // //remove data
// localStorage.removeItem('user name');


// // //remove all keys and values
// localStorage.clear();

