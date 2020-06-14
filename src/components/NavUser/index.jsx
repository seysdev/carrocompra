import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import "./NavUser.scss";
import { ReactComponent as UserIcon } from "../../assets/images/svg/user.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/svg/arrow.svg";

function NavUser({ text, items, icon }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={classNames({
        "nav-user": true,
        "is-active": toggle,
      })}
    >
      <button onClick={() => setToggle(!toggle)}>
        <UserIcon className="user" />
        {text}
        <ArrowIcon className="arrow" />
      </button>
      {toggle && (
        <ul>
          {items.map((item, id) => (
            <li key={id}>
              <Link onClick={item.cb} to={item.href}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavUser;
