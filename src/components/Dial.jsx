import { useState } from 'react';
import PropTypes from 'prop-types'

export default function Dial({ onChange }) {
  const [position, setPosition] = useState(0)

  const handlePositionChange = (event) => {
    const newPosition = parseInt(event.target.value);
    setPosition(newPosition);
    onChange(newPosition);
  }

  return (
    <input
      type="range"
      min="0"
      max="100"
      value={position}
      onChange={handlePositionChange}
    />
  )
}

Dial.propTypes = {
  onChange: PropTypes.func.isRequired
}