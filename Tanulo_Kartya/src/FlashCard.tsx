import { useState } from "react"
import { flashCardType } from "./type/type"

type flashCardProps = {
  flashcard:flashCardType
}

const FlashCard = ({flashcard}:flashCardProps) => {

  const [flip, setFlip] = useState(false)

  return (
    <div onClick={()=>setFlip(!flip)} className={`card ${flip? 'flip' : ''}`}>
      <div className="front">
          {flashcard.question}
      </div>

      <div className="back">
          {flashcard.answer}
      </div>
    </div>
  )
}

export default FlashCard