import { useState, useEffect } from "react";
import "./App.css";

function ShowUser({ userData }) {
  const { login, name, avatar_url } = userData;
  return (
    <>
      <img src={avatar_url} alt={login} />
      <h2>Name: {name}</h2>
    </>
  );
}

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return data ? (
    <>
      <ShowUser userData={data} />
    </>
  ) : (
    <>
      <h3>No Data to Display!</h3>
    </>
  );
}

export default App;
