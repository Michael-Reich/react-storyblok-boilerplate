import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchDetailPages} from '../../actions/detailPages';
import NavLink from './NavLink';

const DetailPagesContainer = (props) => {
    useEffect(() => {
        if (!props.slug) {
            return;
        }
        props.fetchDetailPages(props.slug);
    }, [props.match.params, props.slug]);

    const [pages, setPages] = useState([]);

    useEffect(() => {
        if (!props.slug) {
            return;
        }
        if (props.detailPages[props.slug]) {
            setPages(Object.values(props.detailPages[props.slug]).reverse());
        }

    }, [props.detailPages, props.slug]);

    return <div>
        <h3 className={props.captionClasses}>{props.title}</h3>
        {pages.length > 0 && pages.map((itm, index) => {
            return itm &&
                <NavLink url={`/${props.slug}/${itm.slug}`}
                         text={itm.name}
                         className={props.linkClasses}
                         key={index}/>;
        })}
    </div>;

};

DetailPagesContainer.defaultProps = {
    slug: '',
    title: '',
    captionClasses: '',
    linkClasses: '',
};

const mapStateToProps = (state) => {
    return {
        detailPages: state.detailPages,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailPages: (slug) => {
            dispatch(fetchDetailPages(slug));
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailPagesContainer));
