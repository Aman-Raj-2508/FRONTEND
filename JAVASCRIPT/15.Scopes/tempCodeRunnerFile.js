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