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
