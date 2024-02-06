import { Statistic, ConfigProvider } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

const LikesCounter = ({ onChange, favoritesCount,  favorited }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Statistic: {
            contentFontSize: 12,
            colorText: "rgba(0, 0, 0, 0.75)",
          },
        },
      }}
    >
      <Statistic
        value={favoritesCount}
        prefix={
          <HeartOutlined
            style={{ fontSize: 16, color: "rgba(0, 0, 0, 0.75)" }}
          />
        }
        onChange={onChange}
      />
    </ConfigProvider>
  );
};
export default LikesCounter;
