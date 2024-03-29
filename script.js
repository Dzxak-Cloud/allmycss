    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var day = today.getDate();
        var month = today.getMonth() + 1; // JavaScript months are 0-based
        var year = today.getFullYear();

        // Add leading zeros if necessary
        m = checkTime(m);
        s = checkTime(s);

        document.getElementById('clock').innerHTML = 
            h + ":" + m + ":" + s + "<br>" +
            day + "/" + month + "/" + year;
        var t = setTimeout(startTime, 1000);
    }

    function checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }

    startTime();