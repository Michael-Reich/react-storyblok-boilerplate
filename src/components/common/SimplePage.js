import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {entitySlug} from '../../entities/pages';
import {fetchSingleItem} from '../../actions/pages';
import ModulesWrapper from '../../components/modules/ModulesWrapper';
import CustomHelmet from '../../components/common/CustomHelmet';

const SimplePage = (props) => {

    const [slug, setSlug] = useState(props.slug);
    const [modules, setModules] = useState([]);
    const [pageData, setPageData] = useState({});

    useEffect(() => {
        if (!slug) {
            return;
        }
        props.fetchSingleItem(slug);
    }, [props.location, slug]);

    useEffect(() => {
        setSlug(props.slug);
    }, [props.slug]);

    useEffect(() => {
        if (!slug) {
            return;
        }
        props.items.map((itm) => {
            if (itm.slug === slug) {
                setPageData(itm);
                if (itm.content && itm.content.body) {
                    setModules(itm.content.body);
                }
            }
        });
    }, [props.items]);

    return <div>
        <CustomHelmet metaFields={pageData.content ? pageData.content.metaFields : {}} page={pageData}/>
        {modules.length > 0 && <ModulesWrapper modules={modules}/>}
    </div>;
};

SimplePage.defaultProps = {
    slug: '',
};

const mapStateToProps = (state) => {
    return {
        items: state[entitySlug],
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleItem: (slug) => {
            dispatch(fetchSingleItem(slug));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimplePage);
