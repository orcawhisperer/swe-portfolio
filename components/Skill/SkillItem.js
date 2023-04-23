import React from "react"
import styles from "./SkillItem.module.css"

const SkillItem = ({ skill, index }) => {
   return (
      <div
         className={`${styles.skillItem}`}
         style={{ width: `${skill.proficiencyLevel}%` }}>
         <div className={`${styles.textContainer}`}>
            <h4 className={`${styles.title}`}>{skill.name}</h4>
            <p className={`${styles.description}`}>{skill.description}</p>
         </div>
         <div className={`${styles.slantedShapeContainer}`}>
            <div
               className={`${styles.slantedShape}`}
               style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)",
                  transform: `translateX(${
                     index % 2 === 0 ? "-10px" : "10px"
                  }) translateY(0)`,
                  animation: `wave 1.5s ${index * 0.1}s infinite alternate`,
               }}></div>
         </div>
      </div>
   )
}

export default SkillItem
