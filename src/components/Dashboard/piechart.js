import React,{Component} from 'react';
// import Highcharts from '../../sharedfiles/customhighcharts';
import Highcharts from 'highcharts';

class HiLoGraph extends Component{
    componentDidMount(){
        this.loadGraph();
    }
    // componentDidUpdate(prevProps, prevState) {
    //     if(JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data) && Object.keys(this.props.data).length>0){
    //         this.loadGraph();
    //     }
    // }
    loadGraph(){
        //roundedCorner(Highcharts);
        var colors = Highcharts.getOptions().colors;
        Highcharts.chart('revenuebrand', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Revenue by Brand',
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
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Chrome',
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }, {
                    name: 'Safari',
                    y: 4.18
                }, {
                    name: 'Sogou Explorer',
                    y: 1.64
                }, {
                    name: 'Opera',
                    y: 1.6
                }, {
                    name: 'QQ',
                    y: 1.2
                }, {
                    name: 'Other',
                    y: 2.61
                }]
            }]
        });
    }

    render(){
        return (
            <div id="revenuebrand" style={{"width":"400px", "height":"200px"}}></div>       
        );
    }
    
        
}

export default HiLoGraph;
