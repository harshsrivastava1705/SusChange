function fadeBody()
{
    $('.main-text').css("display", "none");
    $('.sub-text').css("display", "none");
    $('.submit').css("display", "none");
    $('.main-text').fadeIn(500);
    $('.sub-text').delay(300).fadeIn(500);
    $('.submit').delay(600).fadeIn(500);
}

function result()
{ 
    var pop = $("#population").val();
    var flora = $("#trees").val();
    var res = parseInt(flora) / parseInt(pop);
    if(!isNaN(res))
    {
        res = Math.floor(res);
        $("#a1").css("display", "none");
        $('#a1').removeClass("text-danger");
        $("#a2").css("display", "none");
        $("#a3").css("display", "none");
        
        $("#a1").html("You live in an area with " + res + " tree(s) per person");
        if(res > 28)
        {
            $("#a2").html("This is greater than the national average of 28 trees per person.");
            $("#a2").addClass("text-primary");
            $("#a3").html("Keep it up!");
        }
        else
        {
            $("#a2").html("This is lesser than the national average of 28 trees per person.");
            $("#a2").addClass("text-danger");
            $("#a3").html("Plant more trees for a sustainable future");
        }
        $('#a1').fadeIn(300);
        $('#a2').delay(300).fadeIn(300);
        $('#a3').delay(600).fadeIn(300);
    }
    else
    {
        $("#a1").html("Enter valid input"); 
        $('#a1').addClass("text-danger");  
    }
}

function solarPanel()
{
    var watt=parseInt($("input[name='type']:checked").val());
    var hours=parseInt($("input[name='hours']:checked").val());
    var req = parseInt($("#req").val());
    if(isNaN(req))
    {
        $("#a1").html("Enter valid input");
        $('#a1').fadeIn(100);
        $('#a1').addClass("text-danger");
        return;
    }
    $('#a1').removeClass("text-danger");
    $("#a1").css("display", "none");
    $("#a2").css("display", "none");
    var res = (watt*hours)/req;
    var day = res*24;
    var mon = day*30;
    $("#a1").html("You could save " + res.toFixed(2) + " kilowatts of energy every hour by switching to solar power!");
    $("#a2").html("That is " + day.toFixed(0) + " kilowatts per day or " + mon.toFixed(0) + " kilowatts per month.");
    $('#a1').fadeIn(300);
    $('#a2').delay(500).fadeIn(300);
}