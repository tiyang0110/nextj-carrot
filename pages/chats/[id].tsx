import type { NextPage } from "next";
import ChatBubble from "../../components/chatBubble";
import ChatInput from "../../components/chatInput";
import Layout from "../../components/layout";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <ChatBubble>Hi how much are you selling them for?</ChatBubble>
        <ChatBubble isMyChat>I want ￦20,000</ChatBubble>
        <ChatBubble>미쳤어</ChatBubble>
        <ChatInput />
      </div>
    </Layout>
  );
};

export default ChatDetail;