import React from "react";
import '../index.css';
import { connect } from "react-redux";

const Filter = ({ filter_name, setFilter }) => {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center flex-wrap filter-container">

        {/* ALL ITEMS */}
        <button
          className={`btn m-2 ${
            filter_name === "All Items" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilter("All Items")}
        >
          All Items
        </button>

        {/* RICE */}
        <button
          className={`btn m-2 ${
            filter_name === "pizza" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilter("pizza")}
        >
          Pizza
        </button>

        {/* COOL DRINKS */}
        <button
          className={`btn m-2 ${
            filter_name === "cool_drinks"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setFilter("cool_drinks")}
        >
          Cool Drinks
        </button>

        {/* HOT DRINKS */}
        <button
          className={`btn m-2 ${
            filter_name === "hot_drinks"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
          onClick={() => setFilter("hot_drinks")}
        >
          Hot Drinks
        </button>

        {/* PIZZA */}
        <button
          className={`btn m-2 ${
            filter_name === "rice" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilter("rice")}
        >
          Rice Items
        </button>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  filter_name: state.filterreducer.filter_name,
});

const mapDispatch = (dispatch) => ({
  setFilter: (value) => dispatch({ type: "SET_FILTER", payload: value }),
});

export default connect(mapState, mapDispatch)(Filter);
