import React, { Component } from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import { List } from './styles'

export default class TodoList extends Component {
    render() {
        const { todos, onDelited, onToggleImportant, onToggleDone } = this.props;
        const elements = todos.map((item) => {
            return (
                <li key={item.id} className="list-group-item">
                    <TodoListItem 
                        onToggleImportant={() => onToggleImportant(item.id)} 
                        onToggleDone={() => onToggleDone(item.id)} 
                        onDelited={() => onDelited(item.id)} 
                        {...item} 
                    />
                </li>
            );
        });

        return(
            <List className="list-group todo-list">
                {elements}
            </List>
        );
    }
}

