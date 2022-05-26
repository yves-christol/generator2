import type { Component, Accessor } from 'solid-js'
import { createSignal } from 'solid-js'
import {Md5} from 'ts-md5/dist/md5'

function copyTextToClipboard(text: string) {
  if (!navigator.clipboard) {
    console.log('Copy to clipboard not supported on this avigator')
    return
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!')
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  })
}

const Generator: Component = () => {
  const [key, setKey] = createSignal('');
  const [site, setSite] = createSignal('');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeric = '0123456789';
  const all = alphabet+caps+numeric;
  const symb = '!#$€%&()*+,-./:;<=>?@[\]^_`{|}~';

  const getChar = (code: string, type: string) => (
    type[parseInt(code, 16) % type.length]
  )

  const scramble = () => {
    const hash = Md5.hashStr(key()+site());
    let output = getChar(hash.substring(0,2), caps);
    output += getChar(hash.substring(2,4), alphabet);
    output += getChar(hash.substring(4,6), numeric);
    Array(8).fill('-').map((_, i) => {
      output += getChar(hash.substring(4+i*2, 6+i*2), all);
    });
    output += getChar(hash.substring(20,22), symb);
    return output;
  }

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const password = scramble();
    copyTextToClipboard(password);
    setKey('');
    setSite('');
    //console.log('Password copied to clipboard');
  }

  const handleChange = (event: Event, setValue: (newValue: string) => void) => {
    const inputElement = event.currentTarget as HTMLInputElement
    setValue(inputElement.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="flex flex-row bg-gradient-to-b from-black via-gray-700 to-black justify-center">
        <input 
          value={key()}
          type='password'
          class="m-1 sm:m-3 w-24 sm:w-48 md:w-64 sm:p-1 md:p-2 bg-gray-900 text-red-700 md:mr-2 rounded-full"
          onChange={(event: Event) => { handleChange(event, setKey)}}
        />
        <input 
          value={site()}
          type='text'
          class="m-1 sm:m-3 w-24 sm:w-48 md:w-64 sm:p-1 md:p-2  bg-gray-900 md:mr-2 text-red-700 rounded-full"
          onChange={(event: Event) => { handleChange(event, setSite)}}
        />
        <button 
          type="submit" 
          value="Submit"
          class="m-1 sm:m-3 bg-red-900 hover:bg-red-700 py-2 px-4 rounded-full"
        >
          🔑
        </button>
      </div >
    </form>
  );
}

export default Generator
