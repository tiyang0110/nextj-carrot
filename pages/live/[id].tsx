import type { NextPage } from "next";
import ChatBubble from "../../components/chatBubble";
import ChatInput from "../../components/chatInput";
import Layout from "../../components/layout";

const LiveDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="pt-4 px-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h3 className="text-gray-800 font-semibold text-2xl mt-2">Let's try potatos</h3>
        <div className="py-10 pb-16 px-4 space-y-4 mt-10 h-[50vh] overflow-y-scroll">
          <ChatBubble>Hi how much are you selling them for?</ChatBubble>
          <ChatBubble isMyChat>I want ￦20,000</ChatBubble>
        </div>
        <ChatInput />
      </div>
    </Layout>
  );
}

export default LiveDetail;