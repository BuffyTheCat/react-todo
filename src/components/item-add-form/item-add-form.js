import React, { Component } from 'react';
import { AddWrap } from './styles'


export default class ItemAddForm extends Component {
    state = {
        text: null
    }
    
    changeText = (event) => {
        const value = event.target.value;
        this.setState(({text}) => {
            return {
                text: value
            }
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.text);
    }

    render () {
        return(
            <AddWrap onSubmit={this.onSubmit}>
                <input 
                    onChange={this.changeText} 
                    placeholder="add item"
                    value={this.state.text}
                />
                <button type="submit">add</button>
            </AddWrap>
        )
    }
}