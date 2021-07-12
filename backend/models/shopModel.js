import mongoose from 'mongoose'

const coordinateSchema = mongoose.Schema(
  {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  }
)

const shopProductsSchema = mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
)


const shopSchema = mongoose.Schema(
    {
      id:{
        type:Number,
        required:true,
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      coordinate:coordinateSchema,
      shopProducts:[shopProductsSchema],
    },
    {
      timestamps: true,
    }
  )
  
  const Shop = mongoose.model('Shop', shopSchema)
  
  export default Shop