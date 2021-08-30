
// Revenue by Stake Factor

Highcharts.chart('revenueBy-StakeFactor', {

    title: {
        text: ''
    },

    // subtitle: {
    //     text: 'Source: thesolarfoundation.com'
    // },

    yAxis: {
        title: {
            text: ''
        }
    },

    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e. %b',
        }
    },

    legend: {
        enabled: true
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: Date.UTC(2021, 6, 1),
            pointInterval: 24 * 3600 * 1000 * 1
        }
    },

    series: [{
        name: 'Restricted Customers',
        data: [25238, 57885, 24489, 29335, 15055, 20086, 25556]
    }, {
        name: 'Stake Factor (1.0)',
        data: [138808, 173655, 134688, 161345, 210771, 130556, 140555]
    }, {
        name: 'Preferred Customers',
        data: [88332, 57885, 85711, 102674, 78286, 70299, 43444]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            // chartOptions: {
            //     legend: {
            //         layout: '',
            //         align: '',
            //         verticalAlign: ''
            //     }
            // }
        }]
    }
});



// By Brand

Highcharts.chart('revenueBy-brand', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'UG',
            y: 15.58
        }, {
            name: 'NG',
            y: 40.76
        }, {
            name: 'ZM',
            y: 13.41
        }, {
            name: 'Ken',
            y: 30.25
        }]
    }]
});

// The button handler

// $(".CMS-fullScreen-btn").click(function () {
//     alert("yes");
//     Highcharts.chart.toggleFullscreen();
// });

// Bet Count Graph

Highcharts.chart('bet-count', {

    chart: {
      type: 'column'
    },
  
    title: {
      text: ''
    },
  
    yAxis: {
        title: {
            text: ''
        }
    },

    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e. %b',
        }
    },
  
    // tooltip: {
    //   formatter: function () {
    //     return '<b>' + this.x + '</b><br/>' +
    //       this.series.name + ': ' + this.y + '<br/>' +
    //       'Total: ' + this.point.stackTotal;
    //   }
    // },
  
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: Date.UTC(2021, 6, 1),
            pointInterval: 24 * 3600 * 1000 * 1
        }
    },
  
    series: [{
        color: '#FFC000',
        name: 'Kenya',
        data: [201684, 228912, 286410, 255371, 241100, 251032, 264973]

    }],
  });

// Cash Stakes vs Revenue

Highcharts.chart('cashStakes-revenue', {

    title: {
        text: ''
    },

    // subtitle: {
    //     text: 'Source: thesolarfoundation.com'
    // },

    yAxis: {
        title: {
            text: ''
        },
        tickAmount:10
        // labels: {
        //     formatter: function () {
        //         return this.value / 2000 + 'k';
        //     }
            
        // }
    },

    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e. %b',
        }
    },

    legend: {
        enabled: true
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: Date.UTC(2021, 6, 1),
            pointInterval: 24 * 3600 * 1000 * 1
        }
    },

    series: [{
        color: '#FF0000',
        name: 'Cash Stakes',
        data: [2001829, 1729052, 183345, 1859918, 1543616, 1504660, 169582],
        dashStyle: 'dot'
    }, {
        color: '#2F5497',
        name: 'Cash Revenue',
        data: [142987, 150137, 165150, 163437, 184026, 160660, 190145],
        dashStyle: 'dot'
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            // chartOptions: {
            //     legend: {
            //         layout: '',
            //         align: '',
            //         verticalAlign: ''
            //     }
            // }
        }]
    }
});


// Cash Revenue by Sport

Highcharts.chart('cashRevenue-sport', {

    title: {
        text: ''
    },

    // subtitle: {
    //     text: 'Source: thesolarfoundation.com'
    // },

    yAxis: {
        title: {
            text: ''
        },
         min: -10
    },

    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e. %b',
        }
    },

    legend: {
        enabled: true
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: Date.UTC(2021, 4, 24),
            pointInterval: 7 * 24 * 3600 * 1000,
        }
    },

    series: [{
        color: '#A9D18D',
        name: 'Football Singles',
        data: [27853, 25743, 22865, 27714, 39841, 28941, 37410],
        dashStyle: 'shortdash'
    }, {
        color: '#9CC3E6',
        name: 'Football Multiples',
        data: [44681, 41941, 38004, 45217, 59821, 33584, 40784],
        dashStyle: 'shortdash'
    }, {
        color: '#FF0000',
        name: 'Basketball',
        data: [9514, -1045, 8954, 11025, 6841, 8633, 7444],
        dashStyle: 'shortdash'
    }, {
        color: '#FFC000',
        name: 'Cricket',
        data: [10951, 22878, 1575, 21886, 14761, 19375, 27411],
        dashStyle: 'shortdash'
    }, {
        color: '#FFFF00',
        name: 'Tennis',
        data: [14988, 18014, 11448, 9412, 11731, 8422, 9742],
        dashStyle: 'shortdash'
        
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            // chartOptions: {
            //     legend: {
            //         layout: '',
            //         align: '',
            //         verticalAlign: ''
            //     }
            // }
        }]
    }
});
