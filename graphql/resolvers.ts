
export const resolvers = {
  Query: {
    products: async (_parent, _args, ctx) => await ctx.prisma.product.findMany(),
  },
};
