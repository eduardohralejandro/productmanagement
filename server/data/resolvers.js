import { Products } from '../db/dbConnector.ts'

/**
* GraphQL Resolvers 
**/

export const resolvers = {
    Query:{
      getAllProducts: async (root) => {

        try {
          return await Products.find();
        } catch (error) {
          throw new Error(error);
        }

      },
    },
    Mutation:{
      createProduct: async (root, { product, description, price }) => {
            const newProduct = new Products({
                product : product,
                description : description,
                price : price,
            });

            newProduct.id = newProduct._id;

            try {
             return await newProduct.save(newProduct)
            } catch (error) {
              throw new Error(error);
            }
        },
    },
};