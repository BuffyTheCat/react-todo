import styled from 'styled-components';

const TodoText = styled.span`
    cursor: pointer;
    width: 100%;
    text-decoration: ${ props => props.done ? 'line-through' : 'none'};
    color: ${ props => props.important ? 'red' : 'black'};
    font-weight: ${ props => props.important ? 'bold' : 'normal'};
`;

const Remove = styled.button`
    cursor: pointer;
`;

const Important = styled.button`
    cursor: pointer;
    color: ${ props => props.important ? 'red' : 'black'};
`;

export { TodoText, Remove, Important };