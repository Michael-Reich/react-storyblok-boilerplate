import React from 'react';
import {createUseStyles} from 'react-jss';

import {colors, mixins} from '../../tools/styles';
import GenericCleverreachForm from '../forms/GenericCleverreachForm';
import {tools} from '../../tools/styles/tools';

const useStyles = createUseStyles({
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

const NewsletterForm = (props) => {
    const classes = useStyles();

    return <GenericCleverreachForm className={classes.div} formId={props.formId} formNameId={props.formNameId} headline={props.headline}/>;
};

NewsletterForm.defaultProps = {
    formId: '',
    formNameId: '',
    headline: '',
};

export default NewsletterForm;
