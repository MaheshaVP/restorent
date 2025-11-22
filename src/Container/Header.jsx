import React from "react";
import '../index.css';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ orderCount }) => {
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <a className="navbar-brand">TasteCraft Restaurant</a>

      <Link to="/orders">
        <button className="btn btn-primary">
          Orders <span className="badge bg-secondary">{orderCount}</span>
        </button>
      </Link>
    </nav>
  );
};

const mapStateToProps = (state) => {
  const allOrders = Object.values(state.orderreducer.orders);  
  const totalCount = allOrders.reduce((sum, arr) => sum + arr.length, 0);

  return {
    orderCount: totalCount
  };
};

export default connect(mapStateToProps)(Header);
