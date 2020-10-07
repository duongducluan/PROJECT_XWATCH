import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="right-item-cat" style={{ marginLeft: "30%" }}>
            <div className="list-pages" style={{ marginLeft: "45%" }}>
              <a to="/donghonam">1</a>
              <a to="/donghonam/page2">2</a>
              <a to="/donghonam/page3">3</a>
              <a to="/donghonam/page4">4</a>
              <a to="/donghonam/page5">5</a>
            </div>
          </div>
       
        );
    }
}

export default Pagination;