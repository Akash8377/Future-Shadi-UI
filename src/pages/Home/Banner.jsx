import React from 'react'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-blk">
                <img src="/images/banner.jpg" alt="" />
                <div className="container">
                    <div className="content-blk">
                        <h2>
                            The <br />
                            Elite Way <br />
                            to Find Love
                        </h2>
                        <button className="btn btn-filled" type="button">
                            Find Your Match
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner
