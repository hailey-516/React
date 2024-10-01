import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const MessageDiv = styled.div`
    float: right;
    text-align: right;
    border: 2px solid #222;
    background-color: #416AD7;
`

const ResponseDiv = styled.div`
    text-align: left;
    border: 2px solid #222;
    background-color: #F2F7FF;
    float: left;
`

const commonStyle = {
    borderRadius: '20px',
    padding: '10px',
    margin: '2px'
}

const ChatList = ({chatList, loading}) => {
    return (
        <Container>
            {
                // chat은 sendMessage에서 만들어 놓은 data 객체
                chatList.map((chat, index)=>{
                    return (
                        <div key={index}>
                            <MessageDiv style={commonStyle}>
                                {chat.message}
                            </MessageDiv>
                            <br clear="both" />
                            <ResponseDiv style={commonStyle}>
                                {chat.response}
                            </ResponseDiv>
                        </div>
                    )
                })
            }
            {
                loading &&
                <div>
                    챗봇이 답장을 고민하고 있습니다...
                </div>
            }
        </Container>
    )
}

export default ChatList;