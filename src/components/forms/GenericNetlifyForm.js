import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NetlifyForm from 'react-netlify-form';
import {createUseStyles} from 'react-jss';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from '../../components/common/Button';
import CustomSpinner from '../../components/common/CustomSpinner';
import {forms, mixins} from '../../tools/styles';
import Spacer from '../../components/common/Spacer';

const useStyles = createUseStyles({
    h2: {
        ...mixins.h2,
    },
    label: {
        ...forms.label,
    },
    input: {
        ...forms.input,
    },
    p: {
        ...mixins.p,
    },
    textarea: {
        ...forms.input,
        minHeight: 113,
    },
    warning: {
        ...mixins.p,
    },
    success: {
        ...mixins.p,
    },
    dsgvo: {
        ...forms.dsgvo,
    },
    btn: {
        ...forms.btn
    },
    checkBox: {
        ...forms.checkBox,
    }
});

const GenericNetlifyForm = (props) => {

    const classes = useStyles();

    const [freitext, setFreitext] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [checkboxActive, setCheckboxActive] = useState(true);

    useEffect(() => {
        if (email !== '') {
            setCheckboxActive(true);
        }
    }, [email]);

    return <div className={`${props.className}`} style={props.style}>
        {props.headline && <div><h2 className={classes.h2}>{props.headline}</h2><Spacer/></div>}
        <NetlifyForm
            name={props.formularName}
            onSuccess={props.successHandler}
            recaptcha={{
                sitekey: props.sitekey,
                size: 'invisible'
            }}>
            {({loading, error, recaptchaError, success, recaptcha}) => (
                <div>
                    {loading &&
                    <div className={classes.p}><CustomSpinner/></div>
                    }
                    {error &&
                    <div className={classes.warning}>Ihre Informationen wurden nicht gesendet. Bitte versuchen Sie es
                        später
                        noch einmal.</div>
                    }
                    {recaptchaError &&
                    <div className={classes.warning}>Recaptcha did not match. Please make sure the box is checked.</div>
                    }
                    {success &&
                    <div className={classes.success}>Vielen Dank für Ihre Anfrage, wir melden uns schnellstmöglich bei
                        Ihnen.</div>
                    }
                    {!loading && !success && <div>
                        <p className="hidden">
                            <label>Don’t fill this out if you're human: <input name="__bf"/></label>
                        </p>
                        <Row>
                            <Col>
                                <Form.Label className={classes.label}>Ihr Name *</Form.Label>
                                <Form.Control className={classes.input} type="text"
                                              name="Name"
                                              value={name}
                                              onChange={(e) => setName(e.target.value)}
                                              required/>
                                <Form.Label className={classes.label}>Ihr Unternehmen *</Form.Label>
                                <Form.Control className={classes.input} type="text"
                                              name="Company"
                                              value={company}
                                              onChange={(e) => setCompany(e.target.value)}
                                              required/>

                                <Form.Label className={classes.label}>Ihre Mail Adresse *</Form.Label>
                                <Form.Control className={classes.input} type="email"
                                              name="Mail"
                                              value={email}
                                              onChange={(e) => setEmail(e.target.value)}
                                              required/>

                                <Form.Label className={classes.label}>Ihre Telefonnummer *</Form.Label>
                                <Form.Control className={classes.input} type="text"
                                              name="Telefonnummer"
                                              value={phone}
                                              onChange={(e) => setPhone(e.target.value)}
                                              required/>
                                <Form.Label className={classes.label}>Ihre Nachricht *</Form.Label>
                                <Form.Control as={'textarea'} className={classes.textarea} type="text"
                                              name="Freitext"
                                              value={freitext}
                                              onChange={(e) => setFreitext(e.target.value)}
                                              required/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Form.Group
                                    className={`${classes.dsgvo} ${checkboxActive ? '' : 'hidden'}`}>
                                    <FormCheck>
                                        <FormCheck.Input className={classes.checkBox} type="checkbox"
                                                         style={{marginTop: 6}} required/>
                                        <FormCheck.Label className={classes.checkBox} style={{marginLeft: 10}}>
                                            Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur
                                            Beantwortung meiner Anfrage erhoben und verarbeitet werden. Detailierte
                                            Informationen zum Umgang mit Nutzerdaten finden Sie in unserer <Link
                                            to={`/datenschutz`}>Datenschutzerklärung</Link>.*
                                        </FormCheck.Label>
                                    </FormCheck>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Spacer/>
                        <Row>
                            <Col>
                                <div data-netlify-recaptcha="true"/>
                                <Button type={'submit'}>Kontakt aufnehmen</Button>
                            </Col>
                        </Row>
                    </div>}
                    {recaptcha}
                </div>
            )}
        </NetlifyForm>
    </div>;
};

GenericNetlifyForm.defaultProps = {
    headline: '',
    formularName: 'kontakt',
    className: '',
    style: {},
    sitekey: '',
    successHandler: () => {
    },
};

export default GenericNetlifyForm;
