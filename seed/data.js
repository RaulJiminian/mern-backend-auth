import db from "../db/connection.js";
import Blog from "../models/blog.js";
import Comment from "../models/comment.js";

const insertData = async () => {
  await db.dropDatabase();

  const blog1 = new Blog({
    title: "Queens's Hidden Beach",
    image:
      "https://thumbs.dreamstime.com/b/hallett-s-cove-beach-along-east-river-astoria-queens-new-york-summer-view-roosevelt-island-205164323.jpg",
    tagline: "Hidden Beach in Astoria - NYC",
    description:
      "This is a wonderful gem right in Queens NY! Just a short bike ride down 31st avenue...keep going until you hit the water! There is a beautiful little beach with a dog-friendly cafe right across the street!",
    comments: [],
  });

  await blog1.save();

  const blog2 = new Blog({
    title: "A Walk through Trees",
    image:
      "https://neighborhoodsnow.nyc/wp-content/uploads/2020/10/NYCDOT_34-Ave-QN-1024x768.jpg",
    tagline: "Closed Avenue becomes Walkers Paradise",
    description:
      "Join members of the most culturely diverse neighborhood in the world through an avenue closed to traffic, but open to the public! The historic district of Queens boasts some of the city's most beautiful flowering trees and gardens!",
    comments: [],
  });

  await blog2.save();

  const blog3 = new Blog({
    title: "Adventure in Domino Park",
    image:
      "https://imgs.6sqft.com/wp-content/uploads/2018/06/06075158/011_Aerial-angle-of-Domino-Park.jpg",
    tagline: "Outdoor park in Brooklyn",
    description:
      "What better way to enjoy a summer day than to take a stroll through Domino Park! Located in Brooklyn, this park is beautifully designed with astro turf for picnics and a local tacqueria called Tacocina! A must see for all!",
    comments: [],
  });

  await blog3.save();

  const commentsOne = [
    {
      text: "What a great place!",
      blogId: blog1,
    },
    {
      text: "Whoa! I've lived here for years and never seen this place!",
      blogId: blog1,
    },
    {
      text: "Perfect date spot!",
      blogId: blog1,
    },
  ];

  await Comment.insertMany(commentsOne);

  const commentsTwo = [
    {
      text: "What a great place!",
      blogId: blog2,
    },
    {
      text: "Whoa! I've lived here for years and never seen this place!",
      blogId: blog2,
    },
    {
      text: "Perfect date spot!",
      blogId: blog2,
    },
  ];

  await Comment.insertMany(commentsTwo);

  const commentsThree = [
    {
      text: "What a great place!",
      blogId: blog3,
    },
    {
      text: "Whoa! I've lived here for years and never seen this place!",
      blogId: blog3,
    },
    {
      text: "Perfect date spot!",
      blogId: blog3,
    },
  ];

  await Comment.insertMany(commentsThree);

  blog1.comments = await Comment.find({ blogId: blog1 });
  await blog1.save();
  blog2.comments = await Comment.find({ blogId: blog2 });
  await blog2.save();
  blog3.comments = await Comment.find({ blogId: blog3 });
  await blog3.save();

  db.close();
};

insertData();
