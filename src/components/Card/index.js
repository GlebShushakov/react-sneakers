import styles from "./Card.module.scss";
import React from "react";

console.log(styles);

function Card({ onClickFavorite, imageUrl, title, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  React.useEffect(() => {
    console.log("переменная изменилась");
  }, [isAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/img/hearth-off.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/submit.svg" : "/img/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}
export default Card;
