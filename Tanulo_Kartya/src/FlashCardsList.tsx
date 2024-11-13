import FlashCard from "./FlashCard"
import { flashCardType } from "./type/type"

type flashCardListProps = {
  flashcards:flashCardType[]
}


const FlashCardsList = ({flashcards}:flashCardListProps) => {
  return (
    <div className='card-grid'>
      {flashcards.map(flashcard =>(
        <FlashCard flashcard={flashcard}></FlashCard>
      ))}
    </div>
  )
}

export default FlashCardsList