import React, { Fragment,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors } from '../../actions/formAction'
import { Grid } from "@mui/material";
import Header2 from "../../components/Header2"


const Profile = () => {


    const { user, error, loading } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    useEffect(() => {
        if(error) {
            navigate('/')
            alert.error('cant find user profile')
            dispatch(clearErrors())
        }
    }, [dispatch, navigate, alert, error])


    return (
        <Fragment>
              {!loading && 
              <>
              <Grid><Header2/></Grid>
                    <h2 className="mt-5 ml-5">My Profile</h2>
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid" src={user.avatar?.url} alt={user.name} />
                            </figure>
                            <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                                Edit Profile
                            </Link>
                        </div>

                        <div className="col-12 col-md-5">
                            <h4>Full Name</h4>
                            <p>{user.firstName + " " + user.lastName}</p>

                            <h4>Email Address</h4>
                            <p>{user.email}</p>

                            <h4>Joined On</h4>
                            <p>{String(user.createdAt).substring(0, 10)}</p>

                            {user.role !== 'admin' && (
                                <Link to="/forms/me" className="btn btn-danger btn-block mt-5">
                                    My Bookings
                                </Link>
                            )}

                            <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                                Change Password
                            </Link>
                        </div>
                    </div>
</>
}
                </Fragment>
            )}

export default Profile