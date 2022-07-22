import React, { useState } from 'react';
import BtableRow from './BtableRow';
import '../../../styles/newstyles/addBlogTable.css';

const Btable = ({ blogData }) => {
  const [allblogs, setallblogs] = useState(blogData);
  return (
    <div className="table-wrapper" id="#scrollBar">
      <table className="fl-table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Date</th>
            <th>Minutes</th>
            <th>Title</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogData &&
            allblogs.map((blog, index) => {
              return (
                <BtableRow
                  key={index}
                  blog={blog}
                  allblogs={allblogs}
                  setallblogs={setallblogs}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Btable;
