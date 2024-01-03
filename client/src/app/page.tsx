"use client";

import { useSockets } from "@/context/socket.context";
import { useEffect, useRef, useState } from "react";
import RoomsContainer from "@/containers/Rooms";
import MessageContainer from "@/containers/Messages";

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const styles = {
    usernameWrapper: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    usernameInner: {
      margin: "250px"
    }
  }
  const usernameRef = useRef(null);
  const { socket, username, setUsername } = useSockets();

  useEffect(() => {
    if(usernameRef)
    usernameRef.current.value = localStorage.getItem("username") || "";
    setIsClient(true)
  }, [isClient]);

  function handleSetusername() {
    const value = usernameRef.current.value;
    if(!value) {
      return;
    }
    setUsername(value);
    localStorage.setItem("username", value);
  }
    return (
      <div>{
        !username && (
        <div style={styles.usernameWrapper}>
          <div style={styles.usernameInner}>
            <input placeholder="Username" ref={usernameRef} />
            <button onClick={handleSetusername}>START</button>
          </div>
        </div>
        )}
        {username &&
        <div /*className={styles.continer}*/>
          <RoomsContainer />
          <MessageContainer />
        </div>
        }
      </div>
    )
}