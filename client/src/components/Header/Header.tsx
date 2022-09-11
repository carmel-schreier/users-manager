import React from "react";

interface HeaderProps {}

interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  // state = { :  }
  render() {
    return (
      <div className="d-flex align-items-center p-3 my-4 bg-light">
        <h5 className="me-auto mb-0">Users</h5>
        <div className="d-flex">
          <input type="text" placeholder="Full Name" className="form-control" />
          <input
            type="text"
            placeholder="Email"
            className="form-control mx-3"
          />
          <button className="btn btn-info text-white">Add</button>
        </div>
      </div>
    );
  }
}

export default Header;
