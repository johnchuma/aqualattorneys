
        $("#viewallservices").click(function () {
            $(this).text(function(i, text){
                return text === "VIEW ALL SERVICES" ? "MINIMIZE" : "VIEW ALL SERVICES";
            })
         });
 

$("#report").click(function (e) {
    $(document).ready(function () {
        document.getElementById("report").style.background = "#0B06F9";
        document.getElementById("satisfaction").style.background = "white";
        document.getElementById("confidentiality").style.background = "white";
        document.getElementById("excellence").style.background = "white";

        document.getElementById("reporttext").style.color = "white";
        document.getElementById("satisfactiontext").style.color = "black";
        document.getElementById("confidentialitytext").style.color = "black";
        document.getElementById("excellencetext").style.color = "black";

        $("#reportcontent").show();
        $("#excellencecontent").hide();
        $("#satisfactioncontent").hide();
        $("#confidentialitycontent").hide();
    });
});
$("#satisfaction").click(function (e) {
    $(document).ready(function () {
        document.getElementById("report").style.background = "white";
        document.getElementById("satisfaction").style.background = "#0B06F9";
        document.getElementById("confidentiality").style.background = "white";
        document.getElementById("excellence").style.background = "white";

        document.getElementById("reporttext").style.color = "black";
        document.getElementById("satisfactiontext").style.color = "white";
        document.getElementById("confidentialitytext").style.color = "black";
        document.getElementById("excellencetext").style.color = "black";

        $("#reportcontent").hide();
        $("#excellencecontent").hide();
        $("#satisfactioncontent").show();
        $("#confidentialitycontent").hide();
    });
});
$("#excellence").click(function (e) {
    $(document).ready(function () {
        document.getElementById("report").style.background = "white";
        document.getElementById("satisfaction").style.background = "white";
        document.getElementById("confidentiality").style.background = "white";
        document.getElementById("excellence").style.background = "#0B06F9";

        document.getElementById("reporttext").style.color = "black";
        document.getElementById("satisfactiontext").style.color = "black";
        document.getElementById("confidentialitytext").style.color = "black";
        document.getElementById("excellencetext").style.color = "white";

        $("#reportcontent").hide();
        $("#excellencecontent").show();
        $("#satisfactioncontent").hide();
        $("#confidentialitycontent").hide();
    });
});
$("#confidentiality").click(function (e) {
    $(document).ready(function () {
        document.getElementById("report").style.background = "white";
        document.getElementById("satisfaction").style.background = "white";
        document.getElementById("confidentiality").style.background = "#0B06F9";
        document.getElementById("excellence").style.background = "white";

        document.getElementById("reporttext").style.color = "black";
        document.getElementById("satisfactiontext").style.color = "black";
        document.getElementById("confidentialitytext").style.color = "white";
        document.getElementById("excellencetext").style.color = "black";

        $("#reportcontent").hide();
        $("#excellencecontent").hide();
        $("#satisfactioncontent").hide();
        $("#confidentialitycontent").show(); 
    });
});
