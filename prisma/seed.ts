import { PrismaClient } from '@prisma/client'
import { categories } from './data/categories'
import { products } from './data/products'

/* Creating a new instance of the PrismaClient class. */
const prisma = new PrismaClient()

/**
 * It creates a new category and a new product, and then it connects the product to the category.
 */
const main = async (): Promise<void> => {
    try {
        /* Creating a new category. */
        await prisma.category.createMany({ data: categories })
        await prisma.product.createMany({ data: products })
    } catch (error) {
        console.log(error)
    }
}
main()