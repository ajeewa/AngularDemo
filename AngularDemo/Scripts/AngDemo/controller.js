///<reference path="app.js" />
demoApp.controller("demoController", function ($scope) {
    var hrKings = [
        { name: "Barry Bonds", position:7,games: 2986, atbat: 9847, runs: 2227, hits: 2935, doubles: 601, triples: 77, hr: 762, rbi: 1996},
        { name: "Hank Aaron", position: 9,games: 3298, atbat: 12364, runs: 2174, hits: 3771, doubles: 624, triples: 98, hr: 755, rbi: 2297},
        { name: "Babe Ruth", position: 9 ,games: 2503, atbat: 8399, runs: 2174, hits: 2873, doubles: 506, triples: 136, hr: 714, rbi: 2213},
        { name: "Alex Rodriguez", position: 6, games: 2784, atbat: 10566, runs: 2021, hits: 3115, doubles: 548, triples: 31, hr: 696, rbi: 2086},
        { name: "Willie Mays", position: 8, games: 2992, atbat: 10881, runs: 2062, hits: 3283, doubles: 523, triples: 140, hr: 660, rbi: 1903}

    ];


    $scope.hideStat = false;
    $scope.hrKings = hrKings;

    $scope.CalcAvg = function (hrKings) {
        var avg = 0;

        if (hrKings.atbat == 0)
            return 0;
        else
            avg = hrKings.hits / hrKings.atbat;

        return avg;

    };

    $scope.CalcTotBases = function (hrKings)
    {
        var singles = hrKings.hits - hrKings.doubles - hrKings.triples - hrKings.hr;
        return singles + (2 * hrKings.doubles) + (3 * hrKings.triples) + (4 * hrKings.hr);

    }

    $scope.CalcSlg = function (hrKings) {
        var totalbases = $scope.CalcTotBases(hrKings);

        return totalbases / hrKings.atbat;

    }

    $scope.sortColumn = "hr";

    $scope.reverseSort = true;
    $scope.sortData = function (column) {
        
        switch (column)
        {
            case "CalcAvg":
                $scope.sortColumn = $scope.CalcAvg;
                $scope.reverseSort = ($scope.sortColumn == $scope.CalcAvg) ? !$scope.reverseSort : false;
                break;

            case "CalcSlg":
                $scope.sortColumn = $scope.CalcSlg;
                $scope.reverseSort = ($scope.sortColumn == $scope.CalcSlg) ? !$scope.reverseSort : false;
                break;                
                    
            default:
                $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                $scope.sortColumn = column;
        }

        //$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        //$scope.sortColumn = column;

    }

    $scope.getSortClass = function (column) {

        


        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';

        }

        return '';



    }

});



