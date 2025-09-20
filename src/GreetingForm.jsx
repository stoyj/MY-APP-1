import { useState } from "react";

function GreetingForm() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState(""); // ✅ нов state за грешки

  const handleChange = (event) => {
    setName(event.target.value);
    setError(""); // изчистваме грешката, ако потребителят започне да пише
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // 🔎 Проверяваме дали полето е празно
    if (name.trim() === "") {
      setError("⚠️ Моля, въведи име!");
      return; // спираме изпращането
    }

    // Ако всичко е наред
    setGreeting(`Здравей, ${name}! 👋`);
    setName("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Поздрави някого 👇</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Въведи име..."
          value={name}
          onChange={handleChange}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            marginLeft: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Поздрави
        </button>
      </form>

      {/* Показваме грешка ако има */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Показваме поздрав ако има */}
      {greeting && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>{greeting}</p>
      )}
    </div>
  );
}

export default GreetingForm;
//💡 Какво правим тук:
// useState('') – за name (текущ текст) и greeting (поздрав).
// onChange → обновява name при всяка буква.
// onSubmit → при клик на бутона се създава съобщение и се записва в greeting.
// {greeting && (...)} → показваме параграфа само ако има текст.

//💡 Какво добавихме:
// 1.error state – пази текста на грешката.
// 2.Проверка if (name.trim() === '') .trim() маха празни интервали. Ако името е празно → показваме грешка и спираме изпращането.
// 3.setError('') в handleChange. При всяко писане изчистваме старото съобщение за грешка.

// 🟢 2️⃣ Тествай
// ✅ Ако натиснеш Поздрави с празно поле → ще се покаже червено съобщение: ⚠️ Моля, въведи име!
// ✅ Ако напишеш име → ще видиш поздрав и полето ще се изчисти.
