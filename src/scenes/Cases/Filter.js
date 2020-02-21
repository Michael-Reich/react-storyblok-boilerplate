import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form';
import {createUseStyles} from 'react-jss';

import {setFilter, setFilterItemsPerPage, setPageNumber} from '../../actions/cases';
import {mixins} from '../../tools/styles';
import InputText from '../../components/common/InputText';

const useStyles = createUseStyles({
    p: {
        ...mixins.p,
    },
});

const CasesFilter = (props) => {
    const classes = useStyles();

    useEffect(() => {
        const newPageSize = parseInt(props.pageSize, 10);
        if (newPageSize > 0) {
            props.setFilterItemsPerPage(newPageSize);
        }
    }, [props.pageSize]);

    const changeTextHandler = (event) => {
        props.setFilter({
            ...props.filter.filter,
            text: event.currentTarget.value,
        });
        props.setPageNumber(1);
    };

    return <div className={props.className} style={props.style}>
        <Form onSubmit={(e) => e.preventDefault()}>
            <InputText className={classes.p} type="text" value={props.filter.text}
                       onChange={changeTextHandler}
                       placeholder={'Suche starten'}
                       isLoading={props.isLoading}/>
        </Form></div>;
};

CasesFilter.defaultProps = {
    className: '',
    style: {},
    filter: {},
    isLoading: false,
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => {
            dispatch(setFilter(filter));
        },
        setPageNumber: (page) => {
            dispatch(setPageNumber(page));
        },
        setFilterItemsPerPage: (items) => {
            dispatch(setFilterItemsPerPage(items));
        },
    };
};

export default connect(null, mapDispatchToProps)(CasesFilter);
