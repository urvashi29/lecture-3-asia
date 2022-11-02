// https://jsonplaceholder.typicode.com/users

import React, { Component } from "react";
import axios from "axios";

export default class ApiData extends Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        // api calls

        // axios.get(url).then(callback).catch(callback);

        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            console.log(res.data);
            this.setState({
                users: res.data
            });

        }).catch(err => console.log(err));
    }


    render() {

        const usersData = this.state.users.map((info => {
            return (
                <React.Fragment key={info.id}>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{info.username}</h5>
                            <p className="card-text"> <p>{info.name}</p>
                                <p>{info.email}</p>
                                <p>{info.phone}</p>

                                <p>{info.address.street}</p></p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </React.Fragment>
            )
        }));
        return (
            <>
                {usersData}
            </>
        )
    }
}
