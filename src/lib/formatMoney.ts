import { FormatMoney } from 'format-money-js'

export const fm = new FormatMoney({
  decimals: 2,
  symbol: 'R$ ',
  decimalPoint: ',',
  separator: '.'
})
