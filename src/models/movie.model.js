import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const Character = sequelize.define(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
         },
         title:{
            type: DataTypes.STRING,
            allowNull: false,
        
         }, 
         duration:{
                type:DataTypes.INTEGER,
            allowNull: false,
         },
        director:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
         genre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
         description:{
            type: DataTypes.STRING,
            allowNull: false,
        }
        }) 
        export default Character
        