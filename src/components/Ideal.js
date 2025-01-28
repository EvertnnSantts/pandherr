import { useEffect } from "react";
import '../styles/components/Ideal.css';

function handleScroll() {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            el.classList.add("visible");
        }
    });
}

function Ideal(){
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="ideal">
            <h1 id="Ideal-Title" className="animate-on-scroll">
            Ready to Transform Your Ideas?
            </h1>
            <div className="Ideal-Texts animate-on-scroll">
                <h1 id="texts">We bring your story to life through digital solutions that truly help your business grow.</h1>
                <h1 id="texts">We focus on every detail to create technologies that simplify your routine and drive your dreams forward.</h1>
                <h1 id="texts">We’re here to turn your ideas into tools that make a difference in your daily life and your business's future.</h1>
            </div>
        </div>
    )
}

export default Ideal;
