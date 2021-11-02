import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetCharactersQuery } from "./generated/types-and-hooks";

function App() {
  const { data, isLoading, error } = useGetCharactersQuery({
    endpoint: "https://rickandmortyapi.com/graphql",
    fetchParams: {
      headers: {
        "content-type": "application/json",
      },
    },
  });
  return (
    <div className="App">
      {isLoading ? (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      ) : null}
      <main
        style={{ display: "flex", textAlign: "left", flexDirection: "column" }}
      >
        {error ? <span>Error occured</span> : null}
        {data && data?.characters?.results?.length
          ? data.characters.results.map((character, index) => (
              <div
                key={character!.name}
                style={{
                  border: "1px solid white",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  padding: "16px",
                }}
              >
                <h1>
                  {index + 1}. {character!.name}
                </h1>
                <p>Status: {character!.status}</p>
                <span>
                  Origin 🌍: {character!.origin?.name},{" "}
                  {character!.origin?.dimension}
                </span>
                <span>
                  Location 📌: {character!.location?.name},{" "}
                  {character!.location?.dimension}
                </span>
              </div>
            ))
          : null}
      </main>
    </div>
  );
}

export default App;
