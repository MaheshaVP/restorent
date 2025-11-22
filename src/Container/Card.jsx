import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addorder } from "../Action";
import '../index.css';

const Card = ({ filter_name, addorder, table_number }) => {
  const [data, setData] = useState([]);
  const [cloneData, setCloneData] = useState([]);

  // Fetch items
  useEffect(() => {
    fetch("https://create-aa2ba-default-rtdb.firebaseio.com/items.json")
      .then((res) => res.json())
      .then((json) => {
        const arr = json;
        setData(arr);
        setCloneData(arr);
      })
      .catch((err) => console.log("API Error:", err));
  }, []);

  // Apply filter
  useEffect(() => {
    if (filter_name === "All Items") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setData(cloneData);
    } else {
      const filtered = cloneData.filter(
        (item) =>
          item.category?.toLowerCase().trim() ===
          filter_name.toLowerCase().trim()
      );
      setData(filtered);
    }
  }, [filter_name, cloneData]);

  // Handle order
  const handleOrder = (item) => {
    if (!table_number) {
      alert("⚠️ Please select a table number before ordering.");
      return;
    }

    addorder({ ...item, table_number });
    alert(`✅ "${item.name}" added for Table ${table_number}`);
  };

  return (
    <div className="container mt-4 pb-5">
      <div className="row g-4">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex card-col"
              key={`${item.category}-${item.id}`}
            >
              <div
                className="card shadow-sm w-100 h-100"
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <img
                  src={item.url}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column">
                  <h6 className="card-title fw-bold">{item.name}</h6>

                  <p className="mb-2 text-success fw-semibold">
                    ₹ {item.price}
                  </p>

                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => handleOrder(item)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center mt-5 text-danger">No Items Found</h4>
        )}
      </div>
    </div>
  );
};

const mapState = (state) => ({
  filter_name: state.filterreducer.filter_name,
  table_number: state.tablereducer.table_number,
});

export default connect(mapState, { addorder })(Card);
