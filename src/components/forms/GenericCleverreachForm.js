import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {createUseStyles} from 'react-jss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';

import {colors, forms, mixins} from '../../tools/styles';
import Button from '../common/Button';
import Spacer from '../common/Spacer';

const useStyles = createUseStyles({
    label: {
        ...forms.label,
    },
    p: {
        ...mixins.p,
        color: colors.dark,
        '&>a': {
            color: colors.dark,
            '&:hover': {
                color: colors.dark,
            }
        },
    },
    input: {
        ...forms.input,
    },
    h2: {
        ...mixins.h2,
    },
    caption: {
        ...mixins.caption,
    },
    dsgvo: {
        ...forms.dsgvo,
    },
    btn: {
        ...forms.btn
    }
});

const GenericCleverreachForm = (props) => {

    const classes = useStyles();

    const [form, setForm] = useState({
        [props.formNameId]: '',
        email: '',
    });

    const [checkboxActive, setCheckboxActive] = useState(false);

    useEffect(() => {
        if (form.email !== '') {
            setCheckboxActive(true);
        }
    }, [form]);

    return <div className={props.className} style={{...props.style, width: '100%'}}>
        {props.headline && <div><h2 className={classes.h2}>{props.headline}</h2><Spacer/></div>}
        <Form action={`https://eu2.cleverreach.com/f/185540-${props.formId}/wcs/`} method="post"
              target="_blank">
            <Row>
                <Col>
                    <Form.Label className={classes.label}>
                        Ihr Name *
                    </Form.Label>
                    <Form.Control name={props.formNameId} type="text" placeholder="" value={form.name}
                                  className={classes.input}
                                  onChange={(e) => setForm({
                                      ...form,
                                      [e.currentTarget.name]: e.currentTarget.value
                                  })} required/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label className={classes.label}>
                        Ihre Mail Adresse *
                    </Form.Label>
                    <Form.Control type="email" name="email" placeholder="" value={form.mail}
                                  className={classes.input}
                                  onChange={(e) => setForm({
                                      ...form,
                                      [e.currentTarget.name]: e.currentTarget.value
                                  })} required/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="dsgvo" className={`${classes.dsgvo} ${checkboxActive ? '' : 'hidden'}`}>
                        <FormCheck>
                            <FormCheck.Input type="checkbox" required/>
                            <FormCheck.Label className={classes.p}><small>Ich
                                stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage
                                erhoben
                                und verarbeitet werden. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie
                                in unserer <Link to={`/datenschutz`}>Datenschutzerklärung</Link>*</small>
                            </FormCheck.Label>
                        </FormCheck>
                    </Form.Group>
                </Col>
            </Row>
            <Spacer/>
            <Row>
                <Col>
                    <Button className={classes.btn} type={'submit'}>Newsletter
                        abonnieren!</Button>
                </Col>
            </Row>
        </Form>
    </div>;
};

GenericCleverreachForm.defaultProps = {
    style: {},
    className: '',
    formId: '',
    formNameId: '',
    headline: '',
};

export default GenericCleverreachForm;
