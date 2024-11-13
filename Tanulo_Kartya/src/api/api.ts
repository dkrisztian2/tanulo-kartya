type dataProps = {
    id:number,
    question:string,
    correct_answer:string,

}

export const fetchQuestions =async () => {
    try{
    const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    if(!response.ok){
        throw new Error;     
    }
    const data = await response.json()
    const formattedData = data.results.map((d:dataProps, index:number)=>{
        return{
            id:index,
            question:decodeString(d.question),
            answer:decodeString(d.correct_answer)
        }
    })
    return formattedData

    }catch(error){
        console.error(error)
        return []
    }
  }

  const decodeString = (str : string) =>{
    const textarea = document.createElement('textarea')
    textarea.innerHTML = str
    return textarea.value
  }