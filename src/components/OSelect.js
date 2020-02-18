import React, { PureComponent } from 'react';
import { Select, Icon } from 'antd';
import PropTypes from 'prop-types';
import { request } from '@/utils';

const { Option } = Select;

export default class OSelect extends PureComponent {
    static defaultProps = {
        valuePropName: 'value',
        labelPropName: 'label',
    };
    static propTypes = {
        options: PropTypes.array,
        valuePropName: PropTypes.string,
        labelPropName: PropTypes.string,
        labelRender: PropTypes.func,
    };
    constructor(props) {
        super(props);
        const { options, request: requestParams } = props;
        let items = [];
        if (!options) {
            this.getOptions(requestParams);
        }
        else {
            items = options || [];
        }
        this.state = {
            items: items
        }
    }
    getOptions = async (requestParams) => {
        if (requestParams.url) {
            const { data = [] } = await request(requestParams);
            this.setState({ items: data })
        }
        else {
            this.setState({ items: [] })
        }

    }
    render() {
        const { options, valuePropName, labelPropName, labelRender, children, request: requestParams, ...restProps } = this.props;
        let opts = children;
        if (!opts) {
            opts = this.state.items.map(option => {
                const value = option[valuePropName];
                const label = _.isFunction(labelRender) ? labelRender(option) : option[labelPropName];
                return <Option title={label} value={value} key={value}>{label}</Option>;
            });
        }
        return <Select {...restProps} style={{ width: 120 }}>{opts}</Select>;
    }
}