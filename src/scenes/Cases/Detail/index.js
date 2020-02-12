import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {createUseStyles} from 'react-jss';

import {fetchSingleCase, fetchCases} from '../../../actions/cases';
import {colors, mixins, tools} from '../../../tools/styles';
import SocialShare from '../../../components/common/SocialShare';
import CustomHelmet from '../../../components/common/CustomHelmet';
import {CustomRichText} from '../../../components/common/CustomRichText';
import Spacer from '../../../components/common/Spacer';
import Item from '../Item';
import BackgroundImage from '../../../components/common/BackgroundImage';
import KontaktForm from '../../../components/common/KontaktForm';

const useStyles = createUseStyles({
    h1: {
        ...mixins.h1,
        marginBottom: 15,
    },
    h2: {
        ...mixins.h2,
    },
    text: {
        marginTop: tools.margin,
    },
    caption: {
        ...mixins.caption,
        marginBottom: 20,
        color: colors.highlight,
    },
    image: {
        width: '100%',
        maxHeight: 700,
        height: '70vh',
        position: 'relative',
    },
    header: {
        color: colors.light,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
    },
    headerCaption: {
        ...mixins.caption,
        color: colors.light,
    }
});

const CaseDetail = (props) => {

    const classes = useStyles();

    useEffect(() => {
        props.fetchSingleItem(props.match.params.slug);
        props.fetchItems();
    }, [props.match.params]);

    const [item, setItems] = useState({});
    const [other, setOther] = useState([]);

    useEffect(() => {
        const tempOther = [];
        props.items.map((itm) => {
            if (itm.slug === props.match.params.slug) {
                setItems(itm);
            } else {
                tempOther.push(itm);
            }
        });

        const tempIdArray = [];
        const newOther = [];

        tempOther.map(itm => {
            if (!tempIdArray.includes(itm.slug)) {
                tempIdArray.push(itm.slug);
                newOther.push(itm);
            }
        });

        setOther(newOther);
    }, [props.items]);

    return <div>
        <CustomHelmet metaFields={item.content ? item.content.metaFields : {}} page={item}/>

        {item.content && <div>
            <BackgroundImage image={item.content.image} className={classes.image}>
                <div className={classes.header}>
                    <Container>
                        <Col md={{span: 12, offset: 0,}} style={{backgroundColor: colors.highlight,
                            padding: 20,}}>
                            <div className={classes.headerCaption}>{item.content.subline}</div>
                            <div className={classes.h2}>{item.content.headline}</div>
                        </Col>
                    </Container>

                </div>
            </BackgroundImage>
            <Spacer/>
            <Container>
                <Row>
                    <Col md={{span: 8, offset: 2,}}>
                        <SocialShare/>
                        <div style={{clear: 'both',}}/>
                        <Spacer/>
                        <div className={classes.caption}>{item.content.subline}</div>
                        <h1 className={classes.h1}>{item.content.headline}</h1>
                        <CustomRichText data={item.content.content}/>
                    </Col>
                </Row>
                <Spacer/>
                <Spacer/>
                <Row>
                    <Col>
                        <KontaktForm headline={'Nehmen Sie direkt Kontakt auf!'}/>
                    </Col>
                </Row>
                {other && other.length > 0 && <div>
                    <Spacer/>
                    <Spacer/>
                    <Row className={'mb-5'}>
                        <Col md={12}>
                            <Row className={'mb-3 text-center'}>
                                <Col>
                                    <div className={classes.caption}>Andere Cases:</div>
                                </Col>
                            </Row>
                            {[...other].splice(0, 3).map((itm, index) => {
                                return <Row key={index}>
                                    <Col>
                                        <Item item={itm}/>
                                    </Col>
                                </Row>;
                            })}
                        </Col>
                    </Row>
                </div>}
            </Container></div>}
    </div>;
};

const mapStateToProps = (state) => {
    return {
        items: state.cases,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleItem: (slug) => {
            dispatch(fetchSingleCase(slug));
        },
        fetchItems: () => {
            dispatch(fetchCases());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseDetail);
