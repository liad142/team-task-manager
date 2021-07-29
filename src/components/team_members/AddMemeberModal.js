import React, {useState} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {addMember} from "../../actions/memberActions";
import M from 'materialize-css/dist/js/materialize.min'

const AddMemberModal = ({addMember}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({html: 'please enter first and last name'})
        } else {
            addMember({
                firstName,
                lastName
            })
            M.toast({html:`${firstName} ${lastName}have been added to the team`})

            //clear fields
            setFirstName('')
            setLastName('')
        }
    }

    return (
        <div id={'add-tech-modal'} className={'modal'}>
            <div className="modal-content">
                <h4>New Team Member</h4>

                <div className="row">
                    <div className="input-field">

                        <input type="text"
                               name={'firstName'}
                               value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor="{'firstName'}" className={'active'}>First Name</label>

                    </div>
                </div>

                <div className="row">
                    <div className="input-field">

                        <input type="text"
                               name={'lastName'}
                               value={lastName}
                               onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor="{'firstName'}" className={'active'}>First Name</label>

                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className={'modal-close waves-effect blue waves-light btn'}>Enter</a>
            </div>
        </div>
    );
};
AddMemberModal.propTypes = {
    addMember : PropTypes.func.isRequired,
}


export default connect(null,{addMember})(AddMemberModal);
