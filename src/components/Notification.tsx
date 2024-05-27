type NotificationProps = {
  text: string;
  show: boolean;
  type: "success" | "error";
};

// component to render success or error notifications
const Notification: React.FC<NotificationProps> = ({ text, show, type }) => (
  <div
    className={`absolute inset-0 m-auto h-max w-max rounded-xl px-5 py-2 font-bold ${type === "success" ? "bg-green-200/80" : "bg-red-200/80"}`}
    style={{
      display: show ? "block" : "none",
    }}
  >
    {text}
  </div>
);

export default Notification;
