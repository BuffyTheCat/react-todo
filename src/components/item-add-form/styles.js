import styled from 'styled-components';

const AddWrap = styled.form`
    display: flex;
    width: 100%;
    margin-bottom: 8px;

    input {
        flex-grow: 2;
        padding: 8px;
        margin-right: 20px;
        font-size: 16px;
        color: #5b6f76;
        border: none;
        border-bottom: 0.0625rem solid #93a2a7;
        outline: none;
    }

    button {
        width: 108px;
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
        color: #5b6f76;
        font-weight: bold;
        background-color: #95ef9d;
    }
`;

export { AddWrap };