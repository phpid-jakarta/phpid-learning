import { writable, readable } from 'svelte/store'
import data from '../../data-es'

export const originData = readable(data.data, function set () {
  return function destroy () {}
})
export const allData = writable(data.data)

export const activeTheme = writable('')
