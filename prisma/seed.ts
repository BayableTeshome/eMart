import { PrismaClient } from "@prisma/client";
// import { products } from "../data/products";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.create({
    data: {
      id: "123",
      productName: "Infinix INBOOK",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: "1099",
      image: "https://dummyjson.com/image/i/products/9/1.jpg",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
