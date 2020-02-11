import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import {connect} from 'react-redux';
import {createUseStyles} from 'react-jss';

import {fetchCases} from '../../../actions/cases';
import {getMarginClasses} from '../../../tools/helper';
import CaseItem from '../../../scenes/Cases/Item';

const useStyles = createUseStyles({
    carousel: {
        marginBottom: 30,
    },
});

const ModuleCaseTeaser = (props) => {
    const classes = useStyles();

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');
    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    const [cases, setCases] = useState(props.cases);
    useEffect(() => {
        if (props.cases.length > 0) {
            setCases(props.cases);
        }
    }, [props.cases]);

    useEffect(() => {
        props.fetchCases();
    }, [props.match]);

    return <div className={`${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            <Carousel controls={false} className={classes.carousel} interval={null}>
                {[...cases].splice(0, 3).map((item, index) => {
                    return <Carousel.Item key={index}><CaseItem item={item}/></Carousel.Item>;
                })}
            </Carousel>
        </Container>
    </div>;

};

ModuleCaseTeaser.defaultProps = {
    module: {},
    cases: [],
};

const mapStateToProps = (state) => {
    return {
        cases: state.cases,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCases: () => {
            dispatch(fetchCases());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModuleCaseTeaser);
