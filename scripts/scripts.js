'use strict'
$(document).ready(() => {
    let table;


    function setupPage(){
        $("form").hide();

    };

    function registerEventHandlers() {
        // register events handlers for mouse enter and leave each letter. Add
        // a "hover" class when the mouse is over the letter.
        $("body").on("mouseenter mouseleave", ".table", (e) => {
            $(e.target).toggleClass("hover");
        });

        $(".available").on("click", (e) => {
            table = $(e.target)
            $("form").show();

        });


        $("button").click(function () {

            $("form").hide();
            table.removeClass("available").addClass("reserved");
        });

        $(".exit").click(function () {
            $("form").hide();
        });


    }