import type { NextPage } from "next";
import AddButton from "../../components/addButton";
import Layout from "../../components/layout";
import LiveItem from "../../components/liveItem";

const Live: NextPage = () => {
  return (
    <Layout title="Live" hasTabBar>
      <div className="py-4 divide-y-2 space-y-4">
        {[1, 2, 3, 4, 5].map((_, i) => <LiveItem key={i} title="Let's make potato"/> )}
        <AddButton link="/live/create" />
      </div>
    </Layout>
  );
}

export default Live;