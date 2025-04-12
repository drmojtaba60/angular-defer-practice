import { Post } from '../models/post.model';

const latestPosts:Post[] = [
  <Post>{
    id: 1,
    title:"طبیعت شماره 1",
    viewCount:50,
    likeCount:20,
    imageUrl:'assets/images/posts/01.jpeg',
    description:"متن و توضیحات طبیعت شماره 1 ...",
  },
  <Post>{
    id: 2,
    title:"طبیعت شماره 2",
    viewCount:20,
    likeCount:5,
    imageUrl:'assets/images/posts/02.jpeg',
    description:"متن و توضیحات طبیعت شماره 2 ...",
  },
];
export default latestPosts;
