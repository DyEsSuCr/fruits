import fruitSalad from '@/images/fruit-salad.png?url'
import milkshake from '@/images/milkshake-pasteque.png?url'
import pizza from '@/images/roman-pizza.png?url'
import salad from '@/images/salad.png?url'

import type { Card } from '@/interface/interfaces'

const description = 'But I must explain to you how all this mistaken idea of  will give you a complete account of the system'

export const foodItems: Card[] = [
  {
    img: fruitSalad,
    title: 'Fruit salad',
    description,
    link: 'javascript:void(0)'
  },
  {
    img: milkshake,
    title: 'Milkshake',
    description,
    link: 'javascript:void(0)'
  },
  {
    img: pizza,
    title: 'Pizza',
    description,
    link: 'javascript:void(0)'
  },
  {
    img: salad,
    title: 'Salad',
    description,
    link: 'javascript:void(0)'
  }
]
