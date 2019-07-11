import React from 'react';

import './pre-loading.css';

const PreLoading = () => {
    return (<div className="lds-css ng-scope">
        <div className="lds-double-ring">
            <div></div>
            <div></div>
        </div>
    </div>);
};

export default PreLoading;