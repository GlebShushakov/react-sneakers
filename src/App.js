import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999 руб.",
    imageUrl: "/img/sneakers/sneakers-1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999 руб.",
    imageUrl: "/img/sneakers/sneakers-2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499 руб.",
    imageUrl: "/img/sneakers/sneakers-3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999 руб.",
    imageUrl: "/img/sneakers/sneakers-4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img width={16} height={16} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
