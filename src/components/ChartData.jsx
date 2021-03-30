
import React, { useState } from 'react';
import Chart from "./Chart.jsx"
import AddChartButton from "./AddChartButton.jsx"

const ChartData = (props) => {

    const [dropDown, setDropDown] = useState(1);


    const [countries, setCountries] = useState([]);
    const [custom, setCustom] = useState([]);



    const incrementDropDown = () => {
        setDropDown(dropDown+1);
    }
    const decrementDropDown = () => {

        setDropDown(dropDown-1);

        var countriesTemp = [...countries];
        countriesTemp.pop();
        var customTemp = [...custom];
        customTemp.pop();

        setCountries([...countriesTemp]);
        setCustom([...customTemp]);
        

    }
    const addCountry = (newCountry) =>{
        setCountries([...countries, newCountry]);
    }
    const addCustom = (newCustom, index) =>{
        setCustom([...custom, newCustom]);
    }
    //when we remove a country the population and custom attribute also gets removed
    const removeCountry = (aCountry) =>{
        const index = countries.indexOf(aCountry);
    }
    const deleteSpecificGraph = (index) => {
        setCountries(countries.splice(index,1));
    }

    const items = [];
    for(let i=0; i<dropDown; i++){
        items.push( <AddChartButton  covidData={props.covidData} addCountry={addCountry} addCustom={addCustom} index={i}/>);
        // items.push( <AddChartButton  covidData={props.covidData} addCountry={addCountry} addCustom={addCustom} index={i}/>);
    }


    return (
        <div>
            <Chart countries={countries}  custom={custom}/>
            <div class="columns is-gapless">
                {items}
            </div>
            {(() => {
                if(dropDown < 5 && countries.length !== 0 && custom.length !== 0 && countries.length === dropDown && custom.length === dropDown){
                    return (<button onClick={() => incrementDropDown()} class="button is-primary is-rounded is-focus is-outlined is-medium"><i class="fa fa-plus-square" aria-hidden="false"></i></button>);
                }

            })()}

            {dropDown > 1 && (<button onClick={() => decrementDropDown()} class="button is-danger is-rounded is-focus is-outlined is-medium"><i class="fa fa-times-circle" aria-hidden="false"></i></button>)}
        </div>
    );

}

export default ChartData;

// (dropDown < 5 && countries !== [] && custom !== [] && countries.length === dropDown && custom.length === dropDown)
// {dropDown < 5 && (<button onClick={() => incrementDropDown()} class="button is-primary is-rounded is-focus is-outlined is-medium"><i class="fa fa-plus-square" aria-hidden="false"></i></button>)}