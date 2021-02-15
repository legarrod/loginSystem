import { useEffect, useState } from "react";
import Head from "next/head";
import { getData } from "../utils/AsyncHttpRequest";
import BooksCards from "../components/BooksCards";
import NavBar from "../components/NavBar";

export default function Profile() {
  const [valueDefault, setvalueDefault] = useState("superman");
  const url = `${process.env.API_CATALOG_WRITERS}&s=${valueDefault}`;
  const [userAuth, setUserAuth] = useState({});
  const [data, setData] = useState([]);

  const getDataEvent = () => {
    getData(url, setData);
  };

  useEffect(() => {
    setUserAuth(JSON.parse(localStorage.getItem("user")));
    getDataEvent();
  }, []);

  return (
    <div className="backgroundpage">
      <NavBar
        setvalueDefault={setvalueDefault}
        getDataEvent={getDataEvent}
        userAuth={userAuth}
      />
      <Head>
        <title>Últimas peliculas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-wrap">
          <p>Este sera un pequeño perfil</p>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

//paleta de colores azul oscuro #1C3059 rojo #BF213E claro #F2EDDC amarilo #F2A413 cafe gris #8C847D
