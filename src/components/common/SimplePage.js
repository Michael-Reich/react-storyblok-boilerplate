import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import ModulesWrapper from '../../components/modules/ModulesWrapper';
import CustomHelmet from '../../components/common/CustomHelmet';
import {fetchSinglePage} from '../../actions/pages';

const SimplePage = (props) => {

    const [slug, setSlug] = useState(props.slug);
    const [modules, setModules] = useState([]);
    const [page, setPage] = useState({});


    useEffect(() => {
        if (!slug) {
            return;
        }
        props.fetchSinglePage(slug);
    }, [props.location, slug]);

    useEffect(() => {
        setSlug(props.slug);
    }, [props.slug]);

    useEffect(() => {
        if (!slug) {
            return;
        }
        props.pages.map((item) => {
            if (item.slug === slug) {
                setPage(item);
                if (item.content && item.content.body) {
                    console.log("modules", item.content.body);
                    setModules(item.content.body);
                }
            }
        });
    }, [props.pages]);

    return <div>
        <CustomHelmet metaFields={page.content ? page.content.metaFields : {}} page={page}/>
        {modules.length > 0 && <ModulesWrapper modules={modules}/>}
    </div>;
};

SimplePage.defaultProps = {
    slug: '',
};

const mapStateToProps = (state) => {
    return {
        pages: state.pages,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSinglePage: (slug) => {
            dispatch(fetchSinglePage(slug));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimplePage);
