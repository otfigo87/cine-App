import React from 'react'

const Form = () => {
  return (
    <div>
      <div className="form-component">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Search by title"
              id="search-input"
            />
            <input type="submit" value="Search" />
          </form>
          <div className="btn-sort-container">
            <div className="btn-sort" id="goodToBad">
              Top<span>👍</span>
            </div>
            <div className="btn-sort" id="badToGood">
              Flop<span>👎</span>
            </div>
          </div>
        </div>
      </div>
      <div className="result">Results</div>
    </div>
  );
}

export default Form