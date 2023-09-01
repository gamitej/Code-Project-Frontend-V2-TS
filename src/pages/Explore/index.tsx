import { Page } from "@/components";
import ExploreContent from "./ExploreContent";

const Explore = () => {
  return (
    <Page>
      <div className="flex flex-col gap-y-16 justify-center">
        {/* HEADING */}
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h3 className="text-white">Explore</h3>
          <p className="text-white">ongoing</p>
        </div>
        {/* CONTENT */}
        <ExploreContent />
      </div>
    </Page>
  );
};

export default Explore;
