import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import './HomeStyle.css'
import image from "../../../src/photo/home.jpg"



import Header1 from '../SharedComponents/HeaderInfo'
import Profile_Header from '../SharedComponents/Profile-header'
import Footer from '../SharedComponents/Footer'
import REal_Estates from './Retrive_Real'
import Search from '../SharedComponents/Search'

const styles = {
    paperContainer: {
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%"
    },

};



class MoreInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            real_estates: [],
            card_id: localStorage.getItem("CardId"),
            userId: localStorage.getItem("userId")
        }
    }

    componentDidMount = () => {
        this.getReal_Estates()
    }

    getReal_Estates = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch(`https://mernrealestateproject.herokuapp.com/real-estate/retrieveReal-Estate/${this.state.card_id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ real_estates: data })
                console.log(data)
            })
    }

    render() {
        const { userId, real_estates } = this.state
        console.log("userid=", userId)
        console.log("id=", this.state.card_id)
        console.log("this real = ", this.state.real_estates)
        console.log("this real = ", real_estates.location)

        return (
            <div >
                <div id="home_bgMore" >
                    <Paper >
                        {
                            userId ?
                                <Profile_Header />

                                :
                                <Header1/>
                        }
                    </Paper>
                </div>
                <div id="formation" >
                    {/* <div class="container"> */}
                    <main>
                        <div class="row">
                            <div class="left col-lg-4">
                                <div id="forproinfo"><br /><br /><br />
                                    <h1 class="name">More Information</h1><br /><br /><br />
                                    <div id="forRow">
                                    <div class="photo-left">
                                        <img class="photoMore" src={real_estates.imageUrl} />
                                    </div><br /><br /><br /><br />
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <div id="forCol">
                                    <br /><br />
                                    <h3 class="info">The Real_Estate Type : &nbsp; {real_estates.real_type}</h3><br /><h3 class="info">It's For : &nbsp;{real_estates. isFor}</h3><br />
                                    <h3 class="info">Location : &nbsp;{real_estates.location}</h3><br />
                                    <h3 class="info">Full Address : &nbsp;{real_estates.full_Address}</h3><br />
                                    <h3 class="info">Real_Estate Description : &nbsp;{real_estates.description}</h3><br />
                                    <h3 class="info">Real_Estate price : &nbsp;{real_estates.price}{real_estates.currency}&nbsp;&nbsp;&nbsp;&nbsp; lowest_price : &nbsp;{real_estates.lowest_price}{real_estates.currency}</h3><br />
                                    <h3 class="info">Real_Estate Area  : &nbsp;{real_estates.area}</h3><br />
                                    <h3 class="info">owner_phoneNumber: &nbsp;{real_estates.owner_phoneNumber}</h3><br />
                                    <br /><br /><br />
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </main>
                    {/* </div> */}

                </div>


                <Footer />

            </div>
        )
    }

}

{/* <div id="forh" >
<h1>More Information</h1>
<h3>The Real_Estate Type : &nbsp; {real_estates.real_type}</h3>
<h3>Location : &nbsp;{real_estates.location}</h3>
<h3>Real_Estate Description : &nbsp;{real_estates.description}</h3>
<h3>Real_Estate price : &nbsp;{real_estates.price}{real_estates.currency}&nbsp;&nbsp;&nbsp;&nbsp; lowest_price : &nbsp;{real_estates.lowest_price}{real_estates.currency}</h3>
<h3>Real_Estate Area  : &nbsp;{real_estates.area}</h3>
<h3>owner_phoneNumber: &nbsp;{real_estates.owner_phoneNumber}</h3>
</div> */}

export default MoreInfo;