import { useTranslation } from "react-i18next";
import UserCard from "./UserCard";
import { UserDetailsTypes } from "../types";
const languageOptions = [
  { value: "gj", label: "Gujarati" },
  { value: "hi", label: "Hindi" },
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "pt", label: "Portugal" },
];
const UserDetails = () => {
  const { t, i18n } = useTranslation();
  const userDetails: UserDetailsTypes = {
    firstName: t("labels.firstName"),
    lastName: t("labels.lastName"),
    age: t("labels.age") as any,
    email: t("labels.email"),
    address: {
      street: t("labels.address.street"),
      city: t("labels.address.city"),
      state: t("labels.address.state"),
      zipCode: t("labels.address.zipCode"),
      country: t("labels.address.country"),
    },
    phoneNumbers: [
      {
        type: t("labels.phoneNumbers.0.type"),
        number: t("labels.phoneNumbers.0.number"),
      },
      {
        type: t("labels.phoneNumbers.1.type"),
        number: t("labels.phoneNumbers.1.number"),
      },
    ],
    hobbies: [
      t("labels.hobbies.0"),
      t("labels.hobbies.1"),
      t("labels.hobbies.2"),
    ],
    education: [
      {
        degree: t("labels.education.0.degree"),
        major: t("labels.education.0.major"),
        university: t("labels.education.0.university"),
        year: t("labels.education.0.year"),
      },
      {
        degree: t("labels.education.1.degree"),
        major: t("labels.education.1.major"),
        university: t("labels.education.1.university"),
        year: t("labels.education.1.year"),
      },
    ],
    employmentHistory: [
      {
        company: t("labels.employmentHistory.0.company"),
        position: t("labels.employmentHistory.0.position"),
        startDate: t("labels.employmentHistory.0.startDate"),
        endDate: t("labels.employmentHistory.0.endDate"),
      },
      {
        company: t("labels.employmentHistory.1.company"),
        position: t("labels.employmentHistory.1.position"),
        startDate: t("labels.employmentHistory.1.startDate"),
        endDate: t("labels.employmentHistory.0.endDate"),
      },
    ],
  };
  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="my-4">
          <label htmlFor="language-select" className="mr-2">
            Choose a language:
          </label>
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            className="px-2 py-1 border border-gray-400 rounded"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <h1 className="mb-4 text-2xl font-bold text-green-500">
          My Text-1: {t("text1.t")}
        </h1>
        <h1 className="mb-4 text-2xl font-bold text-yellow-500">
          My Text-2: {t("text2.t")}
        </h1>
        <h1 className="mb-4 text-3xl font-bold text-blue-500">
          Current Date: {t("text1.currentDate", { date: new Date() })}
        </h1>
      </div>
      <div className="container mx-auto">
        <UserCard data={userDetails} />
      </div>
    </>
  );
};

export default UserDetails;
