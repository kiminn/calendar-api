import styled from 'styled-components';
import calendar from '../../images/calendar.png';
import plus from '../../images/plus.png';
import MonthMove from './components/month-move';
import SearchPage from './components/search';

const Header = () => {
    // const viewYear = date.getFullYear();
    // const viewMonth = date.getMonth();
    return (
        <S.Wrapper>
            {/* LeftContent */}
            <S.LeftContent>
                <S.IconContainer>
                    <S.CalendarIcon src={calendar} />
                    <S.PlusIcon src={plus} />
                </S.IconContainer>
                <S.Year>2024</S.Year>
            </S.LeftContent>
            {/* Center */}
            <S.Month>
                <S.EngMonth>FEBRUARY</S.EngMonth>
                <S.NumMonth>2</S.NumMonth>
            </S.Month>
            {/* RightContent */}
            <S.RightContent>
                <S.Search>
                    <SearchPage />
                </S.Search>
                <>
                    <MonthMove />
                </>
            </S.RightContent>
        </S.Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    padding: 16px;
    display: flex;
    justify-content: space-between;
    height: 100px;
`;

const IconContainer = styled.div`
    display: flex;
`;

const CalendarIcon = styled.img`
    padding-right: 10px;
`;
const PlusIcon = styled.img``;

const Year = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE['large']};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    padding-top: 12px;
`;
const NumMonth = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE['extraLarge']};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    padding: 4px;
`;
const EngMonth = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE['small']};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;

const Search = styled.div`
    font-size: ${({ theme }) => theme.FONT_SIZE['large']};
`;

const LeftContent = styled.div``;

const Month = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RightContent = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: right; */
`;

const S = {
    IconContainer,
    Wrapper,
    Year,
    Month,
    Search,
    EngMonth,
    NumMonth,
    LeftContent,
    RightContent,
    CalendarIcon,
    PlusIcon,
};
