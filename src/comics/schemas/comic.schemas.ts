import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, NumberSchemaDefinition } from 'mongoose'

export type CommicDocument = HydratedDocument<Commic>

@Schema({timestamps: true})
export class Commic {
    @Prop({required: true})
    idMarvel: string
    
    @Prop({required: true})
    title: string
    
    @Prop({required: true})
    description: string

    @Prop({required: true})
    pageCount : number
}