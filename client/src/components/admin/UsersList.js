import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import dateformat from "dateformat";
import Sidebar from "./Sidebar";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { allUsers, clearErrors } from "../../actions/userActions";
import { DELETE_USER_RESET } from "../../constants/userConstants";

const UsersList = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, users } = useSelector((state) => state.allUsers);
  //const { isDeleted, loading: deleteLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(allUsers());

    if (error) {
      dispatch(clearErrors());
    }

    // if (isDeleted) {
    //     alert.success('Form deleted')
    //     navigate('/admin/forms/all')
    //     dispatch({ type: DELETE_FORM_RESET })
    // }
  }, [dispatch, alert, error, allUsers]);

  const setUsers = () => {
    const data = {
      columns: [
        {
          label: "User id",
          field: "id",
          width: 100,
        },
        {
          label: "Name",
          field: "name",
          width: 100,
        },
        {
          label: "Email",
          field: "email",
          width: 100,
        },
        {
          label: "Role",
          field: "role",
          width: 100,
        },
        {
          label: "Actions",
          field: "actions",
          width: 100,
        },
      ],
      rows: [],
    };

    users &&
      users.forEach((user) => {
        data.rows.push({
          id: user._id,
          name: user.firstName + " " + user.lastName,
          email: user.email,
          role: user.role,
          actions: (
            <Fragment>
            <Link to={`/admin/user/${user._id}`} className="btn btn-primary py-1 px-2">
                <i className="fa fa-pencil"></i>
            </Link>
            {/* <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteUserHandler(user._id)}>
                <i className="fa fa-trash"></i>
            </button> */}
        </Fragment>
          ),
        });
      });

    return data;
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Users</h1>

            {!loading && (
              <MDBDataTable
                data={setUsers()}
                className="px-3"
                bordered
                striped
                hover
              />
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersList;
