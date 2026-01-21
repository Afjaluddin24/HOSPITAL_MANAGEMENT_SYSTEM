import React from 'react'
function Navigation() {
  return (
    <div
        id="hospitalSlider"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
    >
        {/* Indicators */}
        <div className="carousel-indicators">
        <button
            type="button"
            data-bs-target="#hospitalSlider"
            data-bs-slide-to={0}
            className="active"
        />
        <button
            type="button"
            data-bs-target="#hospitalSlider"
            data-bs-slide-to={1}
        />
        <button
            type="button"
            data-bs-target="#hospitalSlider"
            data-bs-slide-to={2}
        />
        </div>
        {/* Slides */}
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            className="d-block w-100"
            style={{ maxHeight: 400, objectFit: "cover" }}
            alt="Hospital Building"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h3>Welcome to City Care Hospital</h3>
            <p>Providing compassionate healthcare with modern facilities.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            className="d-block w-100"
            style={{ maxHeight: 400, objectFit: "cover" }}
            alt="Doctors"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h3>Experienced Doctors &amp; Staff</h3>
            <p>Our medical experts are available 24/7 for your care.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
            className="d-block w-100"
            style={{ maxHeight: 400, objectFit: "cover" }}
            alt="Medical Facilities"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h3>Advanced Medical Facilities</h3>
            <p>Modern labs, emergency care &amp; operation theaters.</p>
            </div>
        </div>
        </div>
        {/* Controls */}
        <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hospitalSlider"
        data-bs-slide="prev"
        >
        <span className="carousel-control-prev-icon" />
        </button>
        <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hospitalSlider"
        data-bs-slide="next"
        >
        <span className="carousel-control-next-icon" />
        </button>
    </div>
  )
}
export default Navigation;