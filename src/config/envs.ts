import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
}

const envsSchema = joi.object({
    PORT: joi.number().required()
})
.unknown(true); //Permite que se usen variables de entorno que no estén en el schema

const {error, value} = envsSchema.validate(process.env);

if(error){
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
}