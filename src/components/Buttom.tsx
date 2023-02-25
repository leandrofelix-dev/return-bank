export interface IButtomProps {
  logo: string
  text: string
  type: 'primary' | 'secondary'
}
export function Buttom({ logo, text, type }: IButtomProps) {
  if (type === 'primary') {
    return (
      <button className="rounded-xl bg-purpleAlpha h-44 w-44 flex flex-col items-center justify-center">
        <div className="px-10 self-center  flex flex-col items-center justify-center">
          <img className="h-20 w-20" src={logo} alt={text} />
          <p className="font-bold mt-2 text-zinc-200 text-md">{text}</p>
        </div>
      </button>
    )
  } else {
    return (
      <button className="rounded-xl text-greenPrimary bg-greenAlpha h-44 w-44 flex flex-col items-center justify-center">
        <div className="px-10 self-center  flex flex-col items-center justify-center">
          <img className="h-20 w-20" src={logo} alt={text} />
          <p className="font-bold mt-2">{text}</p>
        </div>
      </button>
    )
  }
}
