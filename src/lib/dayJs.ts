import * as dayjs from 'dayjs'
import { saudacaoType } from '../@types/types'
const hour: number = dayjs().hour()

export let saudacao: saudacaoType

export function getSaudacao() {
  if (hour >= 6 && hour < 12) {
    saudacao = 'Bom dia⛅'
  }
  else if (hour >= 12 && hour < 18) {
    saudacao = 'Boa tarde☀️'
  }
  else {
    saudacao = 'Boa noite🌙'
  }
}
