export interface User {
  id: number;
  name: string;
  image: string;
  isPopular: boolean;
  streamTag: string;
  viewerNumber: number;
}

export interface StreamerCardProps {
  streamer: User;
}

export interface Comment {
  id: number;
  commenter: {
    name: string;
    image: string;
  };
  content: string;
  timeStamp: string;
  isNew: boolean;
}

export interface CommentProps {
  comment: Comment;
}

export interface Category {
  id: number;
  name: string;
}

export interface Stream {
  id: number;
  name: string;
  image: string;
  url: string;
  categories: Category[];
}