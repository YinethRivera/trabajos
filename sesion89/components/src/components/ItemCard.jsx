import React from "react";
import styles from "./ItemCard.module";

const ItemCard = () => {
    console.log(styles)
    return (
      <div className={styles.itemCard}>
        <img
          className={styles.itemCardImage}
          src="sesion89\components\src\assets\miLogo.png"
          alt=""
        />
        <div className="style.itemCard"></div>
      </div>
    );
}

export default ItemCard