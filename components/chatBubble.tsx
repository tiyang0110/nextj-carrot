import { cls } from "../libs/utils";

interface ChatBubbleProps{
  isMyChat?: boolean;
  children: string;
}

export default function ChatBubble({isMyChat, children}:ChatBubbleProps){
  return (
    <div className={cls("flex items-start space-x-2", isMyChat ? "flex-row-reverse space-x-reverse" : "")}>
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          <p>{children}</p>
      </div>
    </div>
  );
}