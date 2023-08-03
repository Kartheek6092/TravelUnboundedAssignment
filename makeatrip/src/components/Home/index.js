import {Component} from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import Header from '../Header'
import Footer from '../Footer';

import './index.css'

export default class Home extends Component{

    gotoPlan = () => window.location ='./plan';

    onBook = () => window.location ='./book-now'

    render(){
        return(
            <>
            <Header />
            <div className="home-container">
                
                <div className='home'>
                    <div className='home-content'>
                        <h1>Make Your Tour Unforgettable</h1><br />
                        <p>Jobs fill your pocket, but adventures fill your soul.</p><br />
                        <button type='button' className='plan-btn' onClick={this.gotoPlan}>View Plan</button>
                    </div>
                </div>

                <div className='overview-container'>
                    <div className='overview-content'>
                        <h1>Big Cats Week at Maasai Mara - Diwali 2023 special</h1><br />
                        <p><strong>Overview</strong>- November is one of the Best times to visit Kenya, especially to visit its prime park,
                            Maasai Mara. This is because the large migratory herds would have returned to Tanzania and now
                            the Big cats have to venture long distances to hunt their prey.
                            November is also the season of short rains. This makes the plains of Maasai Mara lush green. The
                            skies are truly dramatic and colourful. The Sun rise and Sun sets during November at Mara is
                            simply breath taking.
                            November is also a time for holidaying and getting together with our families. And the icing on the
                            cake is we have curated this itinerary for such an affordable costs without compromising on any of
                            the services. This is commemorate our first year anniversary of opening up operations at Nairobi.<br />
                            Join us on this unforgettable journey of your life time.
                        </p>
                    </div>
                    <img className='content-img' src='https://res.cloudinary.com/dzjuhiwxw/image/upload/v1691028237/image-001_mcrhvu.jpg' alt='lion' />
                </div>

                <div className='offer-details'>
                    <div class="special-offer" id="special-offer">
                        <span class="offer-text">%Special Offer!%</span>
                    </div>
                    <div class="scrolling-text-container">
                        <span class="scrolling-text">Special Independence Day offer valid for bookings made on or before till August 14th 2023 -
                            Cost per adult - USD 1322<br />
                            Special Independence Day offer valid for bookings made on or before till August 14th 2023 -
                            Cost per child - USD 1127
                        </span>
                    </div>
                </div><br />

                <button type='button' className='booknow-btn' onClick={this.onBook}>Book Now</button>

               <Footer />

            </div>
            </>
        )
    }
}