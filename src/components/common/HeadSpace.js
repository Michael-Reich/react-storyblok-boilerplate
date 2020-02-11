import React from 'react';

const HeadSpace = (props) => {
    return <div style={{height: props.h}}/>;
};
HeadSpace.defaultProps = {
    h: 100,
};

export default HeadSpace;
