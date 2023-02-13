import blurOne from '../assets/blur1.svg'
import blurTwo from '../assets/blur2.svg'

export function Blur() {
  return (
    <div className="h-screen w-screen flex fixed z-0">
      <div className="h-full left-0">
        <img src={blurOne} alt="Blur" className="absolute bottom-0 left-0"/>
      </div>

      <div className="h-screen w-screen flex fixed z-0">
        <img src={blurTwo} alt="Blur" className="absolute top-0 right-0"/>
      </div>
    </div>
  )
}
