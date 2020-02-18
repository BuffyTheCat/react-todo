import React, { Component } from 'react';
import { Search } from './styles';

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


        return (
            <Search>
                <input 
                    placeholder="search" 
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />
                <div>
                    <button type="button">All</button>
                    <button type="button">Active</button>
                    <button type="button">Done</button>
                </div>
            </Search>
        );
    }
}