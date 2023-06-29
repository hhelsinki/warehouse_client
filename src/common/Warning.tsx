const Warning = ({txt, col}:{txt:string, col:string}) => {
    return(
        <div className="modal__box">
            <div>
                <p className={col}>{txt}</p>
            </div>
            
        </div>
    );
}

export default Warning;