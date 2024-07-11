import { useSetRecoilState } from "recoil";
import { evalutonForm } from "../../../store/context";
import { Button } from "../../ui/button";
import usImg from "/us.svg";
import canadaImg from "/public/canada.svg";
import { ChangeEvent, useState } from "react";


const languageList = [
    {value:"af", name : "Afrikaans"},
    {value:"sq", name : "Albanian"},
    {value:"am", name : "Amharic"},
    {value:"ar", name : "Arabic"},
    {value:"hy", name : "Armenian"},
    {value:"az", name : "Azerbaijani"},
    {value:"eu", name : "Basque"},
    {value:"be", name : "Belarusian"},
    {value:"bn", name : "Bengali"},
    {value:"bs", name : "Bosnian"},
    {value:"bg", name : "Bulgarian"},
    {value:"ca", name : "Catalan"},
    {value:"ceb", name : "Cebuano"},
    {value:"ny", name : "Chichewa"},
    {value:"zh", name : "Chinese"},
    {value:"co", name : "Corsican"},
    {value:"hr", name : "Croatian"},
    {value:"cs", name : "Czech"},
    {value:"da", name : "Danish"},
    {value:"nl", name : "Dutch"},
    {value:"en", name : "English"},
    {value:"eo", name : "Esperanto"},
    {value:"et", name : "Estonian"},
    {value:"tl", name : "Filipino"},
    {value:"fi", name : "Finnish"},
    {value:"fr", name : "French"},
    {value:"fy", name : "Frisian"},
    {value:"gl", name : "Galician"},
    {value:"ka", name : "Georgian"},
    {value:"de", name : "German"},
    {value:"el", name : "Greek"},
    {value:"gu", name : "Gujarati"},
    {value:"ht", name : "Haitian"},
    {value:"ha", name : "Hausa"},
    {value:"haw", name : "Hawaiian"},
    {value:"he", name : "Hebrew"},
    {value:"hi", name : "Hindi"},
    {value:"hmn", name : "Hmong"},
    {value:"hu", name : "Hungarian"},
    {value:"is", name : "Icelandic"},
    {value:"ig", name : "Igbo"},
    {value:"id", name : "Indonesian"},
    {value:"ga", name : "Irish"},
    {value:"it", name : "Italian"},
    {value:"ja", name : "Japanese"},
    {value:"jw", name : "Javanese"},
    {value:"kn", name : "Kannada"},
    {value:"kk", name : "Kazakh"},
    {value:"km", name : "Khmer"},
    {value:"rw", name : "Kinyarwanda"},
    {value:"ko", name : "Korean"},
    {value:"ku", name : "Kurdish"},
    {value:"ky", name : "Kyrgyz"},
    {value:"lo", name : "Lao"},
    {value:"la", name : "Latin"},
    {value:"lv", name : "Latvian"},
    {value:"lt", name : "Lithuanian"},
    {value:"lb", name : "Luxembourgish"},
    {value:"mk", name : "Macedonian"},
    {value:"mg", name : "Malagasy"},
    {value:"ms", name : "Malay"},
    {value:"ml", name : "Malayalam"},
    {value:"mt", name : "Maltese"},
    {value:"mi", name : "Maori"},
    {value:"mr", name : "Marathi"},
    {value:"mn", name : "Mongolian"},
    {value:"my", name : "Myanmar"},
    {value:"ne", name : "Nepali"},
    {value:"no", name : "Norwegian"},
    {value:"or", name : "Odia"},
    {value:"ps", name : "Pashto"},
    {value:"fa", name : "Persian"},
    {value:"pl", name : "Polish"},
    {value:"pt", name : "Portuguese"},
    {value:"pa", name : "Punjabi"},
    {value:"ro", name : "Romanian"},
    {value:"ru", name : "Russian"},
    {value:"sm", name : "Samoan"},
    {value:"gd", name : "Scots"},
    {value:"sr", name : "Serbian"},
    {value:"st", name : "Sesotho"},
    {value:"sn", name : "Shona"},
    {value:"sd", name : "Sindhi"},
    {value:"si", name : "Sinhala"},
    {value:"sk", name : "Slovak"},
    {value:"sl", name : "Slovenian"},
    {value:"so", name : "Somali"},
    {value:"es", name : "Spanish"},
    {value:"su", name : "Sundanese"},
    {value:"sw", name : "Swahili"},
    {value:"sv", name : "Swedish"},
    {value:"tg", name : "Tajik"},
    {value:"ta", name : "Tamil"},
    {value:"tt", name : "Tatar"},
    {value:"te", name : "Telugu"},
    {value:"th", name : "Thai"},
    {value:"tr", name : "Turkish"},
    {value:"tk", name : "Turkmen"},
    {value:"uk", name : "Ukrainian"},
    {value:"ur", name : "Urdu"},
    {value:"ug", name : "Uyghur"},
    {value:"uz", name : "Uzbek"},
    {value:"vi", name : "Vietnamese"},
    {value:"cy", name : "Welsh"},
    {value:"xh", name : "Xhosa"},
    {value:"yi", name : "Yiddish"},
    {value:"yo", name : "Yoruba"},
    {value:"zu", name : "Zulu"},
]

