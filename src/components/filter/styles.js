import styled from 'styled-components';

const FilterButton = styled.button`
    cursor: pointer;
    color: ${ props => props.active ? '#004080' : '#5b6f76'};
    border: none;
    padding: 8px 16px;
    background-color: ${ props => props.active ? '#f0c010' : '#71c8e9'};
    box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.16), inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.12), 0 0 8px rgba(0, 140, 210, 0);
    border-radius: 8px;
    font-weight: bold;
    transition: box-shadow .3s;

    &:hover {
        box-shadow: ${ props => props.active ? '0 8px 8px rgba(255, 221, 0, 0.2), 0 0 8px rgba(255, 221, 0, 0.08);' : '0 8px 8px rgba(0, 140, 210, 0.16), inset 0 -0.0625rem 0 rgba(0, 0, 0, 0), 0 0 8px rgba(0, 140, 210, 0.08)'};
    }
`;

const Filters = styled.div`
    display: flex;

    button {
        outline: none;

        &:not(:last-of-type) {
            margin-right: 8px;
        }
    }
`;

export { FilterButton, Filters };