﻿///<reference path="app.js" />
demoApp.filter("fieldposition", function () {
    return function (positionnum)
    {
        switch (positionnum)
        {
            case 1:
                return "P";
            case 2:
                return "C";
            case 3:
                return "1B";
            case 4:
                return "2B";
            case 5:
                return "3B";
            case 6:
                return "SS";
            case 7:
                return "LF";
            case 8:
                return "CF";
            case 9:
                return "RF";
            default:
                return "Unknown";


        }
    }
});