import React from 'react'

const SearchByCity = () => {
    const numbers = Array.from({ length: 54 }, (_, i) => i + 20);
    return (
        <section className="search-city">
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-4 content">
                        <p className="">
                            Search <br /> by <strong> City</strong>, Profession &amp; <br />{" "}
                            <strong> Community </strong>
                        </p>
                    </div>
                    <div className="col-md-8 form-blk">
                        <form className="">
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="form-label">I'm looking for a</label>
                                    <div className="select-control">
                                        <select className="form-control">
                                            <option>Woman</option>
                                            <option>Man</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">aged</label>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="select-control">
                                            <select className="form-control select-num">
                                                {numbers.map((num) => (
                                                    <option key={num} value={num}>
                                                        {num}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="">to</div>
                                        <div className="select-control">
                                            <select className="form-control select-num">
                                                {numbers.map((num) => (
                                                    <option key={num} value={num}>
                                                        {num}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row">
                                    {/* Religion Dropdown */}
                                    <div className="col-md-6">
                                        <label className="form-label">of religion</label>
                                        <div className="select-control">
                                            <select className="form-control">
                                                <option value="">Select</option>
                                                <option value="Hindu">Hindu</option>
                                                <option value="Muslim">Muslim</option>
                                                <option value="Christian">Christian</option>
                                                <option value="Sikh">Sikh</option>
                                                <option value="Buddhist">Buddhist</option>
                                                <option value="Jain">Jain</option>
                                                <option value="Parsi">Parsi</option>
                                                <option value="Jewish">Jewish</option>
                                                <option value="Other">Other</option>
                                                <option value="No Religion">No Religion</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Mother Tongue Dropdown */}
                                    <div className="col-md-6">
                                        <label className="form-label">and mother tongue</label>
                                        <div className="select-control">
                                            <select className="form-control">
                                                <option value="">Select</option>
                                                <option value="Hindi">Hindi</option>
                                                <option value="English">English</option>
                                                <option value="Bengali">Bengali</option>
                                                <option value="Telugu">Telugu</option>
                                                <option value="Marathi">Marathi</option>
                                                <option value="Tamil">Tamil</option>
                                                <option value="Gujarati">Gujarati</option>
                                                <option value="Urdu">Urdu</option>
                                                <option value="Punjabi">Punjabi</option>
                                                <option value="Kannada">Kannada</option>
                                                <option value="Malayalam">Malayalam</option>
                                                <option value="Oriya">Oriya</option>
                                                <option value="Assamese">Assamese</option>
                                                <option value="Konkani">Konkani</option>
                                                <option value="Sindhi">Sindhi</option>
                                                <option value="Tulu">Tulu</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button className="btn btn-filled2" type="button">
                                Let's Begin
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SearchByCity
