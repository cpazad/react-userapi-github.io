import React from 'react';
import user from '../user.png';

const Members = (user) => {
    return (
        <>
            <div className="col-md-3 my-3">
                    <div className="card shadow">
                        <img src={ user.member.avatar_url} alt="avatar" />
                        <div className="card-body">
                            <h3> { user.member.login}</h3>
                            <p>User Role</p>
                        </div>
                        <div className="card-footer">
                            <p> university of Dhaka </p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Members
