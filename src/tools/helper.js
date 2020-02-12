const getMarginClasses = (module, key = 'margin') => {
    let temp = '';
    if (module && module[key]) {
        if (module[key].top) {
            temp = module[key].top + ' ';
        }
        if (module[key].bottom) {
            temp += module[key].bottom;
        }
    }
    return temp;
};

const getBootstrapColClasses = (module, key = 'box_bootstrap_classes') => {
    let temp = '';
    if (module && module[key]) {
        if (module[key].xsmall) {
            temp += `col-xs-${module[key].xsmall}`;
        }
        if (module[key]['small'] && typeof module[key]['small'] === 'string') {
            temp += ` col-sm-${module[key]['small']}`;
        }
        if (module[key].medium) {
            temp += ` col-md-${module[key].medium}`;
        }
        if (module[key].large) {
            temp += ` col-lg-${module[key].large}`;
        }
        if (module[key].xlarge) {
            temp += ` col-xl-${module[key].xlarge}`;
        }
    }
    return temp;
};


export {
    getMarginClasses,
    getBootstrapColClasses,
}
