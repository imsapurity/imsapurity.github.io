////
//Google Analitics
////
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-105765473-1', 'auto');
ga('send', 'pageview');

////
//Purity test Functions
////
function checkTotal() {
    var sum = 0;
    var possbile = 0;
    for (i=0;i<document.listForm.choice.length;i++) {
        if (document.listForm.choice[i].checked) {
            sum = sum + parseInt(document.listForm.choice[i].value);
        }
        possbile = possbile + parseInt(document.listForm.choice[i].value);
    }
    return ((1-(sum/possbile))*100).toFixed(2);
}

////
//On Submit, show and hide the divs
////
function submitItDad(year){
    var score = checkTotal();
    span = document.getElementById("total");
    txt = document.createTextNode(score+'%');
    span.innerText = txt.textContent;
    document.getElementById("questions").style.display = "none";
    document.getElementById("results").style.display = "block";
    
    console.log(score);
    console.log(year);
    
    ga('send', 'event', {
        'eventCategory': 'Results',
        'eventAction': 'Year: Score',
        'eventLabel': year + ':' +score
    });
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxSPvtqLCtPJy6hTqbaJclXDcl6UnBTG6qgNTjShl-05I_Qbww/exec",
        type: "post",
        data: year
    });
}

////
//Set BG to random Image
////
function randombg(){
    var random= Math.floor(Math.random() * 5) + 0;
    var bigSize = ["url('files/imsa1.jpg')",
                   "url('files/imsa2.jpg')",
                   "url('files/imsa3.jpg')",
                   "url('files/imsa4.jpg')",
                   "url('files/imsa5.jpg')"];
    document.getElementById("html").style.backgroundImage=bigSize[random];
}