$(document).ready(function() {
    $("#submit").click(function(event){    //Click function for button
        const name = $("#name");           //Variables for different inputs
        const email = $("#email");
        const phone = $("#phone");
        const messageArea = $("#message-area");
        const required = [name, email, phone];
    
        for(i=0; i < required.length; i++) {       //Conditions to check if entry fields are empty.
            if(required[i].val() === "") {
                $("#message").addClass("warning").html("<em>Please Fill Out Required Fields</em>");
                $("label").addClass("warning");
            } else {
                $("#message").removeClass("warning");
                $("label").removeClass("warning");
                }
    };
        if($("label") != $(".warning")) {    //Conditions to complete the form.
            $("form").remove();
            $("h2").html('<em>Thanks for your feedback!</em>');}
        });
})