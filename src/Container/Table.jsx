import React from "react";
import '../index.css';
import { connect } from "react-redux";
import { settablenumber } from "../Action/index";

const Table = ({ table_number, settablenumber }) => {
  const numbers = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div>
      <center className="mt-2 table-buttons">
        <h4>Please select your table number</h4>

        {numbers.map((num) => (
          <button
            key={num}
            className={
              table_number === num
                ? "btn btn-primary m-2"
                : "btn btn-outline-primary m-2"
            }
            onClick={() => settablenumber(num)}
          >
            {num}
          </button>
        ))}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  table_number: state.tablereducer.table_number,
});

export default connect(mapStateToProps, { settablenumber })(Table);
