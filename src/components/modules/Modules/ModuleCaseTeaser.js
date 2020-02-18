import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import {connect} from 'react-redux';
import {createUseStyles} from 'react-jss';

import {entityName} from '../../../entities/cases';
import {fetchItems} from '../../../actions/cases';
import {getMarginClasses} from '../../../tools/helper';
import Item from '../../../scenes/Cases/Item';
import {tools} from '../../../tools/styles';

const useStyles = createUseStyles({
    carousel: {
        marginBottom: tools.margin,
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

    const [items, setItems] = useState(props.items);
    useEffect(() => {
        if (props.items && props.items.length > 0) {
            setItems(props.items);
        }
    }, [props.items]);

    useEffect(() => {
        props.fetchItems();
    }, [props.match]);

    return <div className={`${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            {items.length > 0 && <Carousel controls={false} className={classes.carousel} interval={null}>
                {[...items].splice(0, 3).map((itm, index) => {
                    return <Carousel.Item key={index}><Item item={itm}/></Carousel.Item>;
                })}
            </Carousel>}
        </Container>
    </div>;

};

ModuleCaseTeaser.defaultProps = {
    module: {},
    items: [],
};

const mapStateToProps = (state) => {
    return {
        items: state[entityName],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => {
            dispatch(fetchItems());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModuleCaseTeaser);
