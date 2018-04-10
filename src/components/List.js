import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }
  componentDidMount() {
    axios
      .get("http://texpertise.in/data.php")
      .then(res => {
        console.log(res);
        this.setState({ list: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.list);
    return (
      <div className="cards">
        {this.state.list.map((res, index) => {
          console.log(res.name, "ddddddd");
          return (
            <div key={index} className="card" style={{ padding: 20 }}>
              <div
                className="demo-card-square mdl-card mdl-shadow--2dp"
                style={{ margin: "auto" }}
              >
                <div className="mdl-card__title mdl-card--expand">
                  <h2 className="mdl-card__title-text" />
                </div>
                <div className="mdl-card__supporting-text">
                  <div className="name-title">{res.name}</div>
                </div>
                <div className="mdl-card__actions mdl-card--border button_gap">
                  <span>
                    {res.nonVeg ? (
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
                    {res.spicy && (
                      <span>
                        <img
                          style={{ width: "20px", height: "20px" }}
                          src="./images/chilli.png"
                        />
                        Spicy
                      </span>
                    )}
                  </span>
                  <Link
                    to={`/${index}`}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
