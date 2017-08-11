///<reference path="app.js" />
demoApp.controller("demoController", function ($scope) {

    //Sample data obtained from mlb.com
    var hrKings = [
        { name: "Barry Bonds", position:7,games: 2986, atbat: 9847, runs: 2227, hits: 2935, doubles: 601, triples: 77, hr: 762, rbi: 1996},
        { name: "Hank Aaron", position: 9,games: 3298, atbat: 12364, runs: 2174, hits: 3771, doubles: 624, triples: 98, hr: 755, rbi: 2297},
        { name: "Babe Ruth", position: 9 ,games: 2503, atbat: 8399, runs: 2174, hits: 2873, doubles: 506, triples: 136, hr: 714, rbi: 2213},
        { name: "Alex Rodriguez", position: 6, games: 2784, atbat: 10566, runs: 2021, hits: 3115, doubles: 548, triples: 31, hr: 696, rbi: 2086},
        { name: "Willie Mays", position: 8, games: 2992, atbat: 10881, runs: 2062, hits: 3283, doubles: 523, triples: 140, hr: 660, rbi: 1903}

    ];

    //Variables used by this controller
    $scope.sortColumn = "hr"; //Default sorting column
    $scope.reverseSort = true; 
    $scope.hideStat = false; //Default setting to hide calculated values
    $scope.hrKings = hrKings;

    //Function to calculate Batting Average
    // Batting Average = hits divided by at bats
    $scope.CalcAvg = function (hrKings) {
        var avg = 0;

        if (hrKings.atbat == 0)
            return 0;
        else
            avg = hrKings.hits / hrKings.atbat;

        return avg;

    };

    /*Total bases is calculated as follows
    1. Get the number of singles as follows
        From the total hits, subtract the number of doubles, triples and homeruns
    2. To the singles add:
       a. The number of doubles times 2 (A batter gets two bases in a double)
       b. The number of triples times 3 (A batter gets three bases in a triple)
       c. The number of home runs times 4 (A batter gets four bases in a triple)
    */
    $scope.CalcTotBases = function (hrKings)
    {
        var singles = hrKings.hits - hrKings.doubles - hrKings.triples - hrKings.hr;
        return singles + (2 * hrKings.doubles) + (3 * hrKings.triples) + (4 * hrKings.hr);

    }
    //divide the total number of bases for the player (See above for more details)by the 
    //number of at bats
    $scope.CalcSlg = function (hrKings) {
        var totalbases = $scope.CalcTotBases(hrKings);

        return totalbases / hrKings.atbat;

    }

    //Function to sort columns based on the keys in the object array above
    $scope.sortData = function (column) {
        
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;

    }

    //This will set a CSS Class to the column which was sorted by and show either a down
    //arrow or an up arrow depending on the sort type
    $scope.getSortClass = function (column) { 

        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';

        }
        return '';
    }

});



