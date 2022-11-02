import React from "react";

const Display = ({ personData }) => {

    const personList = personData.map(user => {
        return (
            <React.Fragment key={user.contact}>
                {/* Bootstrap 5 */}
                <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{user.firstname}</h5>
                        <p className="card-text">{user.age}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </React.Fragment>
        )
    });

    return (
        <>
            {personList}
        </>
    )
}

export default Display;