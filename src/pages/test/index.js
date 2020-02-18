import React, { PureComponent } from 'react';
import { changeState } from "./container";
import OSelect from "@/components/OSelect"
import ShowTitle from "@/components/ShowTitle"

export default class GoodsRebateList extends PureComponent {
    state = {
        title: '我的',
        selected: ''
    }
    render() {
        const { title, selected } = this.state
        return (
            <div>
                <label htmlFor="namedInput">Name:</label>
                <input id="namedInput" type="text" name="name" />
                {title}
                <ShowTitle that={this} selected={selected}></ShowTitle>
                <OSelect placeholder="请选择" options={[{ value: '1', label: '1' }, { value: '2', label: '2' }]} onChange={(v) => { changeState(this, v) }}></OSelect>
            </div >
        )
    }
}