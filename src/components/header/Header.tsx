import type { Component } from 'solid-js'
import Clock from '../clock/Clock'

const Header: Component = () => {
  return (
    <div class="flex flex-row justify-between">
      <div class="w-12  sm:text-2xl md:text-3xl p-3 self-center">
        🔒
      </div>
      <div class="p-3 self-center sm:text-2xl md:text-3xl text-red-700">
         yc generator 2
      </div>
      <div class="w-12 sm:w-16 md:w-20 ">
        <Clock />
      </div>
    </div>
  )
}

export default Header
