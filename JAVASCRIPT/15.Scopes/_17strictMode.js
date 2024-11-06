function fun() {
    teachingAssistant = 'JD'; //autoglobal
    console.log(teachingAssistant);
}

function gun() {
    'use strict';
    ta = 'Aman';//not an autoglobal
    console.log(ta);
}

fun();
gun();


/**----------------------More examples--------------------------------- */
'use strict'; //In strict mode autoglobals are prohibited
function fun() {
    teachingAssistant = 'JD';
    console.log(teachingAssistant);
}

fun(); 