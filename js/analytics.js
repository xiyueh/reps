var equipUsageChartCanvas = document.getElementById("equipUsageChart");
var equipUsageChart = new Chart(equipUsageChartCanvas, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [
            'Abdominal Bench',
            'Barbells',
            'Bench Press',
            'Cables and Pulleys',
            'Calf Machines',
            'Dipping Bars',
            'Dumb Bells',
            'Foam Roller',
            'Glute Ham Developer',
            'Hack Squat Machine',
            'Hammer Strength machine',
            'Hyper Extension Bench',
            'Incline Bench Press',
            'Kettle Bells',
            'Lat Pull Down Machine',
            'Leg Adduction / Abduction Machine',
            'Leg Curl Machine',
            'Leg Extension Machine',
            'Leg Press machine',
            'Preacher Bench',
            'Pull Up Bar',
            'Rowing Machine',
            'Smith Machine',
            'Squat Station',
            'Treadmill',
        ],
        datasets: [
	        {
	            label: "Percentage",
	            backgroundColor: 'rgb(54, 162, 235)',
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Abdominal Bench', y:67},
	            	{x:'Barbells', y:50},
	            	{x:'Bench Press', y:89},
	            	{x:'Cables and Pulleys', y:20},
	            	{x:'Calf Machines', y:15},
	            	{x:'Dipping Bars', y:38},
	            	{x:'Dumb Bells', y:60},
	            	{x:'Foam Roller', y:2},
	            	{x:'Glute Ham Developer', y:1},
	            	{x:'Hack Squat Machine', y:45},
	            	{x:'Hammer Strength machine', y:25},
	            	{x:'Hyper Extension Bench', y:21},
	            	{x:'Incline Bench Press', y:67},
	            	{x:'Kettle Bells', y:35},
	            	{x:'Lat Pull Down Machine', y:26},
	            	{x:'Leg Adduction / Abduction Machine', y:18},
	            	{x:'Leg Curl Machine', y:30},
	            	{x:'Leg Extension Machine', y:32},
	            	{x:'Leg Press machine', y:5},
	            	{x:'Preacher Bench', y:70},
	            	{x:'Pull Up Bar', y:78},
	            	{x:'Rowing Machine', y:56},
	            	{x:'Smith Machine', y:45},
	            	{x:'Squat Station', y:56},
	            	{x:'Treadmill', y:80}, 
	        	]
	        }
        ]
    },

    // Configuration options go here
    options: {
    	legend: {
    		position: 'left'
    	}
    }
});

var equipUsageHistoryChartCanvas = document.getElementById("equipUsageHistoryChart");
var equipUsageHistoryChart = new Chart(equipUsageHistoryChartCanvas, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [
            'Nov 2017',
            'Dec 2017',
            'Jan 2018',
            'Feb 2018',
            'Mar 2018',
        ],
        datasets: [
	        {
	            label: "Abdominal Bench",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:38},
	            	{x:'Dec 2017', y:23},
	            	{x:'Jan 2018', y:34},
	            	{x:'Feb 2018', y:45},
	            	{x:'Mar 2018', y:23},
	        	]
	        },
	        {
	            label: "Barbells",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:23},
	            	{x:'Dec 2017', y:35},
	            	{x:'Jan 2018', y:36},
	            	{x:'Feb 2018', y:38},
	            	{x:'Mar 2018', y:35},
	        	]
	        },
	        {
	            label: "Bench Press",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:89},
	            	{x:'Dec 2017', y:85},
	            	{x:'Jan 2018', y:91},
	            	{x:'Feb 2018', y:87},
	            	{x:'Mar 2018', y:87},
	        	]
	        },
        ]
    },

    // Configuration options go here
    options: {
    	legend: {
    		position: 'left'
    	}
    }
});

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

});