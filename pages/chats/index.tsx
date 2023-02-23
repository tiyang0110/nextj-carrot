import type { NextPage } from "next";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="Chats" hasTabBar>
      <div className="divide-y-[1px]">
        {[1, 2, 3, 4, 5,6,7,8,9,10,11,12].map((_, i) => (
          <div key={i} className="flex cursor-pointer py-3 items-center space-x-3 px-4">
            <div className="w-12 h-12 rounded-full bg-slate-300"/>
            <div>
              <p className="text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-500">See you tomorrow in ther corner at 2pm!</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;