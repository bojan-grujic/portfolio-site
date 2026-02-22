import { Quote } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: {
      en: "Bojan is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He transformed our vision into a beautiful, functional application.",
      sr: "Bojan je izuzetan programer koji dosled no isporučuje visokokvalitetan rad. Njegova pažnja na detalje i veštine rešavanja problema su izvanredne. Transformisao je našu viziju u lepu, funkcionalnu aplikaciju.",
    },
  },
  {
    name: "Michael Chen",
    role: "Product Manager, Digital Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: {
      en: "Working with Bojan was a pleasure. He's not only technically proficient but also great at communication. He understood our requirements perfectly and delivered beyond expectations.",
      sr: "Rad sa Bojanom je bilo zadovoljstvo. On nije samo tehnički stručan već je takođe odličan u komunikaciji. Savršeno je razumeo naše zahteve i isporučio više od očekivanja.",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, StartUp Ventures",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    text: {
      en: "Bojan's expertise in full-stack development helped us launch our product ahead of schedule. His code is clean, well-documented, and maintainable. Highly recommended!",
      sr: "Bojanova ekspertiza u full-stack razvoju nam je pomogla da lansiramo naš proizvod pre roka. Njegov kod je čist, dobro dokumentovan i održiv. Toplo preporučujem!",
    },
  },
  {
    name: "David Thompson",
    role: "Founder, Creative Agency",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    text: {
      en: "An absolute professional! Bojan brought fresh ideas to our project and implemented them flawlessly. His passion for development shines through in every line of code.",
      sr: "Apsolutni profesionalac! Bojan je doneo sveže ideje u naš projekat i besprekorno ih implementirao. Njegova strast za razvoj sija kroz svaku liniju koda.",
    },
  },
];

export function Testimonials() {
  const { language, t } = useLanguage();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("testimonials")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("testimonialsSubtitle")}
          </p>
        </motion.div>

        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg h-full"
                >
                  <Quote className="text-blue-600 dark:text-blue-400 mb-4" size={40} />
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonial.text[language]}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
