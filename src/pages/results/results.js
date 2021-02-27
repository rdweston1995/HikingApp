//Node Imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import {withRouter} from "react-router-dom";

//Component
// import NavBar from "./../../components/navBar/navBar";
import NavBarPages from "./../../components/navBarPages/navBarAlt";
// import HikeDiv from "./../../components/hikeDiv/hikeDiv";
import HikeResults from "./../../components/hikeResults/hikeResults";
import HikeInfo from "./../../components/hikeInfo/hikeInfo";
import ImageModal from "./../../components/imageModal/imageModal";

//API
import Weather from "./../../api/weather";


//CSS
import "./results.css";

class Results extends React.Component{
    constructor(props) {
        super(...arguments);
        console.log(this.props);
        this.state = {
            displayBigImg: false,
            hikes: this.props.hikes,
            displayedHike: this.props.hikes[0],
            displayedHikeBigImg: this.props.hikes[0].imgMedium,
            displayedHikeWeather: {}
        }
    }

    // componentDidMount = async () => {
    //     Weather(this.state.hikes[0].location, this.state.hikes[0].latitude, this.state.hikes[0].longitude).then((data) => {
    //         console.log(data);
    //         this.setState({displayedHikeWeather: data});
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    //     console.log(this.state.displayedHikeWeather);
    // }

    componentDidMount = async () => {
        console.log(this.props.displayWeather);
    }

    /**
     * Displayed hike modal
     */
    hikeImgShow = () => {this.setState({displayBigImg: true})}
    hikeImgClose = () => {this.setState({displayBigImg: false})}

    hikeOnClick = async (hike) => {
        this.setState({displayedHike: hike});
        this.setState({displayedHikeBigImg: hike.imgMedium});
        Weather(this.state.displayedHike.location, this.state.displayedHike.latitude, this.state.displayedHike.longitude).then((data) => {
            this.setState({displayedHikeWeather: data});
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
        // console.log(this.state.displayedHike);
        console.log(this.state.displayedHikeWeather);
    }

    keyPressRoute = (e) => {
        if(e.key === 'Enter'){this.props.history.push('/results')}
    }


    render() {
        return(
            <div className="resultsPage hikeDiv">
                <NavBarPages 
                    onSearch={this.props.onSearch}
                    onKeyPress={this.props.onKeyPress}
                    keyPressRoute={this.keyPressRoute}
                    history={this.props.history} />
                {this.state.displayBigImg ?
                    <ImageModal
                        show={this.state.displayBigImg}
                        onClose={this.hikeImgClose}
                        onShow={this.hikeImgShow}
                        image={this.state.displayedHikeBigImg} /> : <></>
                    }
                <Row className="hikeResultsDiv">
                    <Col xs lg="3" className='hikeNameCol'>
                        {this.props.hikes.map(hike => 
                            <HikeResults
                                className="hikeNameResults"
                                name={hike.name}
                                location={hike.location}
                                onClick={() => this.hikeOnClick(hike)}
                                key={hike.key} />
                        )}
                    </Col>
                    <Col xs lg="9" className="hikeInfoCol">
                        <HikeInfo hike={this.state.displayedHike} imgClick={this.hikeImgShow} weather={this.state.displayedHikeWeather}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Results);