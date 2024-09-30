import React from 'react'

const FAQ = () => {
  return (
    <section className="w-[80%] h-[750px] mx-auto" id="faq">
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          What is rhestr?
        </div>
        <div className="collapse-content"> 
          <p>rhestr allows you to organize your bookmarks into a helpful register to help you get things done, breaking down projects into steps and accomplishing your goals with ease.</p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          What should I use rhestr for?
        </div>
        <div className="collapse-content"> 
          <p>rhestr is a sledgehammer to pulverize mountains into pebbles and turn an insurmountable project into an easy, step by step register to make work easy.</p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          What are the benefits of using rhestr?
        </div>
        <div className="collapse-content"> 
          <p>rhestr will turn a big project into a register of smaller steps giving you and your team super powers!</p>
          <ul className="list-disc">
            <li className="ml-4">Organize your bookmarks</li>
            <li className="ml-4">Control your focus</li>
            <li className="ml-4">Prioritize steps</li>
            <li className="ml-4">Supercharge your productivity</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          How can I get the most out of rhestr?
        </div>
        <div className="collapse-content"> 
          <p>rhestr will trivialize your work and take the thinking out of managing your tasks.</p>
          <ul className="list-disc">
            <li className="ml-4">Set realistic, achievable deadline</li>
            <li className="ml-4">Prioritize your tasks in order of importance</li>
            <li className="ml-4">Revisit your list often and reorganize when needed</li>
            <li className="ml-4">Limit yourself to between two and five tasks</li>
            <li className="ml-4">Don't forget to reward yourself for completing tasks!</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          What do I do if I need help using rhestr?
        </div>
        <div className="collapse-content"> 
          <p>We offer world class customer support 24/7 to users on our Professional and Enterprise plans to help you get the most out of rhestr. Solo users on our free plan can expect a response within 60 minutes on average.</p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          Can I cancel my paid rhestr plan?
        </div>
        <div className="collapse-content"> 
          <p>Yes! We allow paid users to cancel whenever they wish in the unlikely event rhestr doesn’t turn them into productivity speed demons. The remainder of the plan duration will be refunded to your payment method within 30 days.</p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
        <div className="collapse-title text-xl font-medium">
          I have a question not covered in the FAQ. How can I get an answer?
        </div>
        <div className="collapse-content"> 
          <p>Simply fill in the below contact form and a member of our team will be in touch to answer your question at the earliest possible opportunity.</p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
