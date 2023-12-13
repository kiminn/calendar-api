import styled from 'styled-components';
import Header from './header';
import Body from './body';

const Calendar = () => {
    return (
        <S.Wrapper>
            <S.Container>
                <Header />
                <Body />
            </S.Container>
        </S.Wrapper>
    );
};

export default Calendar;

const Container = styled.div`
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1160px;
    height: 680px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.gray['300']};
    box-shadow: 2px 2px 2px 2px ${({ theme }) => theme.COLORS.gray['200']};
`;

const Wrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
`;

const S = {
    Container,
    Wrapper,
};
