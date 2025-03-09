import { FC } from "react";
import router from "../../routes";

import "./index.less";

const menuMap = [
  {
    name: "首页",
    link: "/home",
  },
  {
    name: "历史记录",
    link: "/test",
  },
];

const Menu: FC = () => {
  return (
    <div className='menu-container'>
      {menuMap.map((item) => (
        <div
          key={item.name}
          className='menu-item'
          onClick={(e) => {
            e.stopPropagation();
            router.navigate(item.link);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Menu;
