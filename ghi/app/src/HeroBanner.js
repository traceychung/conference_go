import React from 'react';
import { Link } from 'react-router-dom';


export default function HeaderImg() {
    return (
        <section>
            <div style={{ backgroundImage: `url(https://stagesetproductions.com/wp-content/uploads/2019/03/s-IMG_3616.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'}}>
                <div className="container mb-3" style={{minHeight: '550px'}}>
                <img className="d-block mx-auto mb-4" src="/logo.svg" alt="" width="600" />
                    <div className="col-lg-6 mx-auto">
                    <p className="m-3 lead mb-4 head-text">
                        <strong>The only resource you'll ever need to plan and run your in-person or
                        virtual conference for thousands of attendees and presenters.</strong>
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/attendees/new" className="btn mb-3 btn-primary btn-lg px-4 gap-3">Attend a conference</Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
