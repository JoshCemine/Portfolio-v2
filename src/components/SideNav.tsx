import { useEffect, useState } from "preact/hooks";

const navItems = [
    { label: "About", target: "about" },
    { label: "Experience", target: "experience" },
    { label: "Projects", target: "projects" },
];

const SideNav = () => {
    const [active, setActive] = useState("about");

    useEffect(() => {
        function handleScroll() {
            let current = navItems[0].target;
            for (const item of navItems) {
                const element = document.getElementById(item.target);
                if (!element) continue;
                if (element.getBoundingClientRect().top <= 200) {
                    current = item.target;
                }
            }
            setActive(current);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToElement(id: string) {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <nav class="mt-16 hidden lg:block" aria-label="In-page navigation">
            <ul class="w-max">
                {navItems.map(item => (
                    <li key={item.target}>
                        <button
                            type="button"
                            class="group flex cursor-pointer items-center py-3"
                            onClick={() => scrollToElement(item.target)}
                        >
                            <span
                                class={`mr-4 h-px transition-all ${active === item.target
                                    ? "w-16 bg-stone-200"
                                    : "w-8 bg-stone-600 group-hover:w-16 group-hover:bg-stone-200"
                                    }`}
                            ></span>
                            <span
                                class={`text-xs font-bold uppercase tracking-widest ${active === item.target
                                    ? "text-stone-200"
                                    : "text-stone-500 group-hover:text-stone-200"
                                    }`}
                            >
                                {item.label}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideNav;
