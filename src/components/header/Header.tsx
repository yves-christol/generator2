import type { Component } from 'solid-js';
import logo from './logo.svg';
import Clock from '../clock/Clock'

const Header: Component = () => {
  return (
    <div class="flex flex-row justify-between">
      <div class="w-12 sm:w-16 md:w-20 p-3 self-center">
        <img src={logo} alt="logo"/>
      </div>
      <div class="p-3 self-center sm:text-2xl text-red-400">
         yc generator 2
      </div>
      <div class="w-12 sm:w-16 md:w-20 ">
        <Clock />
      </div>
    </div>
  )
}

export default Header
