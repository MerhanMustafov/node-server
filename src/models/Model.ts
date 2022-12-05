import mongoose from 'mongoose';
import {ModelSample} from '../types/models';


const model = new mongoose.Schema<ModelSample>({name: {types: String, required: true}})

export const Model = mongoose.model('Model', model)