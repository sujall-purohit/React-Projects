import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const VideoRoom = () => {
  const { roomID } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    const appID = 2097448836;
    const serverSecret = "a0a226e96aa5777acbddcbb2a5e94432";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Sujal"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: meetingRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }, [roomID]);

  return (
    <div className="w-full h-screen">
      <div ref={meetingRef} className="w-full h-full" />
    </div>
  );
};

export default VideoRoom;