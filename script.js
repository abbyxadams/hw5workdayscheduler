

// get items from local storage and set them to variables 
var textareaVal9 = localStorage.getItem("hr-9");
var textareaVal10 = localStorage.getItem("hr-10");
var textareaVal11 = localStorage.getItem("hr-11");
var textareaVal12 = localStorage.getItem("hr-12");
var textareaVal1 = localStorage.getItem("hr-1");
var textareaVal2 = localStorage.getItem("hr-2");
var textareaVal3 = localStorage.getItem("hr-3");
var textareaVal4 = localStorage.getItem("hr-4");
var textareaVal5 = localStorage.getItem("hr-5");

// assign them ids 
var textarea9 = $("#hr-9");
var textarea10 = $("#hr-10");
var textarea11 = $("#hr-11");
var textarea12 = $("#hr-12");
var textarea1 = $("#hr-1");
var textarea2 = $("#hr-2");
var textarea3 = $("#hr-3");
var textarea4 = $("#hr-4");
var textarea5 = $("#hr-5");

// display values using id variables
textarea9.val(textareaVal9);
textarea10.val(textareaVal10);
textarea11.val(textareaVal11);
textarea12.val(textareaVal12);
textarea1.val(textareaVal1);
textarea2.val(textareaVal2);
textarea3.val(textareaVal3);
textarea4.val(textareaVal4);
textarea5.val(textareaVal5);

// save the date in a variable 
var date = moment().calendar();

// currentDay ID displays date variable  
$("#currentDay").text(date);

// time function
function time() {

    // save the current hour to a variable 
    var currentHour = moment().hours();

          // tell each task block if its past, present or future
         $(".block").each(function () {

            // save each task block to a varibale and change them from strings to integers.
            var hour = parseInt($(this).attr("id"));

                // if statement for past
                 if (hour < currentHour) {
                    // makes it grey
                    $(this).addClass("past");
        }

        //else if statement for present hour
        else if (hour === currentHour) {
            // makes it grey 
            $(this).removeClass("past");
            // makes it red
            $(this).addClass("present");
        }

        // else statement for future
        else {
            // makes it grey
            $(this).removeClass("past");
            // makes it red
            $(this).removeClass("present");
            // makes it green
            $(this).addClass("future");
        }

    });

};


time();

// on click function
$(".saveButton").on("click", function (event) {

    // 
    event.preventDefault();

    // variable "textarea" holds the previous sibling of saveButton which is (textarea).
    var textarea = $(this).prev();

    // variable "id" holds (sets variable textarea to its id)
    var id = textarea.attr("id");

    // variable "value" holds (the value of textarea)
    var value = textarea.val();
    // sets items id and value in local storage
    localStorage.setItem(id, value);
});


