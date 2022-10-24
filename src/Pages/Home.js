import React, { Component } from 'react';
import Customers from '../Components/Customers';
import Hero from '../Components/Hero';
import Products from '../Components/Products';

class Home extends Component{
    render(){
        return(
            <main>
                <Hero/>
                <Products/>
                <Customers/>
                {/* STAFF COMPONENT */}
                <div>

                </div>
                {/* FAQ COMPONENT */}
                <div>

                </div>
            </main>
        )
    }
}

export default Home