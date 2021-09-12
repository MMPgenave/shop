import React from 'react'

export default function Filter() {
    return (
      <div className="filter">
        <h4>filter based on:</h4>
        <select>
          <option value="">ALL</option>
          <option value="S">S</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    );
}
