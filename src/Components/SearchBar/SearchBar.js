import React from "react";
import { Input, Row, Col } from "reactstrap";
import { connect } from "react-redux";

//import "./SearchBar.css";
import Rating from "../Rating/Rating";
import { searchHandler } from "../../Js/actions/actions";

const SearchBar = ({ searchHandler, minRate }) => {
  return (
    <Row className="search-bar">
      <Col md={6}>
        <Input
          type="text"
          placeholder="Type movie name to search "
          onChange={e => searchHandler(e.target.value)}
          className="input"
        />
      </Col>
      <Col md={4}>
        <Rating count={minRate} />
      </Col>
    </Row>
  );
};
const mSTP = state => ({
  minRate: state.movieReducer.ratingSearch
});
export default connect(mSTP, { searchHandler })(SearchBar);
