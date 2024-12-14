import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./config/firebase.config";
import Message from "./component/Message";
import { useEffect } from "react";

const { VITE_APP_VAPID_KEY } = import.meta.env;

async function requestPermission() {
  //requesting permission using Notification API
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey: VITE_APP_VAPID_KEY,
    });

    //We can send token to server
    console.log("Token generated : ", token);
  } else if (permission === "denied") {
    //notifications are blocked
    alert("You denied for the notification");
  }
}




function App() {
  useEffect(() => {
    requestPermission();
  }, []);

  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });

 // ... Rest of the code ...
return (
    <>
    <h1>Firebase Notification</h1>
      <ToastContainer />
    </>
  );
}

export default App;