import Hello from "./Hello";
import Counter from "./Counter";
import TextInput from "./TextInput";
import GreetingForm from "./GreetingForm";

function App() {
  return (
    <div>
      <Hello name="Stoyanka" />
      <Hello name="Minka" />
      <Hello name="React Hero" />
      <Hello name="React Learner" />
      <Counter />
      <TextInput />
      <GreetingForm />
    </div>
  );
}

export default App;
