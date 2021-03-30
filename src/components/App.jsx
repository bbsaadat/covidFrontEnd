import React from 'react';
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"


import CovidAPI from '../CovidAPI';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()
 

function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <CovidAPI />
        <Footer />
      </div>
    </QueryClientProvider>

  );
}

export default App;