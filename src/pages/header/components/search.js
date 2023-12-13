import styled from 'styled-components';
import SearchIcon from '../../../images/loupe.png';

const SearchPage = () => {
    return (
        <Wrapper>
            <input />
            <img src={SearchIcon} />
        </Wrapper>
    );
};
export default SearchPage;
const Wrapper = styled.form`
    position: relative;
    display: flex;
    // margin-top: 12px;
    & > img {
        position: absolute;
        top: 8px;
        left: 8px;
    }
    & > input {
        border-radius:10px;
        height: 32px;
        width:175px;
        border: none;
        margin-bottom:15px;
        background-color:${({ theme }) => theme.COLORS.gray['100']};

    }
`;
