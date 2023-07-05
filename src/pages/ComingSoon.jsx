import React from "react";
import ComingSoon from "../components/ComingSoon";
import coming from "../assets/comingsoon/coming.png";

const Soon = ({ page }) => {
  return (
    <div>
      <ComingSoon
        image={coming}
        soon={"Halaman " + page + " dalam proses pengerjaan"}
      ></ComingSoon>
    </div>
  );
};

export default Soon;
