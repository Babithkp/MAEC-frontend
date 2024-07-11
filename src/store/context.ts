import { atom } from "recoil";export const evalutonForm = atom({
  key: "evalutonForm",
  default: {
    informaton: { timeline: true, page: true },
    evaluations: { timeline: false, page: false },
    education: { timeline: false, page: false },
    delivery: { timeline: false, page: false },
    pay: { timeline: false, page: false },
  },
});
