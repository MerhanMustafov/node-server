import mongoose from 'mongoose';
import {GetData} from '../types/Types';


const model = new mongoose.Schema<GetData>({name: {types: String, required: true}})

export const Model = mongoose.model('Model', model)