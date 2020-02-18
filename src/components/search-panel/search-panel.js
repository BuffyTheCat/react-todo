import React, { Component } from 'react';
import { Search } from './styles';
import Filter from '../filter/filter'

export default class SearchPanel extends Component {
    state = {
        term: ''
    }

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }

    render() {
        const {filter, onFilterChange} = this.props;

        return (
            <Search>
                <input 
                    placeholder="search" 
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />
                <Filter filter={filter} onFilterChange={onFilterChange} />
            </Search>
        );
    }
}