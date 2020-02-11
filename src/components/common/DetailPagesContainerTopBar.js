import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {fetchDetailPages} from '../../actions/detailPages';

const DetailPagesContainerTopBar = (props) => {
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

    return <NavDropdown title={props.title} className={props.captionClasses}>
        {pages.length > 0 && pages.map((itm, index) => {
            return itm && <Link to={`/${props.slug}/${itm.slug}`}
                                onClick={props.onClick}
                                className={`dropdown-item ${props.linkClasses}`}
                                key={index}>
                <div>
                    <strong>{itm.name}</strong>
                </div>
            </Link>;
        })}
    </NavDropdown>;

};

DetailPagesContainerTopBar.defaultProps = {
    slug: '',
    title: '',
    captionClasses: '',
    linkClasses: '',
    onClick: () => {
    },
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailPagesContainerTopBar));
