const List = () => {
const items =[{ 
  id: 1,
  name: "Gustavo",
}, {
  id: 2,
  name: "Joao"
}, {
  id: 3, 
  name: "Pedro"
}]
  
  return (
    <div>
      {items.map((items) => (
        <p key={items.id}>{items.id} - {items.name}</p>
      ))}
    </div>
  )
}

export default List