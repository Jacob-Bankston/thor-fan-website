import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Menu extends Component {
  render() {
    return (
      <NavLink to="/">
        <h1>thor</h1>
      </NavLink>
    );
  }
}

export class Footer extends Component {
  render() {
    return <div>ɹoɥʇ</div>;
  }
}

export class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
