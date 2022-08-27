import { useState, useEffect } from "react"




const Hook = () => {

  let idade = 16

  const [novaIdade, setNovaIdade] = useState(16)

  const changeAge = () => {
    idade = 17
    console.log(idade)
  }

  useEffect(() => {
    console.log("Teste!")
  })

  const changeNewAge =() => {
    setNovaIdade(17)
  }
  return (
    <div>
      <p>idade: {idade}</p>
      <button onClick={changeAge}>Mudar idade</button>
      <p>idade: {novaIdade}</p>
      <button onClick={changeNewAge}>Mudar nova idade</button>
    </div>
  )
}

export default Hook