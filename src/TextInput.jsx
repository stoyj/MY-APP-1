import { useState } from "react";

function TextInput() {
  // Създаваме state, за да пазим текста
  const [text, setText] = useState("");

  // Функция, която се извиква при всяка промяна в полето
  const handleChange = (event) => {
    setText(event.target.value); // обновяваме state с въведеното
  };

  return (
    <div style={{ textAlign: "center", marginTop: "25px" }}>
      <h1>Въведи текст 👇</h1>

      <input
        type="text"
        placeholder="Пиши тук..."
        value={text}
        onChange={handleChange}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p style={{ marginTop: "20px" }}>
        👉 Ти написа: <strong>{text}</strong>
      </p>
    </div>
  );
}

export default TextInput;
//💡 Обяснение:
// useState('') → започваме с празен текст.
// value={text} → връзка между state и input (контролирано поле).
// onChange={handleChange} → при всяка буква обновяваме state.
// event.target.value → взимаме текста от полето.
