interface FAQProps {
    title: string;
    questions: { question: string; answer: string }[];
  }
  
  export default function FAQ({ title, questions }: FAQProps) {
    return (
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
          <div className="space-y-6 ">
            {questions.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-primary">{item.question}</h3>
                <p className="text-muted-foreground mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  