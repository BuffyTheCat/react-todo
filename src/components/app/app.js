import React, { Component } from 'react';
import AppHeader from '../../components/app-header/app-header';
import SearchPanel from '../../components/search-panel/search-panel';
import TodoList from '../../components/todo-list/todo-list';
import ItemAddForm from '../../components/item-add-form/item-add-form';

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoElement('Drink water'),
            this.createTodoElement('Drink water 2'),
            this.createTodoElement('Drink water 3'),
            this.createTodoElement('Drink water 4')
        ]
    }

    createTodoElement(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];
            
            return {
                todoData: newArray 
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];
            
            return {
                todoData: newArray 
            }
        })
    }

    removeItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newElem = this.createTodoElement(text);
        this.setState(({todoData}) => {
            const newArray = [ ...todoData, newElem]

            return {
                todoData: newArray
            };
        });
    }

    render() {
        const doneTodo = this.state.todoData.filter((el) => el.done).length;
        const todo = this.state.todoData.length - doneTodo;

        return (
            <div>
                <AppHeader pageTitle='Todo list' todo={todo} doneTodo={doneTodo} />
                <SearchPanel />
                <TodoList 
                    todos={this.state.todoData}
                    onDelited={this.removeItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm addItem={this.addItem} />
            </div>
        );
    }
}