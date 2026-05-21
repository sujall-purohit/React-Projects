import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// ✅ Moved OUTSIDE — clean utility function
function randomID(len = 5) {
  const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const Room = () => {
  // ✅ useParams() lives at the TOP LEVEL of the component — React is happy!
  const { roomID } = useParams();

  const myMeeting = async (element) => {
    if (!element) return; // ✅ Safety check — ref can be null on unmount

    const appID = 1016714509;
    const serverSecret = "4fb885d5b2529502bba5cc006171b538";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,       // ✅ Now correctly received from useParams
      randomID(5),
      randomID(5)
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:5173/room/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference, // or LiveStreaming — your choice
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default Room;