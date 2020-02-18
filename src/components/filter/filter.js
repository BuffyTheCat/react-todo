import React, { Component } from 'react';
import { Filters, FilterButton } from './styles';

export default class Filter extends Component {
    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'}
    ]

    render() {
        const {filter, onFilterChange} = this.props;
        const elements = this.buttons.map((item) => {
            return (
                <FilterButton active={filter === item.name}  onClick={() => onFilterChange(item.name)} key={item.name} name={item.name}>{item.label}</FilterButton>
            );
        });

        return (
            <Filters>
                {elements}
            </Filters>
        )
    };
}