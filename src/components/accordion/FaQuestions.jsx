import React, { useState } from "react";
import FaQuestionItems from "./FaQuestionItems";
import "./FaqQuestions.css";

const faqs = [
  {
    id: 1,
    header: "What is Lorem Ipsum?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.`,
  },
  {
    id: 2,
    header: "Where does it come from?",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it. `,
  },
  {
    id: 3,
    header: "Why do we use it?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.`,
  },
  {
    id: 4,
    header: "Where can I get some?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.`,
  },
  {
    id: 5,
    header: "Where can I get some?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.`,
  },
];

const FaQuestions = () => {
  const [active, setActive] = useState(faqs[0].id);

  const handleToggle = (value) => {
    setActive(active === value ? 0 : value);
  };

  return (
    <div className="mt-5 overflow-y-auto">
      <div>
        <div>
          <div>
            <div>
              {faqs.map((faq, index) => (
                <FaQuestionItems
                  key={index}
                  active={active}
                  handleToggle={handleToggle}
                  faq={faq}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQuestions;
