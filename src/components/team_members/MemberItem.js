import React from 'react';
import PropTypes from 'prop-types';

const MemberItem = ({member}) => {
    return (
        <li className={'collection-item'}>
            <div>
                {member.firstName} {member.lastName}
                <a href="#!" className={'secondary-content'}>
                    <i className="material-icons red-text">delete</i>
                </a>
            </div>

        </li>
    );
};

MemberItem.propTypes = {
    member:PropTypes.object.isRequired,
};

export default MemberItem;
