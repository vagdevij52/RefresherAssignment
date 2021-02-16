$(document).ready(function () {
    $("#myForm").submit(function(event) {
        event.preventDefault();
        $("#result").html("");
        var stName = $('#state option:selected').val();
        var urlWithVar = 'https://api.covidtracking.com/v1/states/' + stName + '/current.json';
        var form_data = $(this).serialize();
        $.getJSON( urlWithVar , form_data,function( response ) {
            url: urlWithVar;
            method: "GET";
            crossDomain: true;
            data: form_data;
            dataType: "json";
            $.each( response, function(key, val) {
                console.log(key,val);
                if(key === 'date'){
                    $('#result').append("<b>Date of Report: </b>"+response.date);
                    $('#result').append("<br/>");$('#result').append("<br/>");
                }else if(key === 'positive'){
                    $('#result').append("<b>Postive Cases Currently: </b>"+response.positive);
                    $('#result').append("<br/>");$('#result').append("<br/>");
                }else if(key === 'hospitalizedCurrently'){
                    $('#result').append("<b>Hospitalized currently: </b>"+response.hospitalizedCurrently);
                    $('#result').append("<br/>");$('#result').append("<br/>");
                }else if(key === 'death'){
                    $('#result').append("<b>No. of deaths: </b>"+response.death);
                    $('#result').append("<br/>");$('#result').append("<br/>");
                }else if(key === 'totalTestResults'){
                    $('#result').append("<b>Total test results: </b>"+response.totalTestResults);
                    $('#result').append("<br/>");$('#result').append("<br/>");
                }
                                    
            });
        }).fail(function() { alert('Please enter correct state name!!!'); });
    });
});