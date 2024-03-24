import React, { useState } from "react";

const AvatarGenerator = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [search, setSearch] = useState("");
  const [sourceLink, setSourceLink] = useState("");

  const generateLink = () => {
    setIsFetching(true);
    setSourceLink("");

    const numberSet = Math.floor(Math.random() * 4) + 1;
    const link = `https://robohash.org/${search}?set=set${numberSet}`;

    let img = new Image();
    img.src = link;
    img.onload = () => {
      setIsFetching(false);
      setSourceLink(link);
    };
  };

  const generateImage = () => {
    if (!isFetching && !sourceLink) return null;
    if (isFetching && !sourceLink) {
      return <p>Profile Picture sedang dibuat...</p>;
    }
    return (
      <div className="avatar-image">
        <img src={sourceLink} alt={sourceLink} />
      </div>
    );
  };

  return (
    <div id="3" className="avatar-container">
      <h1>3. Avatar Generator</h1>
      <div className="avatar-main">
        <input
          placeholder="Ketik nama Anda..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={`${!search ? "disabled" : ""}`}
          disabled={!search}
          onClick={generateLink}
        >
          Buat Profile Picture!
        </button>
        {generateImage()}
      </div>
    </div>
  );
};

export default AvatarGenerator;
