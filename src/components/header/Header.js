import React from "react";

//
import headerStyles from "./index.module.scss";

const HeaderViews = ({ title, textBtn, isBtn, handleClick, isState }) => {
  return (
    <>
      <div className={headerStyles.header__wrapper}>
        <div className={headerStyles.header__titleCont}>
          <h3 className={headerStyles.header__title}>{title}</h3>
        </div>

        {isBtn && (
          <div className={headerStyles.header__btnCont}>
            <button onClick={handleClick} className={headerStyles.header__btn}>
              {textBtn}
            </button>
          </div>
        )}

        {isState && !isBtn && (
          <span className="state__info state__current">Vigente</span>
        )}
      </div>
    </>
  );
};

export default HeaderViews;
