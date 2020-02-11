import React from 'react';
import {FaFacebookF, FaTwitter, FaWhatsapp, FaPaperPlane} from 'react-icons/fa';
import {createUseStyles} from 'react-jss';

import {colors, tools} from '../../tools/styles';

const useStyles = createUseStyles({
    box: {
        borderRadius: 50,
        backgroundColor: colors.light,
        height: 45,
        width: 45,
        textAlign: 'center',
        transition: tools.transition,
        float: 'left',
        '& a': {
            transition: tools.transition,
            color: colors.dark,
        },
        '&:hover': {
            backgroundColor: colors.vibrate,
        },
        '& a:hover': {
            color: colors.light,
        },
        '& + &': {
            marginLeft: 10,
        },
    },
    shareLink: {
        fontSize: 24,
        lineHeight: '38px',
    },
});

const SocialShare = (props) => {

    const classes = useStyles();

    return <div className={props.className}>
        <div className={classes.box}>
            <a className={classes.shareLink} href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
               target={'_blank'}>
                <div><FaFacebookF/></div>
            </a>
        </div>

        <div className={classes.box}>
            <a className={classes.shareLink}
               href={`https://twitter.com/intent/tweet/?text=&url=${window.location.href}`}
               target={'_blank'}>
                <div><FaTwitter/></div>
            </a>
        </div>

        <div className={classes.box}>
            <a className={classes.shareLink} href={`whatsapp://send?text=${window.location.href}`}
               target={'_blank'}>
                <div><FaWhatsapp/></div>
            </a>
        </div>

        <div className={classes.box}>
            <a className={classes.shareLink} href={`mailto:?subject=&body=${window.location.href}`}
               target={'_blank'}>
                <div><FaPaperPlane/></div>
            </a>
        </div>
    </div>;
};

SocialShare.defaultProps = {
    className: '',
};

export default SocialShare;
