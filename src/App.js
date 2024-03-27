import "./App.css";
import CardList from "./components/CardList";

const data = [
  {
    name: "Безлимитный 300",
    currency: "руб",
    price: "300",
    interval: "/мес",
    traffic: "до 10 Мбит/сек",
    content: "Объем включенного трафика не ограничен",
  },
  {
    name: "Безлимитный 450",
    currency: "руб",
    price: "450",
    interval: "/мес",
    traffic: "до 50 Мбит/сек",
    content: "Объем включенного трафика не ограничен",
  },
  {
    name: "Безлимитный 550",
    currency: "руб",
    price: "550",
    interval: "/мес",
    traffic: "до 100 Мбит/сек",
    content: "Объем включенного трафика не ограничен",
  },
  {
    name: "Безлимитный 1000",
    currency: "руб",
    price: "1000",
    interval: "/мес",
    traffic: "до 200 Мбит/сек",
    content: "Объем включенного трафика не ограничен",
  },
];

function App() {
  return (
    <div className="App">
      <CardList data={data} />
    </div>
  );
}

export default App;
