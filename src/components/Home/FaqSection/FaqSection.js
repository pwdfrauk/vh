import Accordion from './Accordion/Accordion'
const FaqSection =()=> {
    return(
    <section className="faq-section text-center wow animate__animated animate__slideInRight" data-wow-duration="2s">
        <div className="container">
            <div className="faq-section-area col-md-10 offset-md-1">
                <h2 className="faq-title text-center mb-4">FAQ</h2>
                <p className="faq-subtitle text-center color-grey-2 ">We regularly update our frequently asked questions,
                     based on the most popular questions we receive through our support centre.
                      If you can't find the answer you're looking for, 
                    please send us a question through support, here.</p>
                <div className="accordion">
                    <Accordion />
                </div>
            </div>
        </div>
    </section>
    )
}
export default FaqSection;