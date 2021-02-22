//Node Imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import {withRouter} from "react-router-dom";

//Component
// import NavBar from "./../../components/navBar/navBar";
import NavBarPages from "./../../components/navBarPages/navBarAlt";
import HikeDiv from "./../../components/hikeDiv/hikeDiv";
import HikeResults from "./../../components/hikeResults/hikeResults";
import HikeInfo from "./../../components/hikeInfo/hikeInfo";
import ImageModal from "./../../components/imageModal/imageModal";


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
            displayedHikeBigImg: this.props.hikes[0].imgMedium
        }
    }
    
    /**
     * Displayed hike modal
     */
    hikeImgShow = () => {this.setState({displayBigImg: true})}
    hikeImgClose = () => {this.setState({displayBigImg: false})}

    hikeOnClick = async (hike) => {
        this.setState({displayedHike: hike});
        this.setState({displayedHikeBigImg: hike.imgMedium});

        console.log(this.state.displayedHike);
    }


    render() {
        return(
            <div className="resultsPage hikeDiv">
                <NavBarPages />
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
                        <HikeInfo hike={this.state.displayedHike} imgClick={this.hikeImgShow} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Results;