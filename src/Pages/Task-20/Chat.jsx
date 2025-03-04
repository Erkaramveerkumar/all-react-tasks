import { useEffect, useState } from "react";

const ChatRoom = () => {
  const [guestUser, setGuestUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("guestUser");
    if (storedUser) {
      setGuestUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <h2>Chat Room</h2>
      {guestUser ? (
        <p>Welcome, {guestUser.guestName} from {guestUser.country}!</p>
      ) : (
        <p>Guest not found. Please login.</p>
      )}
      {/* Add chat UI here */}
    </div>
  );
};

export default ChatRoom;
