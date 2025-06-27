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
        if (peliculaUnicoUnico !== null) return res.status(400).json({message: "nombre exitente"});

        const duracion = Math.floor(duration);
        if (duration !== duracion) return res.status(400).json({message: " duracion invalida"});

        if(description !== undefined){
            if(typeof description !== "string"){
                return res.status(400).json({errorMessage: "'description' invalida"});
            }
        }

        const character= await Character.create({title,director,duration,genre,description});
        res.status(201).json({message: "se ha almasenado la pelicula", character});
        } 
        catch (error) {
        res.status(500).json({mensaje:"error en la pelicula "});
    }

}
