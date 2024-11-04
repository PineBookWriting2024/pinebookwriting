export default function PrimaryHeader(props) {
    return (
        <>
            <header className="header-bg py-5">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12">
                            <h3 className="fs-0 text-gradient ps-10 md:ps-64 font-poppins">
                                {props.title}</h3>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}