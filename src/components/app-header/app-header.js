import React, {Component} from 'react';
import { Header } from './styles';


export default class AppHeader extends Component {
    render() {
        const { pageTitle, todo, doneTodo } = this.props;
        return (
            <Header>
                <h1>{pageTitle}</h1>
                <p>{todo} more todo, {doneTodo} done</p>
            </Header>
        );
    }
}