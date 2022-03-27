// Fetch API--------

// let abc = new XMLHttpRequest();
// abc.open('GET', "https://business.paytm.com/api/v1/content/json?slug=blogs&live", true);
// abc.onload = function () {
//     if (abc.status == 200) {
//         console.log(abc.response);
//     }
// }
// abc.send();


fetch('https://business.paytm.com/api/v1/content/json?slug=blogs&live').then((response) => {
    return response.json();
}).then((data) => {

    // For 1st
    document.getElementById('image').src = data[0].fields["blogImgUrl"];
    document.getElementById('heading').innerHTML = data[0].title;
    document.getElementById('link').innerHTML = data[0].actionCta[0].Name;

    // For 2nd
    document.getElementById('image1').src = data[1].fields["blogImgUrl"];
    document.getElementById('heading1').innerHTML = data[1].title;
    document.getElementById('link1').innerHTML = data[1].actionCta[0].Name;

    // For 3rd
    document.getElementById('image2').src = data[2].fields["blogImgUrl"];
    document.getElementById('heading2').innerHTML = data[2].title;
    document.getElementById('link2').innerHTML = data[2].actionCta[0].Name;
})
