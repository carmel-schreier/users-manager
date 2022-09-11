import React from "react";
import Header from "../Header/Header";
import Table from "../Table/Table";

interface UsersProps {}

interface UsersState {}

class Users extends React.Component<UsersProps, UsersState> {
  render() {
    return (
      <div className="bg-dark bg-opacity-10 border px-2">
        <Header />
        <Table />
      </div>
    );
  }
}

export default Users;
