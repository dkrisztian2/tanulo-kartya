import { useEffect, useState } from "react"
import { flashCardType } from "./type/type"
import { SampleFlashCards } from "./data/data"
import FlashCardsList from "./FlashCardsList"
import { fetchQuestions } from "./api/api"
import './index.css'


const App = () => {
  const [flashCards, setFlashCards] = useState<flashCardType[]>([])
  const [isLoading, setIsloading] = useState(true)


  useEffect(()=>{
    const getQuestions = async() =>{
      const questions = await fetchQuestions()
      if(questions.length > 0){
        setFlashCards(questions)
        setIsloading(false)
      }
    }
    getQuestions()
  }, [])

  return (
    <>
    <div className="header">
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select name="" id="">
          {}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Number of questions</label>
        <input type="number" min={1} step={1} defaultValue={10}></input>
      </div>

      <div className="form-group">
        <button>Generate</button>
      </div>
    </div>

    <div className="container">
        {isLoading ? 'Loading' : <FlashCardsList flashcards={flashCards}></FlashCardsList>}
        
    </div>
    </>
    
  )
}

export default App