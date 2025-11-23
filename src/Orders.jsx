import React from "react";
import './index.css'
import { connect } from "react-redux";
import { clearTableBill } from "./Action/index";
import Header from "./Container/Header";
import { useNavigate } from "react-router-dom";

const Orders = ({ orders, clearTableBill }) => {
  const navigate = useNavigate();
  const tables = Object.keys(orders); // ["1","2","3"]

  if (tables.length === 0) {
    return (
      <>
        <Header />

        <div className="container mt-4 text-center">
          <h3>No Orders Yet</h3>

          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/restorent")}
          >
            ⬅ Back to Items Page
          </button>
        </div>
      </>
    );
  }

  return (
    <div>
      <Header />

      <div className="container mt-4">
        {/* Back button */}
        <button
          className="btn btn-dark mb-3"
          onClick={() => navigate("/restorent")}
        >
          ⬅ Back to Items Page
        </button>

        {tables.map((table) => {
          const items = orders[table];
          const total = items.reduce((sum, i) => sum + i.price, 0);

          return (
            <div key={table} className="card p-3 mt-3 shadow-sm">
              <h4>🪑 Table {table} — Orders</h4>

              {items.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-between mt-2 p-2 border rounded order-item"
                >
                  {/* IMAGE */}
                  <img
                    src={item.url}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginRight: "10px",
                    }}
                  />

                  {/* NAME + PRICE */}
                  <div className="flex-grow-1">
                    <strong>{item.name}</strong>
                  </div>

                  <div>Rs. {item.price}</div>
                </div>
              ))}

              <hr />
              <h5>Total: Rs. {total}</h5>

              <button
                className="btn btn-success mt-3"
                onClick={() => {
                  alert(
                    `🧾 Bill Generated for Table ${table}\nTotal = Rs. ${total}`
                  );
                  clearTableBill(table);
                }}
              >
                Generate Bill
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orderreducer.orders,
});

export default connect(mapStateToProps, { clearTableBill })(Orders);
