import { writable, readable, derived } from 'svelte/store'

import data from '../../data-es'

export const originData = readable(data.data, function set () {
  return function destroy () {}
})

export const showData = writable(data.data)

export const currentPage = writable(1)
export const perPage = writable(9)
export const offsetPage = derived(
  [currentPage, perPage],
  ([$currentPage, $perPage]) => {
    return $currentPage * $perPage - $perPage
  }
)
export const totalPage = derived(originData,
  ($originData) => {
    return $originData.length
  }
)

export const activeTheme = writable('')
