import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss';
import {Element, scroller} from 'react-scroll';

import CustomSpinner from '../../components/common/CustomSpinner';
import {fetchPageData, setPageNumber} from '../../actions/blog';
import {FETCH_FILTERED_ITEMS_REQUESTED} from '../../actiontypes/blog';
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
        props.fetchPageData();
    }, [props.location]);

    const [pageData, setPageData] = useState({});
    const [filter, setFilter] = useState({});
    const [items, setItems] = useState([]);
    const [lastRequestState, setLastRequestState] = useState({});
    const [isRequestOngoing, setIsRequestOngoing] = useState(false);
    const [modules, setModules] = useState([]);

    useEffect(() => {
        setFilter(props.entity.filter);
    }, [props.entity.filter]);

    useEffect(() => {
        if (props.entity.page && props.entity.page.length > 0) {
            setPageData(props.entity.page[0]);
            if (props.entity.page[0].content && props.entity.page[0].content.body) {
                setModules(props.entity.page[0].content.body);
            }
        }
    }, [props.entity.page]);

    useEffect(() => {
        setItems(props.entity.filteredItems);
    }, [props.entity.filteredItems]);

    useEffect(() => {
        setLastRequestState(props.entity.lastRequestState);
    }, [props.entity.lastRequestState]);

    useEffect(() => {
        setIsRequestOngoing(props.entity.isRequestOngoing);
    }, [props.entity.isRequestOngoing]);

    useEffect(() => {
        if (filter.filter) {
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
        props.setPageNumber(page);
    };

    return <div>
        <CustomHelmet metaFields={pageData.content ? pageData.content.metaFields : {}} page={pageData}/>
        {modules.length > 0 && <ModulesWrapper modules={modules}/>}
        <Spacer/>
        <Container>
            {pageData && pageData.content && <Row>
                <Col md={9}>
                    <h1 className={classes.h1}>{pageData.content.headline}</h1>
                    <Spacer/>
                    {pageData.content.hasSearch &&
                    <Filter filter={filter.filter} pageSize={pageData.content.pageSize}/>}
                    <Spacer/>
                </Col>
            </Row>}

            {isRequestOngoing && <Row><Col>
                <CustomSpinner/><Spacer/>
            </Col></Row>}

            {items && <div>
                <Element name="scrollAnchor"/>
                {items.length > 0 ? <div>
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
                </div> : <div>
                    {!isRequestOngoing && <Row><Col>
                        <div className={classes.pSearch}>Wir können leider keine Einträge finden.</div>
                    </Col></Row>}
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
            dispatch({type: FETCH_FILTERED_ITEMS_REQUESTED, payload: {search_term: search_term}});
        },
        fetchPageData: () => {
            dispatch(fetchPageData());
        },
        setPageNumber: (page) => {
            dispatch(setPageNumber(page));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
