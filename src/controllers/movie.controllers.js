//controlers

import Character from "../models/movie.model.js";
export const crearPelicula= async (req,res)=>{
   const{title,director,duration,genre,description}=req.body
   if(req.body){
    for(let valor in req.body){
        if(typeof req.body[valor] === "string"){
            req.body[valor] = req.body[valor].trim();
        }
     }
   }
    try {{title,director,duration,genre,description}
        
        if(title=== undefined)return res.status(400).json({message:"title no puede estar vacio"});
        if(duration === undefined)return res.status(400).json({message:"duracion no puede estar vacio"});
        if(director === undefined)return res.status(400).json({message:"director no puede estar vacio"});
        if(genre === undefined)return res.status(400).json({message:"Genre no puede estar vacio"});

        const peliculaUnico = await Character.findOne({where: {title}});
        if (peliculaUnico !== null) return res.status(400).json({message: "nombre exitente"});

        const duracion = Math.floor(duration);
        if (duration !== duracion) return res.status(400).json({message: " duracion invalida"});

        if(description !== undefined){
            if(typeof description !== "string"){
                return res.status(400).json({errorMessage: "description invalida"});
            }
        }

        const character= await Character.create({title,director,duration,genre,description});
        res.status(201).json({message: "se ha almasenado la pelicula", character});
        } 
        catch (error) {
        res.status(500).json({mensaje:"error en la pelicula "});
    }

}

export const actulizarPelicula = async(req, res) =>{
    if(req.body){
    for(let valor in req.body){
        if(typeof req.body[valor] === "string"){
            req.body[valor] = req.body[valor].trim();
        }
    }
   }
     const{title,director,duration,genre,description}=req.body

try{
    if(title){
        const peliculaUnico = await Character.findOne({where: {title}});
        if(peliculaUnico !==null) return res.status(400).json({message: "esta pelicula ya exixten"});}
 

const[updated] = await Character.update({title,director,duration,genre,description},{
    where: {id: req.params.id}
});
if(updated === 0) return res.status(400).json({message: "la pelicula no existe"});

return res.status(200).json({message:"se actualizo la pelicula"});


} 
catch (error) {
        console.log(error)
        res.status(500).json({mensaje:"error en la cracion de la pelicula "});
    }
}


export const obtenerTodasLasPeliculas = async(req,res)=>{
    try{
        const Pelicula = await Character.findAll();
        if(Pelicula.length=== 0) return res.status(404).json({message: "no se encontro ninguna película "})

        return res.status(200).json(Pelicula);
}   catch(error){
    console.log(error)
    res.status(500).json({message: error.message});
}
         
}


export const obtenerPorId = async(req,res)=>{
try{
const personaje = await Character.findByPk(req.params.id);
if(personaje) return res.status(200).json(personaje);

return req.status(404).json({message:"no existe "});

}catch(error){ res.status(500).json({message: error.message});}
   
}

export const eliminacion= async(req,res)=>{
    try{
const eliminados = await Character.destroy({where:{id:req.params.id}});
console.log(eliminados)

if (eliminados===0)return res.status(404).json({message:"no encontrado"})

 res.status(204).json({message:"eliminado"});

}catch(error){
    console.log(error)
    res.status(500).json({message:error.message});
}
}
