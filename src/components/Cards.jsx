import Card from './Card';


function const Cards = ( {characters, onClose} )=> {
   //console.log(onClose)
   return(
         <div>
               {characters.map ((per) => (
            <Card 
               key={per.id}              
               id={per.id}
               name={per.name}
               image={per.image}
               onClose={onClose}       
               status={per.status}
               species={per.species}
               gender={per.gender}
               origin={per.origin.name}
               
            />))}
         </div>               
   )      
}
export default Cards