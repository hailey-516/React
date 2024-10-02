import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    min-height: 100vh;
    color: #fff;
    padding: 1.2em;
`
/************* 헤더 영역 *************/
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.span`
    font-family: HakgyoansimByeolbichhaneulTTF-B;
    font-size: 20px;
    color: #e50914;

    &:hover {
    color: #46d369;
    cursor: pointer;
    }
`
/************* 푸터 영역 *************/
export const Main = styled.main`
    flex: 1;
`

/************* 푸터 영역 *************/
export const FooterText = styled.p`
    font-size: 12px;
`