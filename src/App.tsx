import { Header } from './components/Header';
import './global.css';

import styles from './App.module.css';

export function App() {
  return (
    <main>
      <Header />
        <section>
          <Input />
          <Button />
        </section>
      <aside>
        <toDoList />

      </aside>
      
    </main>
  )
}


