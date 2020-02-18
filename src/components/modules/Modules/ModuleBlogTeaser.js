import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {connect} from 'react-redux';

import {entityName} from '../../../entities/blog';
import {fetchItems} from '../../../actions/blog';
import {getMarginClasses} from '../../../tools/helper';
import Item from '../../../scenes/Blog/Item';
import {tools} from '../../../tools/styles';

const ModuleBlogTeaser = (props) => {

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');
    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    const [items, setItems] = useState(props.items);

    const sortFn = (a, b) => new Date(b.content.date) - new Date(a.content.date);

    useEffect(() => {
        if (props.items && props.items.length > 0) {
            let tempItems = [];

            tempItems = props.items;
            try{tempItems.sort(sortFn);} catch(e){}

            // if (module.content && module.content.sort === 'desc') {
            //     tempItems.reverse();
            // }
            setItems(tempItems);
        }
    }, [props.items]);

    useEffect(() => {
        props.fetchItems();
    }, [props.match]);

    return <div className={`${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            {items.length > 0 && <Row className={'h-100'}>
                {[...items].splice(0, 3).map((itm, index) => {
                    return <Col lg={4} md={6} key={index} style={{marginBottom: tools.margin,}}>
                        <Item item={itm}/>
                    </Col>;
                })}
            </Row>}
        </Container>
    </div>;

};

ModuleBlogTeaser.defaultProps = {
    module: {},
    items: [],
};

const mapStateToProps = (state) => {
    return {
        items: state[entityName].items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => {
            dispatch(fetchItems());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModuleBlogTeaser);
