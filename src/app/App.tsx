import Router from "@app/Router";
import NotificationProvider from "@components/NotificationProvider";

function App() {
  return (
    <NotificationProvider>
      <Router />
    </NotificationProvider>
  );
}

export default App;
