import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CreatorDocument = HydratedDocument<Creator>

@Schema({ timestamps:true })
export class Creator {
    @Prop({ required: true})
    idMarvel: number
    
    @Prop({required: true})
    middleName: string

    @Prop({required: true})
    lastName: string

    @Prop({required: true})
    suffix: string

    @Prop({required: true})
    fullName : string

    @Prop({required: true})
    thumbnailURL : string
}
