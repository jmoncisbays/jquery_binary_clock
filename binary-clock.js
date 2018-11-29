        var led = new Array();
        var t = new Array();

        $(document).ready(function () {
            displayBinaryTime();
        });

        function displayBinaryTime() {
            var d = new Date();
            var time = "";
            var ledIndex = 0;
            var r = 0;

            for (g = 0; g < 3; g++) {
                t[0] = 0;
                t[1] = 0;

                switch (g) {
                    case 0:
                        time = d.getHours().toString();
                        break;
                    case 1:
                        time = d.getMinutes().toString();
                        break;
                    case 2:
                        time = d.getSeconds().toString();
                        break;
                }

                if (time.length == 2) {
                    t[1] = Number(time.substr(0, 1));
                    t[0] = Number(time.substring(1));
                }
                else {
                    t[0] = Number(time);
                }


                for (c = 0; c < t.length; c++) {
                    led[3] = false;
                    led[2] = false;
                    led[1] = false;
                    led[0] = false;

                    ledIndex = 0;
                    r = t[c];

                    if (t[c] > 1) {
                        while (r != 1) {
                            if (r % 2 != 0) {
                                led[ledIndex] = true;
                                r--;
                            }
                            r = r / 2;
                            ledIndex++;
                        }
                        led[ledIndex] = true;
                    }
                    else if (t[c] == 1)
                        led[0] = true;

                    for (r = 0; r < led.length; r++) {
                        if (!(g == 0 && c == 1 && r > 1) || (g == 1 && c == 1 && r > 2) || (g == 3 && c == 1 && r > 2))
                            $("#t" + g.toString().concat("_").concat(c.toString()).concat("_").concat(r.toString())).css("background-color", (led[r] == true ? "#fc6353" : "#696969"));
                    }
                }
            }

            setTimeout(displayBinaryTime, 1000);
        };
