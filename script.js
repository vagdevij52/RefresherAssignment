var getMetrics = document.getElementById("submitBtn");
getMetrics.addEventListener("click", function(stateName){
    var ourRequest = new XMLHttpRequest();
    var stName = $('#stateName').val();
    ourRequest.open('GET','https://www.worldometers.info/coronavirus/usa/' + stName + '/');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
    };
    ourRequest.send();
});

// //"input:text"

$(document).ready(function () {
    $(document).on('submit', '#myform', function (e) {
      e.preventDefault();
      $("#myform").on("click", "#submitBtn", function (event) {
        var urlWithVar = 'https://api.covidtracking.com/v1/states/' + stName +  '/current.json';
        $.ajax({
          url: urlWithVar,
          type: "GET",
          dataType: "json",
          error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);},
          success: function (parsed_json) {
              console.log(parsed_json);
          }
        });
      });
    });
  });