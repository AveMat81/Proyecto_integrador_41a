const Card = ({onClose, characters})=> {
   // console.log(props)
   return (
      
      <div>
         {
            characters.map((per)=> {
               return( 
                  <div key={per.id}>
                  <img src={per.image} alt={per.name} />
                  <button onClick={onClose}>X</button>           
                  <h2>{per.name}</h2>         
                  <h2>{per.status}</h2>
                  <h2>{per.species}</h2>
                  <h2>{per.gender}</h2>
                  <h2>{per.origin.name}</h2>
                  </div>
               )
            })
         }
      </div>
   );
}

export default Card

// id, name, status, species, gender, origin, onClose, image, 