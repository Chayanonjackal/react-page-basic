import React, { Component } from "react";
import classes from "./App.module.css";
import ProductPreview from "./components/ProductPreview";
import ProductDetail from "./components/ProductDetail";
import TopBar from "./components/TopBar";
import ProductData from "./resource/ProductData";

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  };

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos:pos})
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature:pos})
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <div className={classes.MainContainer}>
          <ProductPreview
            currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
            currentSelectedFeature={this.state.currentSelectedFeature}
          />
          <ProductDetail 
            data={this.state.productData} 
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onColorOptionClick={this.onColorOptionClick}
            onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature}
            />
        </div>
      </div>
    );
  }
}

export default App;
