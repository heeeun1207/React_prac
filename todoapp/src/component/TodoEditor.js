import { useRef,useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({onCreate}) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(); // 입력 폼 제어할 inputRef 변수 생성
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if(!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
  };

  return ( 
  <div className="TodoEditor">
    <h4>새로운 Todo 작성하기 🖌</h4>
    <div className="editor_wrapper">
      <input 
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
