const RenderCond = ({x}) => {
  // const x = 15

  return (
    <div>
      {x > 5 && <p>X é maior que 5</p>}
        { x > 5 ? <p>X é um numero alto</p> : <p>X é um numero Baixo</p>}
        {x}
    </div>    
  )
}

export default RenderCond