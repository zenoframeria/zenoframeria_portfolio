type SocialLink = { label: string; href: string; icon: string };

type Props = {
  name?: string;
  links?: SocialLink[];
};

// Footer แบบเรียบ: ชื่อ ปี และลิงก์โซเชียล
export default function SimpleFooter({
  name = "Frame",
  links = [
    { label: "GitHub", href: "https://github.com/zenoframeria", icon: "fa-brands fa-github"  },
    { label: "Instagram", href: "https://instagram.com/zintherion_viii", icon: "fa-brands fa-instagram" },
    { label: "Email", href: "mailto:thitipon.arc@gmail.com", icon: "fa-regular fa-envelope" },
  ],
}: Props) {
  const year = new Date().getFullYear();

    return (
        <footer id="contact" className="site-footer">
            <p>
                Copyright {year} {name}. Built with Next.js, deployed on Vercel.
            </p>
        <div className="social-links">
                {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" aria-label={link.label}>
                    <i className={link.icon}></i>
            </a>
        ))}
        </div>
    </footer>
  );
}
