import React from 'react';
import Row from "./Row.jsx"



function createRow(rowData){
    return <Row 
        {...rowData}
    />
}

function Table(props){
    // console.log(props.covidData);
    return (
        <section class="section">
            <div>
                <table class="table is-striped is-bordered sticky is-fullwidth is-hoverable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Country, Other</th>
                            <th>Total Cases</th>
                            <th>New Cases</th>
                            <th>Total Deaths</th>
                            <th>New Deaths</th>
                            <th>Total Recovered</th>
                            <th>Active Cases</th>
                            <th>Serious, Critical</th>
                            <th>Total Cases/1M pop</th>
                            <th>Deaths/1M pop</th>
                            <th>Total Tests</th>
                            <th>Tests/1M pop</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.covidData.map(createRow)}
                    </tbody>
                </table>
        </div>
        </section>
    );
}


export default Table;
