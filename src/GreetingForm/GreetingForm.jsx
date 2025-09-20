import { useState } from "react";
import "./GreetingForm.css"; // 🎨 импорт на стилове

function GreetingForm() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();

    // 1️⃣ Проверка: празно поле
    if (trimmedName === "") {
      setError("⚠️ Моля, въведи име!");
      return;
    }

    // 2️⃣ Проверка: минимална дължина (примерно 3 букви)
    if (trimmedName.length < 3) {
      setError("⚠️ Името трябва да е поне 3 букви!");
      return;
    }

    // 3️⃣ Проверка: само букви (латиница или кирилица)
    const onlyLetters = /^[A-Za-zА-Яа-я]+$/;
    if (!onlyLetters.test(trimmedName)) {
      setError("⚠️ Името може да съдържа само букви!");
      return;
    }

    // Ако всичко е наред
    setGreeting(`Здравей, ${trimmedName}! 👋`);
    setName("");
  };

  return (
    <div className="form-container">
      <h1>Поздрави някого 👇</h1>
      <form onSubmit={handleSubmit} className="greeting-form">
        <input
          type="text"
          placeholder="Въведи име..."
          value={name}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Поздрави
        </button>
      </form>

      {error && <p className="error-msg">{error}</p>}
      {greeting && <p className="greeting-msg">{greeting}</p>}
    </div>
  );
}

export default GreetingForm;
