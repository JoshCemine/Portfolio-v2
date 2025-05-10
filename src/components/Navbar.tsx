import { useEffect, useState } from "preact/hooks";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const showAfter = window.innerHeight * 0.80;

        // Handle navbar visibility
        function handleNavVisibility() {
            setVisible(window.scrollY > showAfter);
        }

        // Track active section
        function handleActiveSection() {
            const sections = navBarItems.map(item => item.target).filter(Boolean);
            let current = "";

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (!element) return;

                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = section;
                }
            });

            setActiveSection(current);
        }

        const handleScroll = () => {
            handleNavVisibility();
            handleActiveSection();
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function scrollToElement(id: string) {
        const ref = document.getElementById(id);
        if (!ref) return;

        ref.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    const navBarItems = [
        { label: "Experience", target: "experience-container" },
        { label: "Skills", target: "skills-container" },
        { label: "Projects", target: "projects-container" },
    ];

    return (
        <div
            class={`fixed top-1/2 transform -translate-y-1/2 text-white 
                   transition-all duration-300 ease-in-out hidden md:block 2xl:hidden
                   ${visible ? 'opacity-100 visible' : 'opacity-0 invisible delay-50'}`}
        >
            <div class="flex flex-col font-extrabold text-2xl font-test p-4 pl-12 [&>*]:pb-3">
                {navBarItems.map(item => (
                    <div key={item.target} class="relative">
                        <p
                            class={`cursor-pointer transition-colors ${activeSection === item.target ? 'text-white' : 'text-white/40 hover:text-white'
                                }`}
                            onClick={() => scrollToElement(item.target)}
                        >
                            {item.label}
                        </p>
                        {activeSection === item.target && (
                            <div class="absolute -left-4 top-1/2 transform -translate-y-2.25 w-2 h-2 bg-white rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;