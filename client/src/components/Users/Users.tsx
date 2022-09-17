import React from "react";
import Header from "../Header/Header";
import Table from "../Table/Table";

export type StatusType = "active" | "expired" | "banned";

export interface IUser {
  fullName: string;
  email: string;
  status: StatusType;
  _id?: string;
}
interface UsersState {
  users: Array<IUser>;
  //addSuccess: boolean;
}

//interface UsersProps {}

interface UsersState {
  users: Array<IUser>;
}

class Users extends React.Component<{}, UsersState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <div className="bg-dark bg-opacity-10 border px-2">
        <Header />
        {this.state.users.length === 0 && (
          <div className="alert alert-warning" role="alert">
            No users to display
          </div>
        )}
        <Table users={this.state.users} />
      </div>
    );
  }
}

export default Users;
