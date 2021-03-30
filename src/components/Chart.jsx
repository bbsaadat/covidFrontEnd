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





    var chartData = {
        labels: props.countries.map(obj => obj.country),
        datasets:[
            {
                label: 'Population',
                data: props.countries.map(obj => parseInt(obj.population.replace(/,/g, ""))),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',

            },{
                label: 'Custom classification',
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
                options={{ maintainAspectRatio: false, 

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
                            } 
                        }}
             />
            </h2>
        </section>

    );

}

export default Chart;