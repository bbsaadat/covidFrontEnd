
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

        if( dropDown === countries.length && dropDown === custom.length){
            var countriesTemp = [...countries];
            countriesTemp.pop();
            var customTemp = [...custom];
            customTemp.pop();
    
            setCountries([...countriesTemp]);
            setCustom([...customTemp]);
        }else if(dropDown === countries.length){
            var countriesTemp = [...countries];
            countriesTemp.pop();
            setCountries([...countriesTemp]);
        }else if( dropDown === custom.length){
            var customTemp = [...custom];
            customTemp.pop();
            setCustom([...customTemp]);
        }

        

    }
    const addCountry = (newCountry, index) =>{  //splice according to index
        if(index !== countries.length){
            // console.log(index);
            const tempCountries = [...countries];
            tempCountries.splice(index, 1); //taking out old item by index
            tempCountries.splice(index, 0, newCountry); //putting in new item where old item was deleted
            // console.log(tempCountries);
            setCountries([...tempCountries]);
        }
        else{
            setCountries([...countries, newCountry]);
        }
        
        // setCountries([...countries, newCountry]);
    }
    const addCustom = (newCustom, index) =>{
        if(index !== custom.length){
            console.log(index);
            const tempCustoms = [...custom];
            tempCustoms.splice(index, 1); //taking out old item by index
            tempCustoms.splice(index, 0, newCustom); //putting in new item where old item was deleted
            console.log(tempCustoms);
            setCustom([...tempCustoms]);
        }else{
            setCustom([...custom, newCustom]);
        }

    }
 



    const items = [];
    for(let i=0; i<dropDown; i++){
        items.push( <AddChartButton  covidData={props.covidData} addCountry={addCountry} addCustom={addCustom} index={i} countries={countries}  custom={custom}/>);
    }


    return (
        <div>
            <Chart countries={countries}  custom={custom} />
            <div class="columns is-gapless">
                {items}
            </div>
            {(() => {
                if( countries.length !== 0 && custom.length !== 0 && countries.length === dropDown && custom.length === dropDown){
                    return (<button onClick={() => incrementDropDown()} class="button is-primary is-rounded is-focus is-outlined is-large">New chart&nbsp;<i class="fa fa-plus-square" aria-hidden="false"></i></button>);
                }

            })()}

            {dropDown > 1 && (<button onClick={() => decrementDropDown()} class="button is-danger is-rounded is-focus is-outlined is-large">Delete chart&nbsp;<i class="fa fa-times-circle" aria-hidden="false"></i></button>)}
        </div>
    );

}

export default ChartData;
