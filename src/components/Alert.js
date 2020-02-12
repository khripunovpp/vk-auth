import React from 'react';

const Alert = ({children, type}) => <p className={`alert ${type}`}>{children}</p>

export default Alert