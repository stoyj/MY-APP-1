import Hello from "./Hello";
import Counter from "./Counter";
import TextInput from "./TextInput";

function App() {
  return (
    <div>
      <Hello name="Stoyanka" />
      <Hello name="Minka" />
      <Hello name="React Hero" />
      <Hello name="React Learner" />
      <Counter />
      <TextInput />
    </div>
  );
}

export default App;
