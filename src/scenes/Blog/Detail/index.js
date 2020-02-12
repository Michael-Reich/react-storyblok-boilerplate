import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {createUseStyles} from 'react-jss';

import {fetchSingleBlog, fetchBlog} from '../../../actions/blog';
import {colors, mixins, tools} from '../../../tools/styles';
import SocialShare from '../../../components/common/SocialShare';
import CustomHelmet from '../../../components/common/CustomHelmet';
import {CustomRichText} from '../../../components/common/CustomRichText';
import Spacer from '../../../components/common/Spacer';
import Item from '../Item';
import BackgroundImage from '../../../components/common/BackgroundImage';
import NewsletterForm from '../../../components/common/NewsletterForm';

const useStyles = createUseStyles({
    h1: {
        ...mixins.h1,
        marginBottom: 15
    },
    h2: {
        ...mixins.h2,
    },
    caption: {
        ...mixins.caption,
        marginBottom: 20,
        color: colors.highlight,
    },
    image: {
        width: '100%',
        maxHeight: 500,
        height: '50vh',
    },
    unboxed: {
        ...mixins.unboxed,
    },
});

const BlogDetail = (props) => {

    const classes = useStyles();

    useEffect(() => {
        props.fetchSingleItem(props.match.params.slug);
        props.fetchItems();
    }, [props.match.params]);

    const [item, setItem] = useState({});
    const [other, setOther] = useState([]);

    useEffect(() => {
        const tempOther = [];
        props.items.map((itm) => {
            if (itm.slug === props.match.params.slug) {
                setItem(itm);
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
            <Container>
                <Row>
                    <Col>
                        <BackgroundImage image={item.content.image} className={classes.image}/>
                        <Spacer/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 8, offset: 2,}}>
                        <SocialShare/>
                        <div style={{clear: 'both',}}/>
                        <Spacer/>
                        <div className={classes.caption}>{item.content.subline}</div>
                        <h1 className={classes.h1}>{item.content.headline}</h1>
                        <CustomRichText data={item.content.content} className={classes.unboxed}/>
                        <Spacer/>
                        <NewsletterForm headline={'Verpassen Sie nichts mehr!'}/>
                    </Col>
                </Row>

                {other && other.length > 0 && <div>
                    <Spacer/>
                    <Spacer/>
                    <Spacer/>
                    <Row className={'mb-5'}>
                        <Col md={12}>
                            <Row className={'mb-3 text-center'}>
                                <Col>
                                    <div className={classes.caption}>Verwandte Beiträge:</div>
                                    <h2 className={classes.h2}>Jetzt weiterlesen!</h2>
                                </Col>
                            </Row>
                            <Spacer/>
                            <Row>
                                {[...other].splice(0, 3).map((itm, index) => {
                                    return <Col lg={4} md={6} key={index} style={{marginBottom: tools.margin,}}>
                                        <Item item={itm}/>
                                    </Col>;
                                })}
                            </Row>
                        </Col>
                    </Row>
                </div>}
            </Container>
        </div>}
    </div>;
};

const mapStateToProps = (state) => {
    return {
        items: state.blog,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleItem: (slug) => {
            dispatch(fetchSingleBlog(slug));
        },
        fetchItems: () => {
            dispatch(fetchBlog());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
