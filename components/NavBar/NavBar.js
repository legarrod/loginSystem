import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "../Modals";

export default function ButtonAppBar({
  setvalueDefault,
  getDataEvent,
  userAuth,
}) {
  const [viewSearch, setViewSearch] = useState(false);

  const handlerSearch = (e) => {
    setvalueDefault(e.target.value);
    setViewSearch(true);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getDataEvent();
    }
  };
  const handlerLogout = () => {
    localStorage.removeItem("user");
    location.reload();
  };

  return (
    <div className="">
      <AppBar position="static">
        <Toolbar className="flex flex-wrap justify-between  navbarCustome">
          <Typography variant="h6" className={`textColor`}>
            Últimas peliculas
          </Typography>
          <input
            className="w-2/5 h-10 px-5 rounded-md text-black"
            placeholder="Buscar pelicula"
            onChange={(e) => handlerSearch(e)}
            onKeyDown={handleKeyDown}
          ></input>
          {!userAuth && <Modal />}
          {userAuth && (
            <IconButton
              edge="start"
              className="text-white"
              color="inherit"
              aria-label="menu"
              onClick={handlerLogout}
            >
              <p className="text-base font-bold textColor mr-5">
                Cerrar sesión
              </p>
              <img className="rounded-full h-16 w-16 " src={userAuth.img} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
