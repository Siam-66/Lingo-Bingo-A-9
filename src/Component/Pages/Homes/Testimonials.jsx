import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "This website transformed my vocabulary skills! Highly recommend it.",
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
            background: "https://i.ibb.co.com/xYFHPrm/1jp-card.jpg",
        },
        {
            name: "Robert Downey",
            feedback: "Absolutely love the interface and teaching style.",
            avatar: "https://i.pinimg.com/736x/95/80/f7/9580f730887e0c36c8bf208435d2c510.jpg",
            background: "https://i.ibb.co.com/c6xqM85/2jp-card-jpg.jpg",
        },
        {
            name: "Jane Smith",
            feedback: "A fantastic platform to learn new words and boost your language fluency.",
            avatar: "https://www.digitalastic.com/wp-content/uploads/2020/02/testimonial-avatar-female-1-ux-builder.jpg",
            background: "https://i.ibb.co.com/3TWkbC1/3jp-card-jpg.jpg",
        },
        {
            name: "Sam Wilson",
            feedback: "The lessons are engaging and easy to follow. Love it!",
            avatar: "https://lesbruyeresauberchicourt.fr/wp-content/uploads/2020/09/testimonial-avatar-male-1-ux-builder.jpg",
            background: "https://i.ibb.co.com/pjX41gh/4jp-card-jpg.jpg",
        },
        {
            name: "Lisa Monroe",
            feedback: "Learning vocabulary has never been this enjoyable!",
            avatar: "https://litu.tu.ac.th/news/wp-content/uploads/2023/06/testimonial-avatar-female-2-ux-builder-element.jpg",
            background: "https://i.ibb.co.com/rHwHsms/5jp-card.jpg",
        },
        {
            name: "Tom Hanks",
            feedback: "My language fluency improved drastically. Highly recommend it.",
            avatar: "https://www.ethnicmusical.com/wp-content/uploads/2020/06/testimonial-avatar-male-2-ux-builder-element.jpg",
            background: "https://i.ibb.co.com/2SHmRtT/6jp-card.jpg",
        },
        {
            name: "Emily Clark",
            feedback: "Fantastic platform with easy-to-follow lessons.",
            avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
            background: "https://i.ibb.co.com/HHtX0mL/7jp-card.jpg",
        },
        {
            name: "Michael Scott",
            feedback: "Great experience! I enjoy learning new words daily.",
            avatar: "https://www.cloudways.com/wp-content/uploads/2020/01/testimonial-edward.png",
            background: "https://i.ibb.co.com/t3nyYHr/8jp-card.jpg",
        },
        {
            name: "Sophie Turner",
            feedback: "Innovative and interactive way to learn vocabularies.",
            avatar: "https://shop.kcomacademy.com/wp-content/uploads/2013/08/team3.png",
            background: "https://i.ibb.co.com/28QfGjs/9jp-card.jpg",
        },
        {
            name: "Scarlett Johansson",
            feedback: "The best language learning tool I've used so far.",
            avatar: "https://propertylist.lk/sites/default/files/testimonial/avatar-3.jpg",
            background: "https://i.ibb.co.com/fFJfvbg/10jp-card.jpg",
        },
        // Add remaining testimonials here...
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="bg-gray-100 py-12">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
            <Slider {...settings} className="max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="relative text-center">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${testimonial.background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(8px)",
                            }}
                        ></div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        {/* Content */}
                        <div className="relative z-10 p-6 text-white">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="mx-auto rounded-full w-20 h-20 mb-4 border-4 border-white"
                            />
                            <p className="text-lg italic mb-2">"{testimonial.feedback}"</p>
                            <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
