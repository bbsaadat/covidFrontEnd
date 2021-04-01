import React from 'react';

const AddChartButton = (props) => {

    //get the number of people in the country selected
    const Population = (pickedCountry, index) => {

        for(const acountry of props.covidData){ //this for loop is to help find the object pertaining to the country in order to get its countrie's population
            if(acountry.country === pickedCountry){
                props.addCountry(acountry, index);
            }
        }
    }

    const Custom = (pickedCustom, index) => {
        props.addCustom(pickedCustom, index);
    }
    

    return (
        <div>
            <div class="column">
                 <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button is-large" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>{props.countries[props.index] === undefined ? "Pick Country" : props.countries[props.index].country}</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <h1></h1>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                            <div class="dropdown-item">
                                {props.covidData.map(obj => (
                                    <a onClick={() => Population(obj.country, props.index)} class="dropdown-item">{obj.country}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                 </div>

                 <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button is-large" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>{props.custom[props.index] === undefined ? "Pick Classification" : props.custom[props.index]}</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                            <div class="dropdown-item">
                                <a onClick={() => Custom("totalCases", props.index)} class="dropdown-item">Total Cases</a>
                                <a onClick={() => Custom("newCases", props.index)} class="dropdown-item">New Cases</a>
                                <a onClick={() => Custom("totalDeaths", props.index)} class="dropdown-item">Total Deaths</a>
                                <a onClick={() => Custom("newDeaths", props.index)} class="dropdown-item">New Deaths</a>
                                <a onClick={() => Custom("totalRecovered", props.index)} class="dropdown-item">Total Recovered</a>
                                <a onClick={() => Custom("activeCases", props.index)} class="dropdown-item">Active Cases</a>
                                <a onClick={() => Custom("seriousCritical", props.index)} class="dropdown-item">Serious, Critical</a>
                                <a onClick={() => Custom("totCasesPer1M", props.index)} class="dropdown-item">Total Cases/1M population</a>
                                <a onClick={() => Custom("deathsPer1M", props.index)} class="dropdown-item">Deaths/1M population</a>
                                <a onClick={() => Custom("totalTests", props.index)} class="dropdown-item">Total Tests</a>
                                <a onClick={() => Custom("testsPer1M", props.index)} class="dropdown-item">Tests/1M population</a>
                            </div>
                        </div>
                    </div>
                 </div>
                            

            </div>

        </div>
    );

}

export default AddChartButton;
