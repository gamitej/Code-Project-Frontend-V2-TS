import { Page } from "@/components";
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";

const Profile = () => {
  const { userInfo } = useAuth();
  const { colorShades } = useGlobal();
  return (
    <Page>
      <div>
        {/* head */}
        <div>
          <h3
            className="RISE"
            style={{ color: colorShades, fontSize: "2.1rem" }}
          >
            {userInfo.name}
          </h3>
        </div>
        {/* history table*/}
        <div></div>
      </div>
    </Page>
  );
};

export default Profile;
