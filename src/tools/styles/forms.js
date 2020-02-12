import {tools} from './tools';
import {colors} from './colors';
import {mixins} from './mixins';

const input = {
    ...mixins.p,
    color: colors.dark,
    borderRadius: tools.borderRadius,
    border: `1px solid ${colors.highlight}`,
    backgroundColor: colors.white,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    transition: tools.transition,
    '&:focus': {
        border: `2px solid ${colors.highlight}`,
        boxShadow: tools.boxShadow,
    },
};

const label = {
    ...mixins.p,
    fontSize: 17,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 0,
};

const checkBox = {
    ...mixins.p,
    fontSize: 15,
};

const dsgvo = {
    marginBottom: 0,
    marginTop: 10,
};

const btn = {
    marginTop: 10,
};

export const forms = {
    input,
    label,
    checkBox,
    dsgvo,
    btn,
};
