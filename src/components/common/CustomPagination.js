import React, {useState, useEffect} from 'react';
import {createUseStyles} from 'react-jss';

import Button from '../../components/common/Button';

const useStyles = createUseStyles({
    button: {
        borderRadius: `60px!important`,
        padding: `10px!important`,
        height: 50,
        width: 50,
        display: 'inline-block',
        '& + &': {
            marginLeft: 10,
        }
    },
});

const CustomPagination = (props) => {
    const [pageNumber, setPageNumber] = useState(props.pageNumber);
    const classes = useStyles();
    useEffect(() => {
        setPageNumber(props.pageNumber);
    }, [props.pageNumber]);

    const changePageHandler = (event, pageNumber) => {
        event.preventDefault();
        props.onClick(pageNumber);
    };

    const Items = () => {
        let active = pageNumber;
        const items = [];

        for (let number = 1; number <= props.max; number++) {
            items.push(
                <Button key={number} variant={'secondary'} isActive={number === active} className={classes.button}
                        onClick={(e) => changePageHandler(e, number)}>{number}</Button>,
            );
        }
        return props.max > 1 ? items : null;
    };

    return <Items/>;
};

CustomPagination.defaultProps = {
    pageNumber: 1,
    max: 1,
    onClick: (pageNumber) => {
    }
};

export default CustomPagination;
