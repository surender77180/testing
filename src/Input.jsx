function InputBox(props){
    return(
        <div className="mb-3">
          <label>{props.label}</label>
          <input
            type="text"
            className="form-control"
            placeholder={props.placeholder}
          />
        </div>
        
    )
}

export default InputBox;