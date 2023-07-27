import Card from './Card';
 const Cards = ({characters, onClose})=> {
   return(
      <div>
        {
         characters.map(({id,name,species,gender,image,status, origin})=>{
            return <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            status={status}
            origin={origin.name}
            onClose={onClose}
            />
         })
        }

      </div>
   )
};

export default Cards;