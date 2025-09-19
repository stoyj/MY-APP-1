import "./Hello.css";

function Hello(props) {
  return (
    <div>
      <h1>Hello, {props.name}! 👋</h1>
      <p>Добре дошъл в света на React 🎉</p>
    </div>
  );
}

export default Hello;
