import React from 'react';
import { Link } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBlog } from '../../../redux/api';
const BtableRow = ({ blog, allblogs, setallblogs }) => {
  const handledeleteBlog = async (e, id) => {
    e.preventDefault();
    const yes = window.confirm('Do you want delete ?');
    if (yes) {
      try {
        const updatedblogs = allblogs.filter((b) => b._id !== id);
        setallblogs(updatedblogs);
        deleteBlog(id);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <tr>
      <td>{blog.authorName}</td>
      <td>{blog.updatedAt.substr(0, 10)}</td>
      <td>{blog.timeToRead}</td>
      <td>{blog.title}</td>
      <td className="text-right">
        <div
          className="actions"
          style={{ display: 'flex', justifyContent: 'space-evenly' }}
        >
          <Link to={`/blog/edit/${blog._id}`}>
            {' '}
            <button className="blogs-edit-btn">
              <ModeEditIcon />{' '}
            </button>
          </Link>
          <Link onClick={(e) => handledeleteBlog(e, blog._id)} to={'#'}>
            <button className="blogs-delete-btn">
              <DeleteIcon />{' '}
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default BtableRow;
