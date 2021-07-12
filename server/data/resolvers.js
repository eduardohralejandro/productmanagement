import { Products } from '../db/dbConnector.ts'

/**
* GraphQL Resolvers 
**/

export const resolvers = {
    Query:{
      getAllProducts : (root) => {
                return new Promise((resolve,reject)=>{
                    Products.find((err,products)=>{
                        if(err) reject(err);
                        else resolve(products);
                    })
                })
            },
    },
    Mutation:{
      createProduct: (root, { product, description, price }) => {
            const newProduct = new Products({
                product : product,
                description : description,
                price : price,
            });

            newProduct.id = newProduct._id;

            return new Promise((resolve,reject)=>{
              newProduct.save((err)=>{
                    if(err) reject(err);
                    else resolve(newProduct);
                })
            })
        },
    },
};