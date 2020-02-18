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

    render () {
        const { addItem } = this.props;
        const { text } = this.state;
        return(
            <AddWrap>
                <input onChange={this.changeText} placeholder="add item" />
                <button onClick={() => addItem(text)}>add</button>
            </AddWrap>
        )
    }
}