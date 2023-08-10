import { UserDetailsTypes } from "../types";

type UserCardType = {
  data: UserDetailsTypes;
};

const UserCard = ({ data }: UserCardType) => {
  const {
    firstName,
    lastName,
    age,
    email,
    address,
    phoneNumbers,
    hobbies,
    education,
    employmentHistory,
  } = data;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">
        Full Name: {firstName} {lastName}
      </h2>
      <div className="mb-4">
        <p className="text-gray-700">Age: {age}</p>
        <p className="text-gray-700">Email: {email}</p>
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Address</h3>
        <p className="text-gray-700">
          {address.street}, {address.city}, {address.state}, {address.zipCode},{" "}
          {address.country}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Phone Numbers</h3>
        {phoneNumbers.map((phoneNumber, index) => (
          <p className="text-gray-700" key={index}>
            {phoneNumber.type}: {phoneNumber.number}
          </p>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Hobbies</h3>
        <ul className="pl-6 list-disc">
          {hobbies.map((hobby, index) => (
            <li className="text-gray-700" key={index}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Education</h3>
        {education.map((edu, index) => (
          <div className="mb-2" key={index}>
            <p className="text-gray-700">
              {edu.degree} in {edu.major}
            </p>
            <p className="text-gray-700">
              {edu.university}, Year: {edu.year}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">Employment History</h3>
        {employmentHistory.map((employment, index) => (
          <div className="mb-2" key={index}>
            <p className="text-gray-700">
              {employment.position} at {employment.company}
            </p>
            <p className="text-gray-700">
              {employment.startDate} - {employment.endDate || "Present"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
