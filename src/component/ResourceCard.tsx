function ResourceCard() {
    return (
        <>
            <div className="d-inline-flex p-2">
                <div className="container-fluid" style={{ textAlign: "center" }}>
                    <p><i className="bi bi-image" style={{ fontSize: 60 }}></i></p>
                    <p>Access Volcanic</p>
                    <p><a href="#"><button style={{ borderRadius: 12 }}>Preview</button></a></p>
                </div>
            </div>
        </>
    )
};

export default ResourceCard;