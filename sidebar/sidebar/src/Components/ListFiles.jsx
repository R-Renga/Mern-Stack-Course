import { useState } from "react";

const ListFiles = ({ list }) => {
  const [isExpand, setIsExpand] = useState({});
  return (
    <div className="Container">
      {list.map((node) => (
        <div key={node.name}>
          {node.isFolder && (
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                setIsExpand((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpand?.[node.name] ? "-" : "+"}
            </span>
          )}
          <span>{node.name}</span>
          {isExpand?.[node.name] && node.Children && (
            <ListFiles list={node.Children} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ListFiles;
