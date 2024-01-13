import { useState } from "react"
import "./DrinkWater.scss"
export const DrinkWater = () => {
  const [click, setClick] = useState(0)
  return (
    <div className="drink-water-container">
      <div className="drink-water-top">
        <div className="limit">Drink Water!</div>
        <div className="goal">Goal: 2 Liters</div>
        <div className="water-glass">
          <div className="water-line" style={{ bottom: `calc(12.5% * ${click})` }}>
            <div>2L</div>
            <span>Remained</span>
          </div>
        </div>
      </div>
      <div className="drink-water-bottom">
        <p>Select how many glasses of water that you have drank</p>
        <div className="selected-water-glass">
          {
            selectedWater.map((_, i) => {
              return <span className="small-glasses" onClick={() => {
                setClick(i + 1)
              }}>{_}</span>
            })
          }
        </div>
      </div>
    </div>
  )
}

const selectedWater = ["250 ml", "250 ml", "250 ml", "250 ml", "250 ml", "250 ml", "250 ml", "250 ml",]