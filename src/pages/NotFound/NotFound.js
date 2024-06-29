import React from "react";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const NotFound = () => {
    return (
        <>
            <div className="NotFound">
                <Header />
                <main>
                    <Error />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default NotFound;