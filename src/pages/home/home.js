//NPM imports
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class home extends React.Component {
    state = {
        date: new Date()
    }


    render() {
        return (
            <Row className="homeRow">
                <Col>
                    <h1>Hiking App</h1>
                    <div>
                        <InputGroup className="mb-5">
                            <FormControl aria-describedby="basic-addon2" />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2>It is {this.state.date.toString()}</h2>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default home;