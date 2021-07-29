import React, {useState} from 'react';
import MemberSelectOptions from "../team_members/MemberSelectOptions";
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {addLogs} from "../../actions/logActions";
import M from 'materialize-css/dist/js/materialize.min'

const AddLogModal = ({addLogs}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [member, setMember] = useState('')

    const onSubmit = () => {
        if (message === '' || member === '') {
            M.toast({html: 'please enter message and team mate'})
        } else {
            const newLog = {
                message,
                attention,
                member
            }
            addLogs(newLog)
            M.toast({html: `log added by ${member}`})
            //clear fields
            setMessage('')
            setAttention(false)
            setMember('')
        }

    }

    return (
        <div id={'add-log-modal'} className={'modal'} style={modalStyle}>
            <div className="modal-content">
                <h4>enter task</h4>
                <div className="row">
                    <div className="input-field">

                        <input type="text"
                               name={'message'}
                               value={message}
                               onChange={e => setMessage(e.target.value)}/>
                        <label htmlFor="{'message'}" className={'active'}>task message</label>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">

                        <select name="tech"
                                value={member}
                                className='browser-default'
                                onChange={e => setMember(e.target.value)}>
                            <option value="" disabled>select team mate</option>
                            <MemberSelectOptions/>
                        </select>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox"
                                       className={'filled-in'}
                                       checked={attention}
                                       value={attention}
                                       onChange={e => setAttention(!attention)}/>
                                <span>Need Attention</span>
                            </label>
                        </p>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className={'modal-close waves-effect blue waves-light btn'}>Enter</a>
            </div>
        </div>
    );
};

AddLogModal.propTypes = {
    addLogs: PropTypes.func.isRequired,
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default connect(null, {addLogs})(AddLogModal);
