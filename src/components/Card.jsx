const Card = ({ name, status, species, gender, origin, onClose, image })=> {
   // console.log(props)
   return (      
      <div>
         <h2>{name}</h2>                  
         <img src={image} alt={name} />
         <button onClick={onClose}>X</button>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
     </div>
   );
}

export default Card

// id, name, status, species, gender, origin, onClose, image, 