'use strict'
$(document).ready(() => {
    let table;


    function setupPage(){
        $("form").hide();

    };

    function registerEventHandlers() {
       
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