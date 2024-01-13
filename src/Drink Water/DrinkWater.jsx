import { useState } from "react"
import "./DrinkWater.scss"
export const DrinkWater = () => {
  const [click, setClick] = useState("")
  return (
    <div className="drink-water-container">
      <h2 className="limit">Drink Water!</h2>
      <p className="goal">Goal: 2 Liters</p>
      <div className="drink-water-top">
        <div className="water-empty" style={{ height: `calc(100% - 12.5% * ${click})` }}>
          <span className="liter">{2 - 0.25 * click}L</span>
          <span className="remained">remained</span>
        </div>
        <div className="water-filled" style={{ height: `calc(12.5% * ${click})` }}>
          {
            click == 0 ? <span className="percentage"></span> : <span className="percentage">{12.5 * click}%</span>
          }
        </div>
      </div>
      <p>select how much bottol you have drunk water</p>
      <div className="drink-water-bottom">
        {
          selectedWater.map((_, i) => {
            return <span className="small-bottel" style={click > i ? { backgroundColor: "#ffffffb7", color: "#144fc6" } : { background: "steetblue", color: "#fff" }} onClick={() => {
              setClick(i + 1)
            }}>{_}</span>
          })
        }
      </div>
    </div >
  )
}
//5.5125
const selectedWater = ["250 ml", "250 ml", "250 ml", "250 ml", "250 ml", "250 ml", "250 ml", "250 ml",]