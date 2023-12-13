import styled from 'styled-components';

const Body = () => {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date();
    console.log(date);

    // 원하는 형식으로 날짜를 설정합니다.
    //https://doooodle932.tistory.com/150

    return (
        <S.Wrapper>
            <S.Table>
                <thead>
                    <tr>
                        {daysOfWeek.map((day, i) => (
                            <th key={i}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <S.Tbody>
                    <S.day>1</S.day>
                    <S.day>3</S.day>
                    <S.day>4</S.day>
                    <S.day>5</S.day>
                </S.Tbody>
            </S.Table>
        </S.Wrapper>
    );
};

export default Body;

const Wrapper = styled.div`
    width: 1160px;
`;

const Table = styled.div`
    padding: 1rem;
    background: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
`;

const Tbody = styled.tbody`
    display: flex;
`;

const day = styled.tr`
    padding: 10px;
`;

const S = {
    Wrapper,
    Table,
    Tbody,
    day,
};
