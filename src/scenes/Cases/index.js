import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss';
import {Element, scroller} from 'react-scroll';

import CustomSpinner from '../../components/common/CustomSpinner';
import {fetchCases} from '../../actions/cases';
import {fetchCasesPage} from '../../actions/casesPage';
import {setCasesPage} from '../../actions/casesFilter';
import {mixins} from '../../tools/styles';
import Filter from './Filter';
import Item from './Item';
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

const Cases = (props) => {

    const classes = useStyles();

    useEffect(() => {
        props.fetchItems();
        props.fetchPage();
    }, [props.location]);

    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [page, setPage] = useState({});
    const [modules, setModules] = useState([]);

    useEffect(() => {
        if (props.items.length > 0) {
            setItems(props.items);
        }
    }, [props.items]);

    useEffect(() => {
        const newFilteredItems = [];

        [...items].map(item => {
            if (props.filter.filter.text) {
                if (
                    (!item.name || item.name.toLowerCase().search(props.filter.filter.text.trim().toLowerCase()) === -1)
                    &&
                    (!item.content || !item.content.subline || item.content.subline.toLowerCase().search(props.filter.filter.text.trim().toLowerCase()) === -1)
                    &&
                    (!item.content || !item.content.headline || item.content.headline.toLowerCase().search(props.filter.filter.text.trim().toLowerCase()) === -1)
                    &&
                    (!item.content || !item.content.previewText || item.content.previewText.toLowerCase().search(props.filter.filter.text.trim().toLowerCase()) === -1)
                ) {
                    return;
                }
            }
            newFilteredItems.push(item);
        });

        setFilteredItems(newFilteredItems);
    }, [items, props.filter]);

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
                    {page.content.hasSearch &&
                    <Filter filter={props.filter} pageSize={page.content.pageSize}/>}
                    <Spacer/>
                </Col>
            </Row>}

            {!filteredItems.length ? <Row><Col>
                <div className={classes.pSearch}>Wir können leider keine Cases finden.</div>
            </Col></Row> : <div>{
                filteredItems.length > 0 && <div>
                    <Element name="scrollAnchor"/>
                    {[...filteredItems].splice((props.filter.page - 1) * props.filter.itemsPerPage, props.filter.itemsPerPage).map((itm, index) => {
                        return <Row key={index}>
                            <Col>
                                <Item item={itm}/>
                            </Col>
                        </Row>;
                    })}
                    <Row><Col>
                        <CustomPagination max={Math.ceil(filteredItems.length / props.filter.itemsPerPage)}
                                          page={props.filter.page} onClick={paginationOnClickHandler}/>
                    </Col></Row>
                </div>}
            </div>}
            {!items.length && <CustomSpinner/>}
            <Spacer/>
        </Container>
    </div>;
};

const mapStateToProps = (state) => {
    return {
        items: state.cases,
        filter: state.casesFilter,
        page: state.casesPage,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => {
            dispatch(fetchCases());
        },
        fetchPage: () => {
            dispatch(fetchCasesPage());
        },
        setPage: (page) => {
            dispatch(setCasesPage(page));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cases);
