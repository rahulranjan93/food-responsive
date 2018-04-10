import React from "react";
import axios from "axios";
export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: []
    };
  }
  componentDidMount() {
    axios
      .get("http://texpertise.in/data.php")
      .then(res => {
        console.log(res);
        this.setState({ detail: res.data[this.props.match.params.id] });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.props);
    console.log(this.state.detail);
    return (
      <div className="body">
        <img src="./images/Capture.png" style={{ margin: 30 }} />
        <div style={{ margin: "30px 0" }}>
          <div style={{ fontSize: 40, fontFamily: "Arvo", margin: 20 }}>
            {this.state.detail.name}
          </div>
          <div style={{ fontSize: 15, fontFamily: "Lato", margin: 20 }}>
            <div
              dangerouslySetInnerHTML={{
                __html: this.state.detail.description
              }}
            />
            <hr />
            <span>
              {this.state.detail.nonVeg ? (
                <span>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="./images/nonveg.png"
                  />
                  Non-Veg
                </span>
              ) : (
                <span>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="./images/veg.png"
                  />
                  Veg
                </span>
              )}
              {this.state.detail.spicy && (
                <span>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="./images/chilli.png"
                  />
                  Spicy
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
