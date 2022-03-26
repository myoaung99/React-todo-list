import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Card from "./components/UI/Card";
import Input from "./components/UI/Input";
import Footer from "./components/Footer";

function App() {
  return (
    <Card>
      <Header />
      <Input />
      <TodoList />
      <Footer />
    </Card>
  );
}

export default App;
