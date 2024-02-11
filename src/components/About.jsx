import { FaqAns } from "./FaqAns";
import { useState } from "react";

const About = () => {
  const [showIndex, setShowIndex] = useState(null);

  const Faq = [
    {
      id: 1,
      q: "What type of cuisine does the restaurant serve?",
      ans: "Our restaurant specializes in South Indian,North Indian, Snacks,Fast Food, offering a variety of traditional and contemporary dishes.",
    },
    {
      id: 2,
      q: "Are there any special promotions or discounts available?",
      ans: "We occasionally run special promotions and discounts. Please check our website or social media channels for the latest offers.",
    },
    {
      id: 3,
      q: "Does the restaurant offer vegetarian/vegan/gluten-free options?",
      ans: "Yes, we have a range of options available for vegetarians, vegans, and those with gluten sensitivities. Our menu is clearly labeled for dietary preferences..",
    },
  ];

  return (
    <div>
      <h1 className="ms-5">FAQ:-</h1>
      {Faq.map((faq, index) => (
        //Controlled Component
        <FaqAns
          title={faq.q}
          children={faq.ans}
          key={faq.id}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default About;
