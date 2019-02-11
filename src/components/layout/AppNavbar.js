import React, { Component } from "react";
import { Link } from "react-router-dom";
class AppNavbar extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;
    console.log(auth);

    // if (auth.uid) {
    //   return { isAuthenticated: true };
    // } else {
    //   return { isAuthenticated: false };
    // }
  }

  render() {
    const { isAuthenticated } = this.state;
    const { auth } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            { /*<a href="index.html">
                        <img src="img/logo.png" alt="Logo Bce-Find" class="headerLogo">
    </a> */}
            <nav class="navbar navbar-expand-lg ">
              <ul class="navbar-nav  mainMenu">
                <li className=" nav-item">
                  <Link
                    to={"/"}
                    title="Accessibility Checker"
                  > Accessibility Checker
                </Link>
                </li>
                <li className=" nav-item">
                  <Link
                    to={"/"}
                    title="Accessibility Checker"
                  > About Us
                </Link>
                </li>
                <li className=" nav-item">
                  <Link
                    to={"/"}
                    title="Accessibility Checker"
                  > Conctac Us
                </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default AppNavbar;