export default function EvaluationForm() {
  const setPage = useSetRecoilState(evalutonForm);
  const [onlyEng, setOnlyEng] = useState(false);

  const alldocHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setOnlyEng(!isChecked);
  };
  const engHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setOnlyEng(isChecked);
  };

  const nextButtonHandler = () => {
    setPage({
      informaton: { timeline: true, page: true },
      evaluations: { timeline: false, page: false },
      education: { timeline: false, page: false },
      delivery: { timeline: false, page: false },
      pay: { timeline: false, page: false },
    });
  };

  return (
    <form className="px-10 max-md:px-2 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Your Evaluation</h2>
        <p className="py-5 font-bold">
          Where will you use your evaluation?{" "}
          <span className="text-red-500">*</span>
        </p>
        <div>
          <label>
            Please select the countries in which you will be using your report.
          </label>
          <div className="w-[60%] max-md:w-full flex max-md:flex-col p-3 gap-8 mb-10 ">
            <figure className="border flex flex-col justify-center items-center p-4">
              <img src={usImg} alt="usa flag" className="w-[12rem] h-[6rem]" />
              <p className="mt-3">US</p>
            </figure>
            <figure className="border flex flex-col justify-center items-center p-4">
              <img
                src={canadaImg}
                alt="canada flag"
                className="w-[12rem] h-[6rem]"
              />
              <p className="mt-3">CANADA</p>
            </figure>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 border-t ">
        <p className="py-5 font-bold">
          Translation Services
          <span className="text-red-500">*</span>
        </p>
        <p>
          International Education Evaluations requires certified English
          translations for all documents issued in any language other than
          English.
        </p>
        <div className="flex flex-col gap-5 ">
          <div className="flex items-center gap-5">
            <input
              id="allDocuments"
              type="radio"
              name="radio-7"
              className="border-black radio radio-info "
              defaultChecked
              onChange={alldocHandler}
            />
            <label htmlFor="allDocuments">
              All my documents are in English or I have a certified English
              translation
            </label>
          </div>
          <div className="flex items-center gap-5">
            <input
              id="english"
              type="radio"
              name="radio-7"
              className="border-black radio radio-info"
              onChange={engHandler}
            />
            <label htmlFor="english">Add English Translation</label>
          </div>
          {onlyEng && (
            <div className="flex flex-col gap-5">
              <p>
                Final translation will be delivered via email once complete.
              </p>
              <p className="font-bold">$60.00 per page</p>
              <p>
                LANGUAGE OF THE DOCUMENTS{" "}
                <span className="text-red-500">*</span>
              </p>
              <select id="languages" name="languages" className="focus:outline-none w-full border-b py-3 ">
                <option></option>
                {languageList.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.name}
                    </option>
                  ))}
              </select>
              <p>HOW MANY PAGES?  <span className="text-red-500">*</span></p>
              <input
                  type="number"
                  required
                  className="outline-none mb-5 active:bg-none border-b py-3 "
                />
            </div>
          )}
       
            <div className="flex flex-col gap-5 pt-5 mt-5 border-t">
              <p className="font-bold">
                Processing Time <span className="text-red-500">*</span>
              </p>
              <p>
                The standard processing time to receive a completed MyIEE
                evaluation report is 3 business days after receipt, review, and
                approval of all documents and English translations and payment
                in full. If additional research, correspondence, or verification
                is required, the evaluation will take longer. Because expedited
                orders are prioritized and begin processing immediately,
                expedited service fees are non-refundable. Expedited processing
                is guaranteed for 3-5 pages of translation. Any additional pages
                may incur additional processing time.
              </p>
              <div className="flex items-center gap-5">
                <input
                  id="3"
                  type="radio"
                  name="radio-1"
                  className="border-black radio radio-info "
                  defaultChecked
                />
                <label htmlFor="3" className="flex justify-between w-full">
                  <p> 3 Business Days - GUARANTEED</p>
                  <p className="font-bold">$50</p>
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  id="2"
                  type="radio"
                  name="radio-1"
                  className="border-black radio radio-info"
                />
                <label htmlFor="2" className="flex justify-between w-full">
                  <p> 2 Business Days - GUARANTEED</p>
                  <p className="font-bold">$100</p>
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  id="next"
                  type="radio"
                  name="radio-1"
                  className="border-black radio radio-info"
                />
                <label htmlFor="next" className="flex justify-between w-full">
                  <p>Next Business Day - GUARANTEED</p>
                  <p className="font-bold">$200</p>
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  id="32"
                  type="radio"
                  name="radio-1"
                  className="border-black radio radio-info"
                />
                <label htmlFor="32" className="flex justify-between w-full">
                  <p>3 Business Days - NOT GUARANTEED</p>
                  <p className="font-bold">$0</p>
                </label>
              </div>
            </div>
         
          
        </div>
      </div>
      <div className="w-full justify-end flex mt-5">
        <Button
          className="bg-[#2aaae0] font-bold rounded-full"
          onClick={nextButtonHandler}
        >
          Next
        </Button>
      </div>
    </form>
  );
}
