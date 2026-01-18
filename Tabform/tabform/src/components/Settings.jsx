const Settings = ({ formData }) => {
  const { theme } = formData;
  return (
    <div>
      <div>
        <label>
          <input type="radio" name="dark" checked={theme === "dark"} />
          dark
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="light" checked={theme === "light"} />
          light
        </label>
      </div>
    </div>
  );
};

export default Settings;
