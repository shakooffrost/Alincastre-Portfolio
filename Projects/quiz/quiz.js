function check() {
    var q1 = document.myform.q1.value;
    var q2 = document.myform.q2.value;
    var q3 = document.myform.q3.value;
    var q4 = document.myform.q4.value;
    var q5 = document.myform.q5.value;
    var count = 0;

    if (q1 == 'a') {
        count++;
    }
    if (q2 == "c") {
        count++;
    }
    if (q3 == 'd') {
        count++;
    }
    if (q4 == 'd') {
        count++;
    }
    if (q5 == 'd') {
        count++;
    }
    alert("you got " + count + " marks");
}