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
	            	{x:'Hammer Strength Machine', y:25},
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
	        {
	            label: "Cables and Pulleys",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:30},
	            	{x:'Dec 2017', y:28},
	            	{x:'Jan 2018', y:25},
	            	{x:'Feb 2018', y:21},
	            	{x:'Mar 2018', y:22},
	        	]
	        },
	        {
	            label: "Calf Machines",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:14},
	            	{x:'Dec 2017', y:12},
	            	{x:'Jan 2018', y:15},
	            	{x:'Feb 2018', y:15},
	            	{x:'Mar 2018', y:14},
	        	]
	        },
	        {
	            label: "Dipping Bars",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:35},
	            	{x:'Dec 2017', y:32},
	            	{x:'Jan 2018', y:38},
	            	{x:'Feb 2018', y:40},
	            	{x:'Mar 2018', y:38},
	        	]
	        },
	        {
	            label: "Dumb Bells",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:65},
	            	{x:'Dec 2017', y:60},
	            	{x:'Jan 2018', y:63},
	            	{x:'Feb 2018', y:62},
	            	{x:'Mar 2018', y:60},
	        	]
	        },
	        {
	            label: "Foam Roller",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:5},
	            	{x:'Dec 2017', y:10},
	            	{x:'Jan 2018', y:12},
	            	{x:'Feb 2018', y:6},
	            	{x:'Mar 2018', y:2},
	        	]
	        },
	        {
	            label: "Hyper Extension Bench",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:19},
	            	{x:'Dec 2017', y:18},
	            	{x:'Jan 2018', y:21},
	            	{x:'Feb 2018', y:21},
	            	{x:'Mar 2018', y:21},
	        	]
	        },
	        {
	            label: "Incline Bench Press",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:68},
	            	{x:'Dec 2017', y:65},
	            	{x:'Jan 2018', y:80},
	            	{x:'Feb 2018', y:75},
	            	{x:'Mar 2018', y:67},
	        	]
	        },
	        {
	            label: "Kettle Bells",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:32},
	            	{x:'Dec 2017', y:28},
	            	{x:'Jan 2018', y:36},
	            	{x:'Feb 2018', y:35},
	            	{x:'Mar 2018', y:35},
	        	]
	        },
	        {
	            label: "Leg Press machine",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:5},
	            	{x:'Dec 2017', y:6},
	            	{x:'Jan 2018', y:7},
	            	{x:'Feb 2018', y:5},
	            	{x:'Mar 2018', y:5},
	        	]
	        },
	        {
	            label: "Pull Up Bar",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:87},
	            	{x:'Dec 2017', y:70},
	            	{x:'Jan 2018', y:56},
	            	{x:'Feb 2018', y:67},
	            	{x:'Mar 2018', y:78},
	        	]
	        },
	        {
	            label: "Rowing Machine",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:65},
	            	{x:'Dec 2017', y:53},
	            	{x:'Jan 2018', y:56},
	            	{x:'Feb 2018', y:62},
	            	{x:'Mar 2018', y:67},
	        	]
	        },
	        {
	            label: "Treadmill",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'Nov 2017', y:78},
	            	{x:'Dec 2017', y:75},
	            	{x:'Jan 2018', y:85},
	            	{x:'Feb 2018', y:83},
	            	{x:'Mar 2018', y:80},
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

var dailyBreakdownChartCanvas = document.getElementById("dailyBreakdownChart");
var dailyBreakdownChart = new Chart(dailyBreakdownChartCanvas, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [
            '0',
            '3',
            '6',
            '9',
            '12',
            '15',
            '18',
            '21',
            '24',
        ],
        datasets: [
	        {
	            label: "Reps",
	            borderColor: 'rgb(54, 162, 235)',
	            data: [
	            	{x:'0', y:0},
	            	{x:'3', y:0},
	            	{x:'6', y:300},
	            	{x:'9', y:600},
	            	{x:'12', y:1000},
	            	{x:'15', y:300},
	            	{x:'18', y:800},
	            	{x:'21', y:200},
	            	{x:'24', y:0},
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

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

});