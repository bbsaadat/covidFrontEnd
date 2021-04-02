import React, { useState } from "react";
import { useQuery } from 'react-query';
import Table from "./components/Table.jsx"
import Pagination from "./components/Pagination.jsx"
import SearchFilter from "./components/SearchFilter.jsx"
import RowFilter from "./components/RowFilter.jsx"
import ChartData from "./components/ChartData.jsx"
import LiveMeter from "./components/LiveMeter.jsx";

const fetchCovid = async (props) => {

    const response = await fetch("https://floating-shelf-46046.herokuapp.com/covid");
    const obj_covid = await response.json();
    return obj_covid;
}

const CovidAPI = () => {

    //for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(25);

    //for search filter
    const [searchCountry, setSearchCountry] = useState('');

    //fetching covid data from API endpoint
    const {data, status} = useQuery('covidData', fetchCovid);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // Set posts per page
    const numberOfRows = (rows) => {
        setPostsPerPage(rows);
        paginate(1); //if someone is on the last page on "show 25 entries" and want to switch it to 75, it will redirect to the first page
    }

    


    return (
        <div>
            {status === 'success' && (
                <div>
                <ChartData covidData={data}/>
                <hr class="style-eight"></hr>
                    <section class="section">
                        <nav class="level">
                            <RowFilter settingPostsPerPage={numberOfRows} postsPerPage={postsPerPage}/>
                            <LiveMeter />
                            <SearchFilter setSearchCountry={setSearchCountry}/>
                        </nav>
                    </section>

                    <Table covidData = {searchCountry === '' ? data.slice(indexOfFirstPost, indexOfLastPost) : data.filter((val)=>{ if (val.country.toLowerCase().startsWith(searchCountry.toLowerCase())){
                                return val;
                            }
                        })} searchCountry={searchCountry}/>

                    <Pagination postsPerPage={searchCountry === '' ? postsPerPage : data.length} totalPosts={data.length} paginate={paginate} currentPage={currentPage}/>
                </div>
            )}
            {status === 'loading' && (
                <div>
                <div>Loading...</div>
                <div><progress class="progress is-large is-primary" max="100">60%</progress></div>
                </div>

            )}
            {status === 'error' && (
                <div>Error fetching covid data</div>
            )}
        </div>
    );

};

export default CovidAPI;
