import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import { connect } from "react-redux";

import ModalComp from "../ModalComp/ModalComp";
import { addNewMovie } from "../../Js/actions/actions";

class AddnewMovie extends Component {
  state = {
    isOpen: false
  };
  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });
  render() {
    return (
      <React.Fragment>
        <Card style={{ width: "20rem" }}>
          <CardImg
            top
            src={
              "https://www.pngarts.com/files/3/Plus-Symbol-PNG-Image-with-Transparent-Background.png"
            }
            alt="..."
            className="Card"
            onClick={() => this.toggle()}
          />
        </Card>
        <ModalComp
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          handleclick={this.props.addNewMovie}
        />
      </React.Fragment>
    );
  }
}
export default connect(null, { addNewMovie })(AddnewMovie);
