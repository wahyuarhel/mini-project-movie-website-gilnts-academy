import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserDetail } from "../Redux/actions/UserActions";

const UserDetail = ({ user, getUserDetail }) => {
    const { id } = useParams();

    useEffect(() => {
        getUserDetail(id)
    }, [getUserDetail, id])

    return (
        <div>
            {/* {users !== 0 ? users.map((users))}
            <h3>{user.username}</h3> */}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserDetail: (id) => dispatch(getUserDetail(id)),

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
