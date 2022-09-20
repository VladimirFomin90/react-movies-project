function Movie(props) {
    const {
        Title, 
        Year, 
        imdbID, 
        Type, 
        Poster
    } = props;

    return <div id="imdbID" className="row">
    <div className="col s12 m6">
        <div className="card movie">
            <div className="card-image">
            <img src="{Poster}" />
            <span className="card-title">{Title}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red"></a>
            </div>
            <div className="card-content">
            <p>{Year} <span className="right">{Type}</span></p>
            </div>
        </div>
        </div>
    </div>
}

export {Movie}