var getMetrics = document.getElementById("submitBtn");
getMetrics.addEventListener("click", function(stName){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://api.covidtracking.com/v1/states/'+stateName+'/current.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
    };
    ourRequest.send();
});

