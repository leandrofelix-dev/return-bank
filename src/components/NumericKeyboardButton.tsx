interface INumericKeyboardButton {
  item: number | 'confirm' | 'cancel'
}
export function NumericKeyboardButton({ item }: INumericKeyboardButton) {
  switch (item) {
    case 'confirm':
      return (<button className="m-2 bg-green-300 h-20 w-20 rounded-xl text-5xl font-bold bg-opacity-80 hover:bg-opacity-100 transition-all">✅</button>)
      break
    case 'cancel':
      return (<button className="m-2 bg-red-300 h-20 w-20 rounded-xl text-5xl font-bold bg-opacity-80 hover:bg-opacity-100 transition-all">❌</button>)
      break
    default:
      return (<button className="m-2 bg-purple-300 h-20 w-20 rounded-xl text-5xl font-bold bg-opacity-80 hover:bg-opacity-100 transition-all">{item}</button>)
      break
  }
}
