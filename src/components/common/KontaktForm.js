import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {createUseStyles} from 'react-jss';

import GenericNetlifyForm from '../forms/GenericNetlifyForm';
import {breakpoints, colors, mixins, tools} from '../../tools/styles';
import Spacer from './Spacer';
import Button from './Button';

const useStyles = createUseStyles({
    col: {
        [`@media (max-width: ${breakpoints.mdMax}px)`]: {
            marginBottom: tools.marginSmall,
        },
    },
    div: {
        padding: tools.padding,
        backgroundColor: colors.light,
    },
    h2: {
        ...mixins.h2,
    },
    p: {
        ...mixins.p,
    },
    image: {
        width: '100%',
        height: 'auto',
    }
});

const KontaktForm = (props) => {
    const classes = useStyles();

    return <Row>
        <Col xs={{span: 12, order: 2}}
             lg={{span: props.plain_form ? 8 : 6, offset: props.plain_form ? 2 : 0, order: 1}}>
            <GenericNetlifyForm headline={props.headline} sitekey={props.sitekey} formularName={props.formularName}
                                className={classes.div}/>
        </Col>
        {!props.plain_form && <Col lg={{span: 6, order: 2}} className={classes.col}>
            <div>
                <img src="//cdn.pixabay.com/photo/2014/05/26/13/32/striped-core-354528_960_720.jpg" alt="" className={classes.image}/>
                <div className={classes.div}>
                    <h2 className={classes.h2}>Lassen Sie sich beraten!</h2>
                    <Spacer/>
                    <div className={classes.p}>
                        In einem kostenfreien Beratungsgespräch können wir besprechen, ob, wie und wobei wir Sie
                        unterstützen können.
                    </div>
                    <Spacer/>
                    <a href={'https://outlook.office365.com/owa/calendar/WSUBeratungsgesellschaftmbH1@wsu-beratung.de/bookings/s/uGsPPrxZm0eYDQNJQtgevA2'}
                       target={'_blank'}><Button variant={'secondary'}>Termin vereinbaren</Button></a>
                </div>
            </div>
        </Col>}
    </Row>;
};

KontaktForm.defaultProps = {
    headline: '',
    formularName: 'kontakt',
    plain_form: false,
    sitekey: 'FEHLT NOCH',
    /**
     * TOODO: SITEKEY
     */
};

export default KontaktForm;
