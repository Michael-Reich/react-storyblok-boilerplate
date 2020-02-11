import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form';
import {createUseStyles} from 'react-jss';

import {setCasesFilter, setCasesFilterItemsPerPage, setCasesPage} from '../../actions/casesFilter';
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
        props.setPage(1);
    };

    return <div className={props.className} style={props.style}>
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group>
                <InputText className={classes.p} type="text" value={props.filter.filter.text}
                           onChange={changeTextHandler}
                           placeholder={'Suche starten'}/>
            </Form.Group>
        </Form></div>;
};

CasesFilter.defaultProps = {
    className: '',
    style: {},
    filter: {},
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => {
            dispatch(setCasesFilter(filter));
        },
        setPage: (page) => {
            dispatch(setCasesPage(page));
        },
        setFilterItemsPerPage: (items) => {
            dispatch(setCasesFilterItemsPerPage(items));
        },
    };
};

export default connect(null, mapDispatchToProps)(CasesFilter);
