"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Ingredients from './components/ingredients/ingredients'
import Recipe from './components/recipe/recipe'
import Meal from './components/meal/meal'

export default function Home() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <Meal count={count} increment={increment} decrement={decrement} />
       <div className={styles.details}>
       <Ingredients count={count} />
       <Recipe />
       </div>
      </div>
    </main>
  )
}
