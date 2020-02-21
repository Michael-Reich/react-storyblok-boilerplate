import React from 'react';
import {createUseStyles} from 'react-jss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {faSquare} from '@fortawesome/free-regular-svg-icons';

const useStyles = createUseStyles({
    icon: {
        cursor: 'pointer',
    },
});

const CustomCheckBox = (props) => {

    const classes = useStyles();

    return <span>
        <input type="checkbox"
                        required={props.required}
                        style={{display: 'none'}}
                        checked={props.checked}
                        onChange={props.onChange}/>
                        <FontAwesomeIcon icon={props.checked ? faCheckSquare : faSquare} onClick={props.onChange} className={`${classes.icon} ${props.className}`} style={props.style}/>
    </span>;
};

CustomCheckBox.defaultProps = {
    checked: false,
    required: false,
    className: '',
    style: {},
    onClick: ()=>{},
    onChange: ()=>{},
};

export default CustomCheckBox;
