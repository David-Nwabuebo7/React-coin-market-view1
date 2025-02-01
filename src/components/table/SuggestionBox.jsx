

const SuggestionBox = ( { items,Function, Color }) => {
  


  return (
    <div className='suggest'>
        {
items && items.map((item,index)=>{
            return(
              <ul  className="" key={index}  >
                <li onClick={Function} id={item.id} key={index} style={Color}>
                  {item?.name}
                </li>
              </ul>
            )
          })
        }
    </div>
  )
}

export default SuggestionBox