import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {fetchSingleItem} from '../../actions/detailPages';
import {entitySlug} from '../../entities/detailPages';
import ModulesWrapper from '../../components/modules/ModulesWrapper';
import CustomHelmet from '../../components/common/CustomHelmet';

const SimpleDetailPage = (props) => {

    const [parentSlug, setParentSlug] = useState(props.parentSlug);
    const [slug, setSlug] = useState('');
    const [modules, setModules] = useState({});
    const [pageData, setPageData] = useState({});

    useEffect(() => {
        if (!parentSlug || !slug) {
            return;
        }
        props.fetchSingleItem(parentSlug, slug);
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
        if (parentSlug && slug && props.items[parentSlug] && props.items[parentSlug][slug]) {
            setPageData(props.items[parentSlug][slug]);
            if (props.items[parentSlug][slug] && props.items[parentSlug][slug].content && props.items[parentSlug][slug].content.body) {
                console.log("modules", props.items[parentSlug][slug].content.body);
                setModules(props.items[parentSlug][slug].content.body);
            }
        }
    }, [props.items, parentSlug, slug]);

    return <div>
        <CustomHelmet metaFields={pageData.content ? pageData.content.metaFields : {}} page={pageData}/>
        {modules.length > 0 && <ModulesWrapper modules={modules}/>}
    </div>;
};

SimpleDetailPage.defaultProps = {
    parentSlug: '',
    props: {},
};

const mapStateToProps = (state) => {
    return {
        items: state[entitySlug],
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleItem: (parentSlug, slug) => {
            dispatch(fetchSingleItem(parentSlug, slug));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleDetailPage);
