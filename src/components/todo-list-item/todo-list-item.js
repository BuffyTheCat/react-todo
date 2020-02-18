import React, { Component, Fragment } from 'react';
import { TodoText, Remove, Important } from './styles';

export default class TodoListItem extends Component {

    render() {
        const { label, onDelited, onToggleImportant, onToggleDone, done, important } = this.props;


        return (
            <Fragment>
                <TodoText 
                    important={important} 
                    done={done} 
                    onClick={onToggleDone}>
                        {label}
                </TodoText>
                <Remove 
                    onClick={onDelited}>
                        remove
                </Remove>
                <Important 
                    important={important} 
                    onClick={onToggleImportant}>
                        important
                </Important>
            </Fragment>
        );
    }
};

