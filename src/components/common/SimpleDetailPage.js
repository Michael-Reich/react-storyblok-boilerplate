import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import ModulesWrapper from '../../components/modules/ModulesWrapper';
import CustomHelmet from '../../components/common/CustomHelmet';
import {fetchSingleDetailPage} from '../../actions/detailPages';

const SimpleDetailPage = (props) => {

    const [parentSlug, setParentSlug] = useState(props.parentSlug);
    const [slug, setSlug] = useState('');
    const [modules, setModules] = useState({});
    const [page, setPage] = useState({});

    useEffect(() => {
        if (!parentSlug || !slug) {
            return;
        }
        props.fetchSingleDetailPage(parentSlug, slug);
    }, [slug, parentSlug]);

    useEffect(() => {
        setParentSlug(props.parentSlug);
    }, [props.parentSlug]);

    useEffect(() => {
        try {
            setSlug(props.props.match.params.slug);
        } catch (e) {
        }
    }, [props.props]);

    useEffect(() => {
        if (!parentSlug || !slug) {
            return;
        }
        if (parentSlug && slug && props.detailPages[parentSlug] && props.detailPages[parentSlug][slug]) {
            setPage(props.detailPages[parentSlug][slug]);
            if (props.detailPages[parentSlug][slug] && props.detailPages[parentSlug][slug].content && props.detailPages[parentSlug][slug].content.body) {
                console.log("modules", props.detailPages[parentSlug][slug].content.body);
                setModules(props.detailPages[parentSlug][slug].content.body);
            }
        }
    }, [props.detailPages, parentSlug, slug]);

    return <div>
        <CustomHelmet metaFields={page.content ? page.content.metaFields : {}} page={page}/>
        {modules.length > 0 && <ModulesWrapper modules={modules}/>}
    </div>;
};

SimpleDetailPage.defaultProps = {
    parentSlug: '',
    props: {},
};

const mapStateToProps = (state) => {
    return {
        detailPages: state.detailPages,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleDetailPage: (parentSlug, slug) => {
            dispatch(fetchSingleDetailPage(parentSlug, slug));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleDetailPage);
