// Fetch API--------

// let abc = new XMLHttpRequest();
// abc.open('GET', "https://business.paytm.com/api/v1/content/json?slug=blogs&live", true);
// abc.onload = function () {
//     if (abc.status == 200) {
//         console.log(abc.response);
//     }
// }
// abc.send();

var array = ['Item 1', 'Item 2', 'Item 3'];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
fetch('https://business.paytm.com/api/v1/content/json?slug=blogs&live').then((response) => {
    return response.json();
}).then((data) => {
    var result = '';
    var abc = document.getElementById('main')
    console.log(data);
    for (let index = 0; index < data.length; index++) {
        result += '<div class="container">';
        result += '<img src=' + data[index].fields.blogImgUrl + ' />';
        result += '<h2 id="heading">' + data[index].title + '</h2>';
        result += '<a href="' + data[index].fields.actionLinkUrl + '" id="link">' + data[index].fields.actionLinkName + '</a>';
        result += '</div >'
    }
    abc.innerHTML = result;
    console.log(typeof data)
})