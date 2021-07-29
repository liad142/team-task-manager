import React,{useState,useEffect} from 'react';
import MemberItem from "./MemberItem";
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {getMembers} from "../../actions/memberActions";


const MemberListModal = ({getMembers,member:{members,loading}}) => {

    useEffect(() => {
        getMembers()
        //eslint-disable-next-line
    }, [])

    return (
        <div id={'tech-list-modal'} className={'modal'}>
            <div className="modal-content">
                <h4>Team Members List</h4>
                <ul className="collection">
                    {!loading &&
                    members !== null &&
                    members.map(member => (
                        <MemberItem member={member} key={member.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
MemberListModal.propTypes = {
    member:PropTypes.object.isRequired,
    getMembers:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    member:state.member
})

export default connect(mapStateToProps,{getMembers})(MemberListModal);
