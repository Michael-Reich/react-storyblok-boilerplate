import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form';
import {createUseStyles} from 'react-jss';

import {setFilter, setFilterItemsPerPage, setPageNumber} from '../../actions/blog';
import {mixins} from '../../tools/styles';
import InputText from '../../components/common/InputText';

const useStyles = createUseStyles({
    p: {
        ...mixins.p,
    },
});

const BlogFilter = (props) => {
    const classes = useStyles();

    useEffect(() => {
        const newPageSize = parseInt(props.pageSize, 10);
        if (newPageSize > 0) {
            props.setFilterItemsPerPage(newPageSize);
        }
    }, [props.pageSize]);

    const changeTextHandler = (event) => {
        let newText = '';

        if (event.currentTarget.value) {
            newText = event.currentTarget.value;
        }

        props.setFilter({
            ...props.filter,
            text: event.currentTarget.value,
        });
        props.setPageNumber(1);
    };

    return <div className={props.className} style={props.style}>
        <Form onSubmit={(e) => e.preventDefault()}>
                <InputText className={classes.p} type="text" value={props.filter.text}
                           onChange={changeTextHandler}
                           placeholder={'Suche starten'}/>
        </Form>
    </div>;
};

BlogFilter.defaultProps = {
    className: '',
    style: {},
    filter: {},
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => {
            dispatch(setFilter(filter));
        },
        setPageNumber: (pageNumber) => {
            dispatch(setPageNumber(pageNumber));
        },
        setFilterItemsPerPage: (items) => {
            dispatch(setFilterItemsPerPage(items));
        },
    };
};

export default connect(null, mapDispatchToProps)(BlogFilter);
