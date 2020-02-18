import React, { PureComponent, isValidElement } from 'react';
import _ from 'lodash';

export default (...args) => {
    const includes = _.find(args, _.isBoolean);
    const exception = _.some(args, _.isNull) ? null : (_.find(args, isValidElement) || '403');
    return WrappedComponent => class Judge extends PureComponent {
        judge = (...args) => {
            args = _.flattenDeep(args);
            const needs = _.filter(args, _.isBoolean);

            console.log('needs=', needs)
            // if (needs) return true;


            // return false;
        };

        render() {
            const { judge } = this;
            const mergeProps = {
                ...this.props,
                judge,
            };
            return judge(...args) ? <WrappedComponent {...mergeProps} /> : exception;
        }
    };
}