import {Component} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Popup from 'reactjs-popup'

import Header from "../Header";
import 'reactjs-popup/dist/index.css'
import './index.css'

class BookNow extends Component{
    state = {acceptedTandC: false, continuePayment: false}  

    acceptingTandC = (event) => {
        console.log(event.target.checked)
        this.setState({ acceptedTandC : event.target.checked})
    }

    checkAndContinue = () => {
        const {acceptedTandC} = this.state
        this.setState({continuePayment: acceptedTandC})
    }

    render(){
        const {acceptedTandC, continuePayment} = this.state

        return(
            <>
            <Header />
            <div className="booking-container">
            {acceptedTandC&&continuePayment ? (
                <div className='form-details'>
                    <h1>Payment Details</h1><br />
                    <p><strong>Reciever Name :</strong> Travel Unbounded World Pvt Ltd</p>
                    <p><strong>Reciever Address :</strong> TRAVEL UNBOUNDED WORLD PVT LTD MPESI LANE, KENYA, TTA AVENUE, PO BOX 6950, NAIROBI</p>
                    <p><strong>Reciever Nick Name :</strong> TRAVEL UNB</p>
                    <p><strong>Branch :</strong> UBALGS/WESTLANDS</p>
                    <p><strong>Country :</strong> KENYA</p>
                    <p><strong>Contact Number :</strong> 919845090014</p>
                    <p><strong>Reciever Account Number :</strong> USD 55010130009921</p>
                    <p><strong>Reciever Type:</strong> CURRENT A/C BUSINESS</p>
                    <p><strong>Reciever E Mail Address :</strong> ck@travelbounded.com</p>
                    <p><strong>Reciever SWIFT CODE :</strong> UNAFKENA</p>
                    <p><strong>Bank Code :</strong> 076</p>
                    <p><strong>Branch Code :</strong> 76001</p>
                    <p><strong>Currency :</strong> USD</p>
                    <p><strong>Reciever Bank Country:</strong> KENYA</p>
                    <p><strong>PIN Code :</strong> Nairobi 001</p><br /><br />

                    
                    <div className="popup-container">
                    <Popup
                        modal
                        trigger={
                            <button type='button' className='pay-btn' >Pay Now</button>
                        }
                    >
                        {close => (
                        <>
                            <div className='confirmation-msg'>
                                <p>Your Booking Confirmed</p><br />
                                <Link to='/' ><button
                                type="button"
                                className="goto-home"
                                onClick={() => close()}
                                >
                                Go To Home
                                </button></Link>
                            </div>
                            
                        </>
                        )}
                    </Popup>
                    </div>
                </div>
            ) : (
                <>
                <div className='termsa-conditions'>
                    <h1>Terms and Conditions</h1>
                    <p>- Costs are based at 4 paxs per vehicle for game drives and 5 per vehicle for Internal transfers<br />
                    - Stay at Mara would be at Zebra plains or Loyk camp or Julia river camp.<br />
                    - Last day to confirm the tour is August 14th 2023.<br />
                    - Guests travelling should process valid passports with a minimum of 6 months validity from the
                    date of return.<br />
                    - Guests traveling should be administered with Yellow fever vaccination and Oral polio
                    vaccination. The vaccines should be taken at least 15 days prior to travel. The certificates has to
                    be shared for us to send you the invite letter for VISA application.<br />
                    - Guests should intimate us on any medical ailment and Travel Unbounded World Pvt Ltd is not
                    liable for any loss or damage to the guests during the tour.<br />
                    - Guests should provide International travel insurance 15 days prior to travel.<br />
                    - Guests staying at Nairobi one day prior to the travel dates have to reach JKIA airport at 7AM on
                    Nov 14th<br />
                    - Guests staying at Nairobi on Nov 17th would have to arrange their transport from JKIA airport
                    after we drop you.<br />
                    - Lunch on the return on Nov 17th is not a part of the package<br />
                    - Meals are mentioned in brackets at the end of the Day’s itinerary<br />
                    - Groups above 5 can avail special discounts<br />
                    - Vehicles are provided only for internal transfers and game drives, they are not for another
                    purposes or use.<br />
                    - Please refer to all the terms and conditions on www.travelunbounded.com<br /></p>
                </div><br />

                <div>
                    <h1>Payment terms and Cancellation policy </h1>
                    <p>- 100% of the tour cost at the time of booking<br />
                    - 50% of the tour cost would be given back as credit if the tour is cancelled 60 days before the
                    travel dates<br />
                    - No refund is provided if tour is cancelled within thirty days of the travel dates
                    Inclusions -<br />
                    - Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on shared basis<br />
                    - Stay on twin sharing basis at Maasai Mara either at Zebra plains or<br />
                    - Game drives in Landcruisers in shared basis - minimum 4 paxs per vehicle<br />
                    - Water during game drives<br />
                    - All meals as mentioned in the itinerary<br />
                    - Park Fees<br />
                    - Guide Fees<br />
                    - English speaking guides/drivers
                    </p>
                </div><br />
                
                <div>
                    <h1>Exclusions  </h1>
                    <p>- Any airfare or VISA charge<br />
                    - Personal and medical expenses during the tour<br />
                    - Tips and gratitude<br />
                    - Anything other than mentioned in the Inclusions section<br />
                    </p>
                </div><br />
                
                <input type='checkbox' onClick={this.acceptingTandC} id='checkbox' />
                <label htmlFor='checkbox'> {'    '}Accepting Terms & Conditions, Payments and Exclusions</label><br />
                <button type='button' className='goto-payment-btn' onClick={this.checkAndContinue}>Continue Payment</button>
                </>
            )}
            </div>
            </>
        )
    }
}

export default BookNow