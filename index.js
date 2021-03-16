$("#Linkedin").on("click", function() {
    $(this).css("color", "red");
});
    
$("#GitHub").on("click", function() {
    $(this).css({ "color": "red" });
});

$("#Linkedin").on("click", function() {
    $(this).toggleClass('back-red');
});
    
$("#GitHub").on("mousedown", function() {
    $(this).toggleClass('back-red');
})
.on("mouseup", function(e) {
    $(this).toggleClass('back-red');
});

$("#Twitter").toggle(function() {
    $(this).css("background-color", "red");
}, 
function() {
    $(this).css("background-color", "");
});