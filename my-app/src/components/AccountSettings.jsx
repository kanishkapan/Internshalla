import React from 'react'

const AccountSettings = () => {
  const user = JSON.parse(localStorage.getItem('popxUserData')) || {
    fullName: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    bio:
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam',
    avatar: 'https://i.imgur.com/1Q9Z1Zz.png',
  }

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 md:px-10 lg:px-24 flex justify-center">
      <div className="w-full max-w-[600px]">
        <h2 className="text-gray-700 text-lg sm:text-xl font-semibold mb-6">
          Account Settings
        </h2>

        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 sm:p-6 flex flex-col gap-4">
          {/* Avatar, Name and Email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#8a42f3] p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l-4 4m1 4h.01M5 13l4-4m7 0l3.536-3.536a2 2 0 00-2.828-2.828L13 6m-1 1L6 13v4h4l6-6-4-4z" />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                {user.fullName}
              </h3>
              <p className="text-sm sm:text-base text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Bio section */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {user.bio}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
