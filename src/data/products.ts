import { Product } from '../types/products';

export const products: Product[] = [
  {
    id: 1,
    subtitle: 'Сказочное заморское яство',
    title: 'Нямушка',
    description: 'с фуа-гра',
    portions: {
      count: 10,
      text: 'порций',
    },
    gift: {
      count: null,
      text: 'мышь в подарок',
    },
    weight: '0,5',
    bottomText: 'Чего сидишь? Порадуй котэ, ',
    disabled: false,
    hoverText: 'Котэ не одобряет?',
    selectedText: 'Печень утки разварная с артишоками.',
    disabledText: 'Печалька, с фуа-гра закончился.',
  },
  {
    id: 2,
    subtitle: 'Сказочное заморское яство',
    title: 'Нямушка',
    description: 'с рыбой',
    portions: {
      count: 40,
      text: 'порций',
    },
    gift: {
      count: 2,
      text: 'мыши в подарок',
    },
    weight: '2',
    bottomText: 'Чего сидишь? Порадуй котэ, ',
    disabled: false,
    hoverText: 'Котэ не одобряет?',
    selectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disabledText: 'Печалька, с рыбой закончился.',
  },
  {
    id: 3,
    subtitle: 'Сказочное заморское яство',
    title: 'Нямушка',
    description: 'с курой',
    portions: {
      count: 100,
      text: 'порций',
    },
    gift: {
      count: 5,
      text: 'мышей в подарок',
    },
    review: 'заказчик доволен',
    weight: '5',
    bottomText: 'Чего сидишь? Порадуй котэ, ',
    disabled: true,
    hoverText: 'Котэ не одобряет?',
    selectedText: 'Филе из цыплят с трюфелями в бульоне.',
    disabledText: 'Печалька, с курой закончился.',
  },
];
