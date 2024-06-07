import React from "react";
import PropTypes from "prop-types";

const ProfileInfoCard = ({ user }) => {
  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {user.userInfo?.fullname}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          This is some information about the user.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user.auth?.email}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user.auth?.phone}
            </dd>
          </div>
          {/* Add more fields as necessary */}
        </dl>
      </div>
    </div>
  );
};

ProfileInfoCard.propTypes = {
  user: PropTypes.shape({
    userInfo: PropTypes.shape({
      fullname: PropTypes.string,
      location: PropTypes.shape({
        currentLocation: PropTypes.shape({
          fulladdress: PropTypes.string,
        }),
      }),
    }),
    auth: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
  }),
};

export default ProfileInfoCard;
