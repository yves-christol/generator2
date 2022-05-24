import type { Component } from 'solid-js';
import logo from './logo.svg';
import Header from './components/header/Header'
import Generator from './components/generator/Generator'
import Board from './components/board/Board'

const App: Component = () => {
  return (
    <div class="bg-gray flex flex-col">
      <Header />
      <Generator />
      <Board />
    </div>
  )
}

export default App
