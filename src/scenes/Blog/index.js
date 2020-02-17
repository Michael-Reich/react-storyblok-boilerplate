import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss';
import {Element, scroller} from 'react-scroll';

import CustomSpinner from '../../components/common/CustomSpinner';
import {fetchBlogPage, setBlogPage} from '../../actions/blog';
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
        props.fetchPage();
    }, [props.location]);

    const [page, setPage] = useState({});
    const [filter, setFilter] = useState({});
    const [items, setItems] = useState([]);
    const [modules, setModules] = useState([]);

    useEffect(() => {
        setFilter(props.entity.filter);
    }, [props.entity.filter]);

    useEffect(() => {
        if (props.entity.page && props.entity.page.length > 0) {
            setPage(props.entity.page[0]);
            if (props.entity.page[0].content && props.entity.page[0].content.body) {
                setModules(props.entity.page[0].content.body);
            }
        }
    }, [props.entity.page]);

    useEffect(() => {
        setItems(props.entity.filteredItems);
    }, [props.entity.filteredItems]);


    useEffect(() => {
        if (filter.filter) {
            // props.dispatch({type: 'FETCH_BLOG_FILTERED_ITEMS_REQUESTED', payload: {search_term: filter.filter.text}})
            // props.fetchFilteredItems(filter.filter.text);
            props.fetchFilteredItemsRequested(filter.filter.text);
        }
    }, [filter.filter]);

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
                    {page.content.hasSearch && <Filter filter={filter.filter} pageSize={page.content.pageSize}/>}
                    <Spacer/>
                </Col>
            </Row>}

            {!items.length ? <Row><Col>
                <CustomSpinner/>
            </Col></Row> : <div>
                <Element name="scrollAnchor"/>
                {items.length > 0 && <div>
                    <Row className={'h-100'}>
                        {[...items].splice((filter.page - 1) * filter.items_per_page, filter.items_per_page).map((itm, index) => {
                            return <Col lg={4} md={6} key={index} style={{marginBottom: tools.margin,}}>
                                <Item item={itm}/>
                            </Col>;
                        })}
                    </Row>
                    <Row><Col>
                        <CustomPagination max={Math.ceil(items.length / filter.items_per_page)}
                                          page={filter.page}
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
        entity: state.blog,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilteredItemsRequested: (search_term) => {
            dispatch({type: 'FETCH_BLOG_FILTERED_ITEMS_REQUESTED', payload: {search_term: search_term}})
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
