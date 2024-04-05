import styles from '../Buttons.module.css'
function Buttons({getData}) {
  let buttons = ["C", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/","="]
  return <div className={styles.Button}>
   {buttons.map((btn)=>{
    return <button onClick={getData}>{btn}</button>
   })}
  </div>
}
export default Buttons