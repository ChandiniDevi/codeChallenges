// JavaScript source code
import $ from "jquery";
$(function () {
    $("#btn").click(function () {

        if ($("#btn").text() == "ON") {
            $("#btn").text("OFF")
        }
        else if ($("#btn").text() == "OFF") {
            $("#btn").text("ON")
        }

    }
    )
})
const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button id = "btn">ON</button>';