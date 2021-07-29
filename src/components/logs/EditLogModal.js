import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateLogs} from "../../actions/logActions";
import M from 'materialize-css/dist/js/materialize.min'

const EditLogModal = ({current,updateLogs}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [member, setMember] = useState('')

    useEffect(()=>{
        if (current){
            setMessage(current.message)
            setAttention(current.attention)
            setMember(current.member)
        }
    },[current])

    const onSubmit = () =>{
        if (message === '' || member === ''){
            M.toast({html:'please enter message and team mate'})
        }else{
            const newLogAfterUpdate = {
                id:current.id,
                message,
                attention,
                member,
                date: new Date()
            }
            updateLogs(newLogAfterUpdate)
            M.toast({html:`log updated by ${member}`})

            //clear fields
            setMessage('')
            setAttention(false)
            setMember('')
        }

    }

    return (
        <div id={'edit-log-modal'} className={'modal'} style={modalStyle}>
            <div className="modal-content">
                <h4>enter task</h4>
                <div className="row">
                    <div className="input-field">

                        <input type="text"
                               name={'message'}
                               value={message}
                               onChange={e => setMessage(e.target.value)}/>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field">

                        <select name="tech"
                                value={member}
                                className='browser-default'
                                onChange={e => setMember(e.target.value)}>
                            <option value="" disabled>select team mate</option>
                            <option value="Liad ohayon" >Liad ohayon</option>
                            <option value="eden ohayon" >eden ohayon</option>
                            <option value="lavie ohayon" >lavie ohayon</option>

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

const modalStyle = {
    width: '75%',
    height: '75%'
}

EditLogModal.propTypes = {
    current:PropTypes.object,
    updateLogs:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    current:state.log.current
})

export default connect(mapStateToProps,{updateLogs})(EditLogModal);
