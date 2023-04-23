import React from "react"
import styles from "./GlassContainer.module.css"

const GlassContainer = ({ fillLevel }) => {
   let fillClass = ""
   if (fillLevel <= 0) {
      fillClass = styles.empty
   } else if (fillLevel >= 100) {
      fillClass = styles.full
   } else {
      fillClass = `${styles.fill}${fillLevel}`
   }

   return (
      <div className={`${styles.container}`}>
         <div className={`${styles.liquid} ${fillClass}`}>
            <div className={`${styles.wave}`}></div>
            <div className={`${styles.wave} ${styles.wave2}`}></div>
         </div>
      </div>
   )
}

export default GlassContainer
