
import PropTypes from 'prop-types';
import './savedLocations.css'
const SavedLocations = ({ locations, onSelectCity, onDeleteLocation, onBack }) => {

  // Handle background color change
  const handleBackgroundChange = (e) => {
    const newColor = e.target.value; // Get the color picked by the user
    console.log("Background color selected:", newColor); // Check if the color is being selected
    document.body.style.backgroundColor = newColor; // Apply the color to the root (body)
  };

  return (
    <div className="saved-locations-container">
      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        ← Back to Weather
      </button>

      <h1 className="saved-title">Saved Locations</h1>
      <ul className="locations-list">
        {locations.map((location, index) => (
          <li key={index} className="location-item">
            <span onClick={() => onSelectCity(location)} className="location-name">
              {location}
            </span>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteLocation(location);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Change Background Color Picker */}
      <div className="color-picker-section">
        <label className="color-label">Change Background Color:</label>
        <input
          type="color"
          onChange={handleBackgroundChange} // Trigger color change
          className="color-input"
        />
      </div>
    </div>
  );
};

SavedLocations.propTypes = {
  locations: PropTypes.array.isRequired,
  onSelectCity: PropTypes.func.isRequired,
  onDeleteLocation: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default SavedLocations;
