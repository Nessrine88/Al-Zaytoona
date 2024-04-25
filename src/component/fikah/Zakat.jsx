import React from 'react';
import Principal from '../Principal';
import { useState, useEffect } from 'react';

export const ZakatQuestions = [
  {
    question: "ماهي الزكاة",
    answer:  'لغة: النماء و التطهير\n\nاصطلاحا: مال مخصوص في وقت مخصوص لشخص مخصوص بقدر مخصوص'
  },
  {
    question: "ماهي انواع الزكاة؟",
    answer:  "الزكاة نوعان\n\n ـ زكاة اموال\n\nـ زكاة ابدان"
  },
  {
    question: "ماهي اعتبارات زكاة الحرث؟",
    answer:  "نقوم بزكاة الحرث باعتبار:\n\nـ الادخار : ما يدخرمن  الحرث\n\nـ المقتات: ما تقوم به بنية الجسد "
  },
  {
    question: "ماهي انواع زكاة الاموال ؟",
    answer:  "3 انواع\n\nـ زكاة الحرث\n\nـ زكاة العين\n\nـ زكاة الماشية"
  },
  {
    question: "عرف كل نوع من زكاة الاموال",
    answer:  "زكاة العين: هي الزكاة المتعلقة بالذهب و الفضة\n\nزكاة الحرث : الزكاة المتعلقة ب20 صنفا :7 حبوب و 7 قطاني \n\nو 4 يستخرج منها الزيت و التمر والزبيب\n\nزكاة الماشية : الزكاة المتعلقة بالغنم و يضم الضأن والماعز\n\n و المتعلقة البقر و يضم الجاموس و الجمال "
  },
  {
    question: "ماهي القطاني السبعة ؟",
    answer:  "العدس والفول و الجلبان و اللوبياء \n\nو الحمص و البسيلة و الترمس"
  },
  {
    question: "هل يشترط الحول في زكاة الحرث؟",
    answer:  "لا يشترط الحول في زكاة الحرث"
  },
  {
    question: "متى تجب زكاة الحرث و متى يكون اخراجها ؟",
    answer:  " و يكون اخراجها يوم تنقيتها\n\nتجب زكاة الحرث عندما يطيب المحصول"
  },
  {
    question: "ماهو النصاب و ما هو مقداره ؟",
    answer:  "  هو خمسة اوسق مكيالا او وزنا \n\nو المقدار هوالذي يضبط جواز الزكاة "
  },
  {
    question: "question9",
    answer:  "ddddddd"
  },
  {
    question: "question10",
    answer:  "ddddddd"
  },

];

const Zakat = () => {
  const [randomQuestions, setRandomQuestions] = useState([]);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    if (ZakatQuestions.length >= 10) {
      const shuffledQuestions = shuffleArray([...ZakatQuestions]);
      const selectedQuestions = shuffledQuestions.slice(0, 10);
      setRandomQuestions(selectedQuestions);
    }
  }, [ZakatQuestions]);

  return (
    <div>
      {randomQuestions.length > 0 ? (
        <Principal questions={randomQuestions} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Zakat;