import React from "react";

interface HeaderProps {
  addUser: Function;
}

interface HeaderState {
  fullName: string;
  email: string;
  status: string;
  statusList: Array<string>;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      status: "Active",
      statusList: ["Active", "Expired", "Band"],
    };
  }
  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    this.setState({
      ...this.state,
      [fieldName]: event.target.value,
    });
  };
  addUser = () => {
    this.props.addUser({
      fullName: this.state.fullName,
      email: this.state.email,
      status: this.state.status,
    });

    this.setState(() => ({
      fullName: "",
      email: "",
    }));
  };

  handleStatusSelect = (selected: string) => {
    this.setState((state, props) => ({
      status: selected,
    }));
  };
  render() {
    return (
      <div className="d-flex align-items-center p-3 my-4 bg-light">
        <h5 className="me-auto mb-0">Users</h5>
        <div className="d-flex">
          <input
            value={this.state.fullName}
            onChange={(e) => this.handleInputChange(e, "fullName")}
            type="text"
            placeholder="Full Name"
            className="form-control"
          />
          <input
            type="text"
            value={this.state.email}
            onChange={(e) => this.handleInputChange(e, "email")}
            placeholder="Email"
            className="form-control mx-3"
          />
          <select
            onChange={(e) => this.handleStatusSelect(e.target.value)}
            value={this.state.status}
            className="form-select text-capitalize"
          >
            {this.state.statusList.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <button onClick={this.addUser} className="btn btn-info text-white">
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
