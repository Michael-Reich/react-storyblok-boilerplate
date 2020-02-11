import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {connect} from 'react-redux';

import {fetchBlog} from '../../../actions/blog';
import {getMarginClasses} from '../../../tools/helper';
import Item from '../../../scenes/Blog/Item';

const ModuleBlogTeaser = (props) => {

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');
    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    const [blog, setBlog] = useState(props.blog);

    const sortFn = (a, b) => new Date(b.content.date) - new Date(a.content.date);

    useEffect(() => {
        if (props.blog.length > 0) {
            let tempBlog = [];

            tempBlog = props.blog;
            try{tempBlog.sort(sortFn);} catch(e){}

            // if (module.content && module.content.sort === 'desc') {
            //     tempBlog.reverse();
            // }
            setBlog(tempBlog);
        }
    }, [props.blog]);

    useEffect(() => {
        props.fetchBlog();
    }, [props.match]);

    return <div className={`${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            <Row className={'h-100'}>
                {[...blog].splice(0, 3).map((item, index) => {
                    return <Col lg={4} md={6} key={index} style={{marginBottom: 30,}}>
                        <Item item={item}/>
                    </Col>;
                })}
            </Row>
        </Container>
    </div>;

};

ModuleBlogTeaser.defaultProps = {
    module: {},
    blog: [],
};

const mapStateToProps = (state) => {
    return {
        blog: state.blog,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlog: () => {
            dispatch(fetchBlog());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModuleBlogTeaser);
