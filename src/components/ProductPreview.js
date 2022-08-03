import React from "react";
import classes from "./../components/ProductPreview.module.css";

const currntHour =
  new Date().getHours() > 9
    ? new Date().getHours()
    : "0" + new Date().getHours();
const currentMinute =
  new Date().getMinutes() > 9
    ? new Date().getMinutes()
    : "0" + new Date().getMinutes();

const ProductPreview = (props) => {
  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentPreviewImage} alt="Product Preview" />
      {props.currentSelectedFeature === 1 ? (
        <div className={classes.HeartBeatSection}>
          <i className="fas fa-heartbeat"></i>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${currntHour}:${currentMinute}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
