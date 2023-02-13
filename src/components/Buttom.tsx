import { audio } from "../App";

export interface IButtomProps {
  logo: string
  text: string
  // type: 'normal' | 'alt'
}
export function Buttom ({logo, text}: IButtomProps) {
  return (
    <button
      className="rounded-xl text-purpleAlpha bg-purpleAlpha h-44 w-44 flex flex-col items-center justify-center"
      onClick={audio.play}
    >
      <div className="px-10 self-center  flex flex-col items-center justify-center">
        <img className="h-20 w-20" src={logo} alt={text} />
        <p className="font-bold mt-2 text-zinc-200 text-md">{text}</p>
      </div>

    </button>
  );
}
