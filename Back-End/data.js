import bcrypt from "bcryptjs"

const data = {
    users: [
        {
            name: "admin",
            email: "admin@gmail.com",
            password: bcrypt.hashSync("123456", 8),
            isAdmin: true,
            
        },
        {
            name: "customer",
            email: "customer@gmail.com",
            password: bcrypt.hashSync("123456", 8),
            isAdmin: false,
            
       }
   ]
    ,
    products: [
        {
            
            brand: "Oppo",
            name: "Reno 1 ",
            price: "1750",
            countInStock : "14",
            rating: "2.8",
            numReviews: "25",
            category: "Phone",
            image: "/images/product.png",
            description:" Oppo Reno 1 32 GB"
        },
        {
            
            brand: "Oppo",
            name: "Reno 2 ",
            price: "2550",
            countInStock : "10",
            rating: "3.1",
            numReviews: "85",
            category: "Phone",
            image: "/images/product.png",
            description:" Oppo Reno 2 64 GB"
        },
        {
           
            brand: "Oppo",
            name: "Reno 3 ",
            price: "3750",
            countInStock : "4",
            rating: "3.5",
            numReviews: "45",
            category: "Phone",
            image: "/images/product.png",
            description:" Oppo Reno 3 64 GB"
        },
        {
           
            brand: "Oppo",
            name: "Reno 4 ",
            price: "4550",
            countInStock : "8",
            rating: "3.8",
            numReviews: "55",
            category: "Phone",
            image: "/images/product.png",
            description:" Oppo Reno 4 128 GB"
        },
        {
            
            brand: "Oppo",
            name: "Reno 5 ",
            price: "6050",
            countInStock : "1",
            rating: "0.7",
            numReviews: "75",
            category: "Phone",
            image: "/images/product.png",
            description:" Oppo Reno 5 128 GB"
        },
        {
           
            brand: "Oppo",
            name: "Reno 6 ",
            price: "6050",
            countInStock : "21",
            rating: "1.0",
            numReviews: "75",
            category: "Phone",
            image: "/images/product.png",
            description:" Oppo Reno 6 128 GB"
        },
        {
            
            brand: "Oppo",
            name: "Reno 7 ",
            price: "6050",
            countInStock : "0",
            rating: "4.0",
            numReviews: "75",
            category: "Phone",
            image: "/images/product.png",
            description:" Oppo Reno 7 128 GB"
        }
    ]
}

export default data