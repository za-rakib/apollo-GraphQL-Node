//Resolvers
const Post = require("./models/Post");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAll: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    // createPost: async (_, args, context) => await Post.createPost(_, args, context)

    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = await new Post({ title, description }).save();
       return post;
    },
  },
};
module.exports = resolvers;
