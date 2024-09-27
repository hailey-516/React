import { useState, useRef } from "react";

const taStyle = {
    resize: 'none',
    minHeight: '500px',
    minWidth: '50%'
}

function Count() {
    const [text, setText] = useState(0);

    const taRef = useRef();

    const changeText = (e) => {
        setText(e.target.value.length);
    }

    const resetPage = () => {
        setText('');

        taRef.current.focus();
    }
    return (
        <>
            <textarea style={taStyle}
                    onChange={changeText}
                    value={text}
                    ref={taRef}
                    />
            <p>공백 포함 {text.length}자</p>
            <p>공백 제외 {text.replace(/ /g, '').length}자</p>
            <hr></hr>
            <button onClick={resetPage}>초기화</button>
        </>
    )
}

export default Count;