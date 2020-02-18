import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
    margin-bottom: 36px;

    li {
        display: flex;

        &:not(:last-of-type) {
            margin-bottom: 16px;
        }

        button {
            &:not(:last-of-type) {
                margin-right: 8px;
            }
        }
    }
`;

export { List };