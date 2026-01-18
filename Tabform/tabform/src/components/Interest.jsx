const Interest = ({ formData, setFormData }) => {
  const { Interest } = formData;

  const handlechange = (e) => {
    setFormData((prev) => ({
      ...prev,
      Interest: e.target.checked
        ? [...prev.Interest, e.target.name]
        : prev.Interest.filter((val) => val !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={Interest.includes("coding")}
            onChange={(e) => handlechange(e)}
          />
          coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={Interest.includes("music")}
            onChange={(e) => handlechange(e)}
          />
          music
        </label>
      </div>
    </div>
  );
};

export default Interest;
