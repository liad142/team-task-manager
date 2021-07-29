import React, {useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getMembers} from "../../actions/memberActions";


const MemberSelectOptions = ({getMembers, member: {members, loading}}) => {


    useEffect(() => {
        getMembers()
        //eslint-disable-next-line
    }, [])


    return (
        !loading && members !== null && members.map(mem =>
            <option key={mem.id} value={`${mem.firstName} ${mem.lastName}`}>
                {mem.firstName} {mem.lastName}
            </option>)

    );
}

MemberSelectOptions.propTypes = {
    member: PropTypes.object.isRequired,
    getMembers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    member: state.member
})

export default connect(mapStateToProps, {getMembers})(MemberSelectOptions);
