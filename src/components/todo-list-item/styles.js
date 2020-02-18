import styled from 'styled-components';

const TodoText = styled.span`
    width: 100%;
    padding: 8px 16px;
    margin-right: 8px;
    text-decoration: ${ props => props.done ? 'line-through' : 'none'};
    color: ${ props => props.important ? '#f96730' : '5b6f76'};
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 0 0.125rem rgba(0,0,0,0.16), inset 0 -0.0625rem 0 rgba(0,0,0,0.12), 0 0 8px rgba(0,140,210,0);
    transition: all .3s;
`;

const Remove = styled.button`
    width: 50px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 0 0 0.125rem rgba(0,0,0,0.16), inset 0 -0.0625rem 0 rgba(0,0,0,0.12), 0 0 8px rgba(0,140,210,0);
    padding: 5px;
    outline: none;

    svg {
        width: auto;
        height: 20px;
    }
`;

const Important = styled.button`
    cursor: pointer;
    background-color: ${ props => props.important ? '#ffccb9' : '5b6f76'};
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 0 0 0.125rem rgba(0,0,0,0.16), inset 0 -0.0625rem 0 rgba(0,0,0,0.12), 0 0 8px rgba(0,140,210,0);
    padding: 5px;
    outline: none;

    svg {
        width: auto;
        height: 20px;
        
    }
`;

export { TodoText, Remove, Important };