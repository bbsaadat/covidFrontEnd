import React, { useState } from 'react';
import { useQuery } from 'react-query';


const fetchTime = async (props) => {

    const response = await fetch("https://floating-shelf-46046.herokuapp.com/covid?time=1");
    const obj_covid = await response.json();
    return obj_covid;
}


const LiveMeter = (props) => {

    //fetching covid data from API endpoint
    const {data, status} = useQuery('covidDataTime', fetchTime);


    return (
                <div class="level-item has-text-centered">
  
                    <div>
                        <div class="circle"></div>
                    </div>
                    <div><p>&nbsp;&nbsp;&nbsp;Live</p></div>
                    <div class="container">
                        {status === "success" && <p>Last Updated: {Math.floor(((Date.now() - data.time)/1000)/60) + " minutes ago"}</p>}
                        {status === 'loading' && (
                            <div>Loading...</div>
                        )}
                        {status === 'error' && (
                            <div>Error fetching time</div>
                        )}
                    </div>
                </div>
    );

}

export default LiveMeter;