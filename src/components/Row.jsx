import React from 'react';


function Row(props){
    return (
        <tr>
            <td>{props.order}</td>
            <td>{props.country}</td>
            <td>{props.totalCases}</td>
            <td>{props.newCases}</td>
            <td>{props.totalDeaths}</td>
            <td>{props.newDeaths}</td>
            <td>{props.totalRecovered}</td>
            <td>{props.activeCases}</td>
            <td>{props.seriousCritical}</td>
            <td>{props.totCasesPer1M}</td>
            <td>{props.deathsPer1M}</td>
            <td>{props.totalTests}</td>
            <td>{props.testsPer1M}</td>
            <td>{props.population}</td>
        </tr>
    );
}


export default Row;