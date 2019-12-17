import React, { Component } from "react";

const asTab = Wrapped => {
  class Wrapper extends Component {
    render() {
      return <Wrapped {...this.props} />;
    }
  }
  Wrapper.displayName = `Tab(${Wrapped.displayName})`;

  return Wrapper;
};

export default asTab;
