const Progress = ({ values }) => {
  return (
    <div className="outer">
      <div className="inner" style={{ width: `${values}%` }}>
        {values}%
      </div>
    </div>
  );
};

export default Progress;
