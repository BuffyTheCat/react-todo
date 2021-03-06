import React, { Component } from 'react';
import AppHeader from '../../components/app-header/app-header';
import SearchPanel from '../../components/search-panel/search-panel';
import TodoList from '../../components/todo-list/todo-list';
import ItemAddForm from '../../components/item-add-form/item-add-form';
import { Main } from './styles';


export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoElement('Drink water'),
            this.createTodoElement('Make dinner'),
            this.createTodoElement('Dress'),
            this.createTodoElement('Go to work')
        ],
        term: '',
        filter: 'all'
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
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
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {            
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    filtrate = (name) => {
        console.log(1);
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

    search (items, term) {
        if (term.lenght === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    onSearchChange = (term) => {
        this.setState({term});
    }


    onFilterChange = (filter) => {
        this.setState({filter});
    }

    render() {
        const doneTodo = this.state.todoData.filter((el) => el.done).length;
        const todo = this.state.todoData.length - doneTodo;
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);

        return (
            <Main>
                <AppHeader pageTitle='Todo list' todo={todo} doneTodo={doneTodo} />
                <SearchPanel 
                    onSearchChange={this.onSearchChange} 
                    onFilterChange={this.onFilterChange} 
                    filter={filter}    
                />
                <TodoList 
                    todos={visibleItems}
                    onDelited={this.removeItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm addItem={this.addItem} />
            </Main>
        );
    }
}