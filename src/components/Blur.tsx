import blurOne from '../assets/blur1.svg'
import blurTwo from '../assets/blur2.svg'

export function Blur() {
  return (
    <div className="w-screen h-screen flex absolute z-0">
      <div className="h-full absolute flex">
        <img src={blurOne} alt="Blur" />
      </div>

      <div className="absolute right-0">
        <img src={blurTwo} alt="Blur" />
      </div>
    </div>
  )
}

