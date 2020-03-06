import React, { Component } from "react";
import { getDefaultNormalizer } from "@testing-library/react";

class Description extends Component {
    render() {
        return (
            <div className="container mt-5" id="section-description">
                <section>
                    <h2 className="text-center display-4">
                        Description myself
                    </h2>
                    <p className="text-center lead">
                        Amin Havasi I am a Software Engineering student from
                        Islamic Azad University of Qom, a lover of programming
                        with Javascript And also programming with
                        Python.Interested in machine learning and interested in
                        network security for entertainment
                    </p>
                </section>
            </div>
        );
    }
}

export default Description;
