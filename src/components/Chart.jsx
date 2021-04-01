import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {


    const allCustom = [];
    var holder = "";
    var index = 0;
    for (var obj of props.countries){
        // console.log(obj);
        // console.log(props.custom[0]);
        holder = props.custom[index];
        // console.log(holder);
        // console.log("ok");
        // console.log(obj[holder]);
        if(obj[holder] !== undefined){
            allCustom.push(parseInt(obj[holder].replace(/,/g, "")));
        }
        index++;

    }

    // console.log(props.countries.map(obj => (obj.population)));



    var chartData = {
        labels: props.countries.map(obj => obj.country),
        datasets:[
            {
                label: 'Population of country',
                data: props.countries.map(obj => parseInt(obj.population.replace(/,/g, ""))),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',

            },{
                label: 'Selected classification',
                data: allCustom.map(obj => obj),
                backgroundColor:'rgba(75, 192, 192, 0.6)',

            }
        ]
    };

    return (
        <section class="section is-small">
            <h1 class="title">Data visualization</h1>
            <h2 class="subtitle">
                <Bar
                data={chartData}
                width={50}
                height={600}
                options={{ maintainAspectRatio: false, tooltips: {
                                                    
                                                        callbacks: {
                                                            label: function(t, d) {
                                                                var xLabel = d.datasets[t.datasetIndex].label;
                                                                var yLabel = t.yLabel;
                                                                // first bar
                                                                if (t.datasetIndex === 0) return "Population" + ': ' + yLabel.toString().split(/(?=(?:...)*$)/).join(',') + ' people';
                                                                // second bar
                                                                else if (t.datasetIndex === 1)  return xLabel + ': ' + yLabel.toString().split(/(?=(?:...)*$)/).join(',');
                                                            }
                                                        }
                                                        }, //end tooltips

                                                        scales: {
                                                            yAxes: [{
                                                                ticks:{
                                                                    beginAtZero: true,
                                                                    userCallback: function(value, index, values) {
                                                                            value = value.toString();
                                                                            value = value.split(/(?=(?:...)*$)/);
                                                                            value = value.join(',');
                                                                            return value;
                                                                            }
                                                                        }
                                                                    }]
                                                                },
                                                                
                                                        legend: {
                                                            display: true,
                                                            labels: {
                                                                fontSize: 20
                                                            }
                                                        }
                                                    }}
             />
            </h2>
        </section>

    );

}

export default Chart;



