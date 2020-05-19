var flag=true;
document.onclick = function (e) {
    if (document.getElementById(e.target.id).innerHTML === "") {
        if (flag) {
            document.getElementById(e.target.id).innerHTML = "X";
            document.getElementById(e.target.id).style.color="red";
        } else {
            document.getElementById(e.target.id).innerHTML = "O";
            document.getElementById(e.target.id).style.color="blue";
        }

        flag = !flag;

        var x = document.getElementsByClassName("cell");


        function sayWin1() {
            alert("Игрок 1 победил");
            for (let i = 0; i < 9; i++) {
                x[i].innerHTML = ""
            }
            flag = true;
        }

        function sayWin2() {

            alert("Игрок 2 победил");
            for (let i = 0; i < 9; i++) {
                x[i].innerHTML = ""
            }
            flag = true;
        }

        function notWin() {
            var count = 0;
            for (let i = 0; i < 9; i++) {
                if (x[i].innerHTML !== "") count++;
            }
            if (count === 9)
                alert("Ничья");
            for (let i = 0; i < 9; i++) {
                x[i].innerHTML = ""
            }

            flag = true;
        }




        if ((x[0].innerHTML === x[1].innerHTML & x[1].innerHTML === x[2].innerHTML) & x[0].innerHTML !== "") {
            (x[0].innerHTML === "X") ? setTimeout(sayWin1, 100) : setTimeout(sayWin2, 100);
        }
        else
            if ((x[3].innerHTML === x[4].innerHTML & x[4].innerHTML === x[5].innerHTML) & x[3].innerHTML !== "") {
                (x[3].innerHTML === "X") ? setTimeout(sayWin1, 100) : setTimeout(sayWin2, 100);
            }
            else

                if ((x[6].innerHTML === x[7].innerHTML & x[7].innerHTML === x[8].innerHTML) & x[6].innerHTML !== "") {
                    (x[6].innerHTML === "X") ? setTimeout(sayWin1, 100) : setTimeout(sayWin2, 100);
                }
                else

                    if ((x[0].innerHTML === x[3].innerHTML & x[3].innerHTML === x[6].innerHTML) & x[0].innerHTML !== "") {
                        (x[0].innerHTML === "X") ? setTimeout(sayWin1, 100) : setTimeout(sayWin2, 100);
                    }
                    else

                        if ((x[1].innerHTML === x[4].innerHTML & x[4].innerHTML === x[7].innerHTML) & x[1].innerHTML !== "") {
                            (x[1].innerHTML === "X") ? setTimeout(sayWin1, 100) : setTimeout(sayWin2, 100);
                        }
                        else

                            if ((x[2].innerHTML === x[5].innerHTML & x[5].innerHTML === x[8].innerHTML) & x[2].innerHTML !== "") {
                                (x[2].innerHTML === "X") ? setTimeout(sayWin1, 100) : setTimeout(sayWin2, 100);
                            }
                            else

                                if ((x[0].innerHTML === x[4].innerHTML & x[4].innerHTML === x[8].innerHTML) & x[0].innerHTML !== "") {
                                    (x[0].innerHTML === "X") ? setTimeout(sayWin1, 100) : setTimeout(sayWin2, 100);
                                }
                                else

                                    if ((x[2].innerHTML === x[4].innerHTML & x[4].innerHTML === x[6].innerHTML) & x[2].innerHTML !== "") {
                                        (x[2].innerHTML === "X") ? setTimeout(sayWin1, 100) : setTimeout(sayWin2, 100);
                                    }

        var count = 0;
        for (let i = 0; i < 9; i++) {
            if (x[i].innerHTML !== "") count++;
        }
        if (count === 9) { setTimeout(notWin, 100); count = 9 };

    }
}





