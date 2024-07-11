import { ReactNode } from "react";
import { Button } from "../../ui/button";
import { useSetRecoilState } from "recoil";
import { evalutonForm } from "../../../store/context";
const daysInMonth: ReactNode[] = [];
for (let i = 1; i <= 31; i++) {
  daysInMonth.push(<option value={i}>{i}</option>);
}
const Years: ReactNode[] = [];
for (let i = 1960; i <= 2024; i++) {
  Years.push(<option value={i}>{i}</option>);
}
const countryOptions = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Åland Islands", label: "Åland Islands" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "American Samoa", label: "American Samoa" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Anguilla", label: "Anguilla" },
    { value: "Antarctica", label: "Antarctica" },
    { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Aruba", label: "Aruba" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bermuda", label: "Bermuda" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Bouvet Island", label: "Bouvet Island" },
    { value: "Brazil", label: "Brazil" },
    {
      value: "British Indian Ocean Territory",
      label: "British Indian Ocean Territory",
    },
    { value: "Brunei Darussalam", label: "Brunei Darussalam" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Cape Verde", label: "Cape Verde" },
    { value: "Cayman Islands", label: "Cayman Islands" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chad", label: "Chad" },
    { value: "Chile", label: "Chile" },
    { value: "China", label: "China" },
    { value: "Christmas Island", label: "Christmas Island" },
    { value: "Cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
    { value: "Colombia", label: "Colombia" },
    { value: "Comoros", label: "Comoros" },
    { value: "Congo", label: "Congo" },
    {
      value: "Congo, The Democratic Republic of The",
      label: "Congo, The Democratic Republic of The",
    },
    { value: "Cook Islands", label: "Cook Islands" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Cote D'ivoire", label: "Cote D'ivoire" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Curaçao", label: "Curaçao" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Dominican Republic", label: "Dominican Republic" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Egypt", label: "Egypt" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Equatorial Guinea", label: "Equatorial Guinea" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    { value: "Ethiopia", label: "Ethiopia" },
    {
      value: "Falkland Islands (Malvinas)",
      label: "Falkland Islands (Malvinas)",
    },
    { value: "Faroe Islands", label: "Faroe Islands" },
    { value: "Fiji", label: "Fiji" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "French Guiana", label: "French Guiana" },
    { value: "French Polynesia", label: "French Polynesia" },
    {
      value: "French Southern Territories",
      label: "French Southern Territories",
    },
    { value: "Gabon", label: "Gabon" },
    { value: "Gambia", label: "Gambia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Ghana", label: "Ghana" },
    { value: "Gibraltar", label: "Gibraltar" },
    { value: "Greece", label: "Greece" },
    { value: "Greenland", label: "Greenland" },
    { value: "Grenada", label: "Grenada" },
    { value: "Guadeloupe", label: "Guadeloupe" },
    { value: "Guam", label: "Guam" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guernsey", label: "Guernsey" },
    { value: "Guinea", label: "Guinea" },
    { value: "Guinea-bissau", label: "Guinea-bissau" },
    { value: "Guyana", label: "Guyana" },
    { value: "Haiti", label: "Haiti" },
    {
      value: "Heard Island and Mcdonald Islands",
      label: "Heard Island and Mcdonald Islands",
    },
    {
      value: "Holy See (Vatican City State)",
      label: "Holy See (Vatican City State)",
    },
    { value: "Honduras", label: "Honduras" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran, Islamic Republic of", label: "Iran, Islamic Republic of" },
    { value: "Iraq", label: "Iraq" },
    { value: "Ireland", label: "Ireland" },
    { value: "Isle of Man", label: "Isle of Man" },
    { value: "Israel", label: "Israel" },
    { value: "Italy", label: "Italy" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Japan", label: "Japan" },
    { value: "Jersey", label: "Jersey" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Kenya", label: "Kenya" },
    { value: "Kiribati", label: "Kiribati" },
    {
      value: "Korea, Democratic People's Republic of",
      label: "Korea, Democratic People's Republic of",
    },
    { value: "Korea, Republic of", label: "Korea, Republic of" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    {
      value: "Lao People's Democratic Republic",
      label: "Lao People's Democratic Republic",
    },
    { value: "Latvia", label: "Latvia" },
    { value: "Lebanon", label: "Lebanon" },
    { value: "Lesotho", label: "Lesotho" },
    { value: "Liberia", label: "Liberia" },
    { value: "Libyan Arab Jamahiriya", label: "Libyan Arab Jamahiriya" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Macao", label: "Macao" },
    {
      value: "Macedonia, The Former Yugoslav Republic of",
      label: "Macedonia, The Former Yugoslav Republic of",
    },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Malawi", label: "Malawi" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Maldives", label: "Maldives" },
    { value: "Mali", label: "Mali" },
    { value: "Malta", label: "Malta" },
    { value: "Marshall Islands", label: "Marshall Islands" },
    { value: "Martinique", label: "Martinique" },
    { value: "Mauritania", label: "Mauritania" },
    { value: "Mauritius", label: "Mauritius" },
    { value: "Mayotte", label: "Mayotte" },
    { value: "Mexico", label: "Mexico" },
    {
      value: "Micronesia, Federated States of",
      label: "Micronesia, Federated States of",
    },
    { value: "Moldova, Republic of", label: "Moldova, Republic of" },
    { value: "Monaco", label: "Monaco" },
    { value: "Mongolia", label: "Mongolia" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Montserrat", label: "Montserrat" },
    { value: "Morocco", label: "Morocco" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Myanmar", label: "Myanmar" },
    { value: "Namibia", label: "Namibia" },
    { value: "Nauru", label: "Nauru" },
    { value: "Nepal", label: "Nepal" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Caledonia", label: "New Caledonia" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nicaragua", label: "Nicaragua" },
    { value: "Niger", label: "Niger" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Niue", label: "Niue" },
    { value: "Norfolk Island", label: "Norfolk Island" },
    { value: "Northern Mariana Islands", label: "Northern Mariana Islands" },
    { value: "Norway", label: "Norway" },
    { value: "Oman", label: "Oman" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Palau", label: "Palau" },
    {
      value: "Palestinian Territory, Occupied",
      label: "Palestinian Territory, Occupied",
    },
    { value: "Panama", label: "Panama" },
    { value: "Papua New Guinea", label: "Papua New Guinea" },
    { value: "Paraguay", label: "Paraguay" },
    { value: "Peru", label: "Peru" },
    { value: "Philippines", label: "Philippines" },
    { value: "Pitcairn", label: "Pitcairn" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Puerto Rico", label: "Puerto Rico" },
    { value: "Qatar", label: "Qatar" },
    { value: "Reunion", label: "Reunion" },
    { value: "Romania", label: "Romania" },
    { value: "Russia", label: "Russia" },
    { value: "Rwanda", label: "Rwanda" },
    { value: "Saint Helena", label: "Saint Helena" },
    { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
    { value: "Saint Lucia", label: "Saint Lucia" },
    { value: "Saint Pierre and Miquelon", label: "Saint Pierre and Miquelon" },
    {
      value: "Saint Vincent and The Grenadines",
      label: "Saint Vincent and The Grenadines",
    },
    { value: "Samoa", label: "Samoa" },
    { value: "San Marino", label: "San Marino" },
    { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serbia", label: "Serbia" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "Sierra Leone", label: "Sierra Leone" },
    { value: "Singapore", label: "Singapore" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Solomon Islands", label: "Solomon Islands" },
    { value: "Somalia", label: "Somalia" },
    { value: "South Africa", label: "South Africa" },
    {
      value: "South Georgia and The South Sandwich Islands",
      label: "South Georgia and The South Sandwich Islands",
    },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sudan", label: "Sudan" },
    { value: "Suriname", label: "Suriname" },
    { value: "Svalbard and Jan Mayen", label: "Svalbard and Jan Mayen" },
    { value: "Eswatini", label: "Eswatini" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Syrian Arab Republic", label: "Syrian Arab Republic" },
    { value: "Taiwan (ROC)", label: "Taiwan (ROC)" },
    { value: "Tajikistan", label: "Tajikistan" },
    {
      value: "Tanzania, United Republic of",
      label: "Tanzania, United Republic of",
    },
    { value: "Thailand", label: "Thailand" },
    { value: "Timor-leste", label: "Timor-leste" },
    { value: "Togo", label: "Togo" },
    { value: "Tokelau", label: "Tokelau" },
    { value: "Tonga", label: "Tonga" },
    { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Turkey", label: "Turkey" },
    { value: "Turkmenistan", label: "Turkmenistan" },
    { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands" },
    { value: "Tuvalu", label: "Tuvalu" },
    { value: "Uganda", label: "Uganda" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States", label: "United States" },
    {
      value: "United States Minor Outlying Islands",
      label: "United States Minor Outlying Islands",
    },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Uzbekistan", label: "Uzbekistan" },
    { value: "Vanuatu", label: "Vanuatu" },
    { value: "Venezuela", label: "Venezuela" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Virgin Islands, British", label: "Virgin Islands, British" },
    { value: "Virgin Islands, U.S.", label: "Virgin Islands, U.S." },
    { value: "Wallis and Futuna", label: "Wallis and Futuna" },
    { value: "Western Sahara", label: "Western Sahara" },
    { value: "Yemen", label: "Yemen" },
    { value: "Zambia", label: "Zambia" },
    { value: "Zimbabwe", label: "Zimbabwe" },
  ];
export default function InformationForm() {

    const setPage = useSetRecoilState(evalutonForm) 

    const nextButtonHandler = () =>{
        setPage({
            informaton: { timeline: true, page: false },
            evaluations: { timeline: true, page: true },
            education: { timeline: false, page: false },
            delivery: { timeline: false, page: false },
            pay: { timeline: false, page: false },
        })
      }

    
  return (
    <form className="md:px-10 flex flex-col gap-5 md:w-[70%] md:border-l">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">Your Information</h2>
          <p>
            Please enter the name and date of birth for the person listed on the
            academic credentials. The name and date of birth entered here is
            what will appear on the report. Revision fees and additional
            shipping fees will apply if the name and date of birth are entered
            incorrectly.
          </p>
        </div>
        <div>
          <div className="flex max-sm:flex-col flex-wrap justify-between">
            <div className="border-b flex flex-col mb-5 gap-5 md:w-[47%] ">
              <label>
                FIRST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 md:w-[47%] ">
              <label>
                MIDDLE NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 md:w-[47%] ">
              <label>
                LAST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="border-b flex flex-col mb-5 pb-5 gap-5 max-md:w-full w-[30%] ">
              <label>
                DATE OF BIRTH (DAY) <span className="text-red-500">*</span>
              </label>
              <select className="focus:outline-none">
                <option></option>
                {daysInMonth}
              </select>
            </div>
            <div className="border-b flex flex-col mb-5 pb-5 gap-5 max-md:w-full w-[30%]">
              <label>
                DATE OF BIRTH (MONTH) <span className="text-red-500">*</span>
              </label>
              <select className="focus:outline-none">
                <option></option>
                <option value={"January"}>January</option>
                <option value={"February"}>February</option>
                <option value={"March"}>March</option>
                <option value={"April"}>April</option>
                <option value={"May"}>May</option>
                <option value={"June"}>June</option>
                <option value={"July"}>July</option>
                <option value={"August"}>August</option>
                <option value={"September"}>September</option>
                <option value={"October"}>October</option>
                <option value={"November"}>November</option>
                <option value={"December"}>December</option>
              </select>
            </div>
            <div className="border-b flex flex-col mb-5 pb-5 gap-5 max-md:w-full w-[30%]">
              <label>
                DATE OF BIRTH (YEAR) <span className="text-red-500">*</span>
              </label>
              <select className="focus:outline-none">
                <option></option>
                {Years}
              </select>
            </div>
            <div className="border-b flex flex-col mb-5 pb-5 gap-5 w-[47%] max-md:w-full">
              <label>
                GENDER <span className="text-red-500">*</span>
              </label>
              <select className="focus:outline-none">
                <option></option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>FeMale</option>
              </select>
            </div>
          </div>
          <div>
            <p className="font-bold">Mailing Address</p>
            <p className="my-5">
              This is where MAEC will send your copy of the report
            </p>
            <div className="flex flex-wrap justify-between">
              <div className="border-b flex flex-col mb-5 gap-5 w-screen ">
                <label>
                  STREET / P.O. BOX <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="outline-none mb-5 active:bg-none"
                  placeholder="Enter a location"
                />
              </div>
              <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                <label>APT/STE</label>
                <input
                  type="text"
                  className="outline-none mb-5 active:bg-none"
                />
              </div>
              <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                <label>
                  CITY <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="outline-none mb-5 active:bg-none"
                />
              </div>
              <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                <label>STATE/PROVIENCE/REGION</label>
                <input
                  type="text"
                  className="outline-none mb-5 active:bg-none"
                />
              </div>
              <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                <label>ZIP/POSTAL CODE</label>
                <input
                  type="text"
                  required
                  className="outline-none mb-5 active:bg-none"
                />
              </div>
              <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                <label>
                  COUNTRY <span className="text-red-500">*</span>
                </label>
                <select className="focus:outline-none">
                  <option></option>
                  {countryOptions.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                <label>
                  TELEPHONE <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="outline-none mb-5 active:bg-none"
                />
              </div>
            </div>
            <div className="w-full justify-end flex mt-5">
              <Button className="bg-[#2aaae0] font-bold rounded-full" onClick={nextButtonHandler}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </form>
  )
}
