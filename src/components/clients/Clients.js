import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "12151561",
        firstName: "Raphael",
        lastName: "Andrade",
        email: "raphaelAndrade@gmail.com",
        balance: "30"
      },
      {
        id: "987545",
        firstName: "Thais",
        lastName: "Maia",
        email: "thaisMaia@gmail.com",
        balance: "40"
      },
      {
        id: "8521454",
        firstName: "Polina",
        lastName: "Linda",
        email: "polinaLinda@gmail.com",
        balance: "560.43"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" />
                Clients{" "}
              </h2>
            </div>
            <div className="col-md-6">{/* <span>Total</span> */}</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Balance</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {clients.map(client => (
                    <tr key={client.id}>
                      <td>
                        {client.firstName} {client.lastName}
                      </td>
                      <td>{client.email}</td>
                      <td>${parseFloat(client.balance).toFixed(2)}</td>
                      <td>
                        <Link
                          to={`/client/${client.id}`}
                          className="btn btn-secondary btn-sm"
                        >
                          <i className="fas fa-arrow-circle-right" /> Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
export default Clients;
