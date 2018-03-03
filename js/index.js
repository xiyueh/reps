var trafficChartCanvas = document.getElementById("trafficChart");
var usageChartCanvas = document.getElementById("usageChart");
var trafficChartCanvas2 = document.getElementById("trafficChart2");

var trafficChart = new Chart(trafficChartCanvas, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [40, 60],
            backgroundColor: [
                // 'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)'
            ]
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            // 'Red',
            'Checked In',
            'Checked Out'
        ]
    },
    // options: options
});

var usageChart = new Chart(usageChartCanvas, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [70, 30],
            backgroundColor: [
                // 'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)'
            ]
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            // 'Red',
            'Occupied',
            'Idle'
        ]
    },
    // options: options
});

var trafficChart2 = new Chart(trafficChartCanvas2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [40, 60],
            backgroundColor: [
                // 'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)'
            ]
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            // 'Red',
            'Checked In',
            'Checked Out'
        ]
    },
    // options: options
});

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.showLiveData = true;
});