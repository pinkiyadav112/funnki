export default function Subscribe() {
    return (
        <>
            <br /> <br />
            <section className="subscription bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subscription-wrapper">
                                <div className="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
                                    <h3 className="flex-fill">Subscribe <br /> to our newsletter</h3>
                                    <form action="#" className="row flex-fill">
                                        <div className="col-lg-8">
                                            <input type="email" className="form-control px-4 border-0 w-100 text-center text-md-left" id="email" placeholder="Your Email" name="email" />
                                        </div>
                                        <div className="col-lg-4">
                                            <button className="shop_btn sclassName">Subscribe Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /> <br />
        </>
    )
}