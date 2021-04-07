import mongoose from 'mongoose'

const coordinateSchema = mongoose.Schema(
  {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)


const shopSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      coordinate:[coordinateSchema],
    },
    {
      timestamps: true,
    }
  )
  
  const Shop = mongoose.model('Shop', shopSchema)
  
  export default Shop