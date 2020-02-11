import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import {createUseStyles} from 'react-jss';

import {colors, mixins, tools} from '../../../tools/styles';
import {getMarginClasses} from '../../../tools/helper';
import KontaktForm from '../../common/KontaktForm';

const ModuleContact = (props) => {

    const useStyles = createUseStyles({
        div: {
            color: colors.dark,
            paddingTop: 50,
            paddingBottom: 50,
        },
        h2: {
            ...mixins.h2,
            color: colors.dark,
        },
        caption: {
            ...mixins.caption,
            color: colors.vibrate,
            '&>a': {
                color: 'inherit',
                transition: tools.transition,
                '&:hover': {
                    color: colors.vibrate,
                    textDecoration: 'none',
                },
            },
        },
        p: {
            ...mixins.p,
            '& + &': {
                marginTop: 10,
            },
        },
        image: {
            maxWidth: '100%',
            height: 'auto',
        },
    });

    const [module, setModule] = useState(props.module);
    const [marginClasses, setMarginClasses] = useState('');
    useEffect(() => {
        setModule(props.module);
        if (props.module) {
            setMarginClasses(getMarginClasses(props.module));
        }
    }, [props.module]);

    const classes = useStyles();

    return <div className={`${classes.div} ${marginClasses}`}>
        <Container fluid={module.is_full_width}>
            <KontaktForm plain_form={module.plain_form} headline={module.form_headline}/>
        </Container>
    </div>;
};

ModuleContact.defaultProps = {
    module: {},
};

export default ModuleContact;
