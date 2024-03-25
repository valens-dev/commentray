import { Call, CallingState } from "@stream-io/video-react-sdk";
import { ReactNode } from "react";

export interface StreamStateProps {
  callingState?: CallingState;
  children: ReactNode;
}
