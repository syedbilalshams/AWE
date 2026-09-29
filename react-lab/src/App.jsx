import ContactList from "./ContactList";
import LoginForm from "./LoginForm";
import Counter from "./Counter";
import Toggle from "./toggle";
import "./App.css";

export default function App() {
  return (
    <div className="layout">
      <ContactList />
      <div className="main">
        <LoginForm />
        <Counter />
        <Toggle />
      </div>
    </div>
  );
}