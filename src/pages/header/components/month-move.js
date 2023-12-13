import styled from 'styled-components';

const MonthMove = () => {
    return (
        <Wrapper>
            <Button>&lt;</Button>
            <Button>Today</Button>
            <Button>&gt;</Button>
        </Wrapper>
    );
};
export default MonthMove;

const Wrapper = styled.div`
    display: flex;
    justify-content: right; 
`;
const Button = styled.button`
    border: 1px solid #757575;
    border-radius: 4px;
    // margin-right: 1px;
    cursor: pointer;
`;
