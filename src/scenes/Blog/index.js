import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss';
import {Element, scroller} from 'react-scroll';

import CustomSpinner from '../../components/common/CustomSpinner';
import {fetchBlogPage} from '../../actions/blogPage';
import {fetchBlog} from '../../actions/blog';
import {setBlogPage} from '../../actions/blogFilter';
import {fetchBlogFilteredItems} from '../../actions/blogFilteredItems';
import {mixins, tools} from '../../tools/styles';
import Item from './Item';
import Filter from './Filter';
import Spacer from '../../components/common/Spacer';
import CustomHelmet from '../../components/common/CustomHelmet';
import ModulesWrapper from '../../components/modules/ModulesWrapper';
import CustomPagination from '../../components/common/CustomPagination';

const useStyles = createUseStyles({
    h1: {
        ...mixins.h1,
    },
    pSearch: {
        ...mixins.p,
    },
});

const Blog = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props.fetchItems();
        props.fetchPage();
    }, [props.location]);

    const [filteredItems, setFilteredItems] = useState([]);
    const [page, setPage] = useState({});
    const [modules, setModules] = useState([]);

    useEffect(() => {
        if (props.items.length > 0) {
            if (props.filter.filter && !props.filter.filter.text) {
                setFilteredItems(props.items);
            }
        }
    }, [props.items, props.filter]);

    useEffect(() => {
        if (props.filter.filter.text) {
            props.fetchFilteredItems(props.filter.filter.text);
        }
    }, [props.filter.filter.text]);

    useEffect(() => {
        if (props.filter.filter && props.filter.filter.text) {
            setFilteredItems(props.filteredItems);
        }
    }, [props.filteredItems, props.filter]);

    useEffect(() => {
        if (props.page.length > 0) {
            setPage(props.page[0]);
            if (props.page[0].content && props.page[0].content.body) {
                setModules(props.page[0].content.body);
            }
        }
    }, [props.page]);

    const paginationOnClickHandler = (page) => {
        scroller.scrollTo('scrollAnchor', {
            duration: 500,
            delay: 0,
            offset: -113,
            smooth: true,
        });
        props.setPage(page);
    };

    return <div>
        <CustomHelmet metaFields={page.content ? page.content.metaFields : {}} page={page}/>
        {modules.length > 0 && <ModulesWrapper modules={modules}/>}
        <Spacer/>
        <Container>
            {page && page.content && <Row>
                <Col md={9}>
                    <h1 className={classes.h1}>{page.content.headline}</h1>
                    <Spacer/>
                    {page.content.hasSearch && <Filter filter={props.filter} pageSize={page.content.pageSize}/>}
                    <Spacer/>
                </Col>
            </Row>}

            {!filteredItems.length ? <Row><Col>
                <CustomSpinner/>
            </Col></Row> : <div>
                <Element name="scrollAnchor"/>
                {filteredItems.length > 0 && <div>
                    <Row className={'h-100'}>
                        {[...filteredItems].splice((props.filter.page - 1) * props.filter.items_per_page, props.filter.items_per_page).map((itm, index) => {
                            return <Col lg={4} md={6} key={index} style={{marginBottom: tools.margin,}}>
                                <Item item={itm}/>
                            </Col>;
                        })}
                    </Row>
                    <Row><Col>
                        <CustomPagination max={Math.ceil(filteredItems.length / props.filter.items_per_page)}
                                          page={props.filter.page}
                                          onClick={paginationOnClickHandler}/>
                    </Col></Row>
                </div>}
            </div>}
            <Spacer/>
        </Container>
    </div>;
};

const mapStateToProps = (state) => {
    return {
        items: state.blog,
        filter: state.blogFilter,
        filteredItems: state.blogFilteredItems,
        page: state.blogPage,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => {
            dispatch(fetchBlog());
        },
        fetchFilteredItems: (search_term) => {
            dispatch(fetchBlogFilteredItems(search_term));
        },
        fetchPage: () => {
            dispatch(fetchBlogPage());
        },
        setPage: (page) => {
            dispatch(setBlogPage(page));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
