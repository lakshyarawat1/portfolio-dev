// content/resumeData.ts

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  validity: string;
  badgeColor: string;
  verified: boolean;
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  description: string[];
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface AdditionalResearch {
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface ProfileLink {
  platform: string;
  username: string;
  url: string;
}

export interface ResumeData {
  personal: {
    name: string;
    titles: string[];
    phone: string;
    email: string;
    location: string;
    summary: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  certifications: Certification[];
  experience: WorkExperience[];
  projects: Project[];
  additionalResearch: AdditionalResearch[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: Education[];
  softSkills: {
    title: string;
    description: string;
  }[];
  profiles: ProfileLink[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "LAKSHYA",
    titles: ["Software Engineer", "Red Teamer", "DevSecOps"],
    phone: "+91-83686-92002",
    email: "Lakshya.paramount@gmail.com",
    location: "Delhi, India",
    summary:
      "Software Engineer at Accenture specializing in full-stack architecture, cloud security, and red teaming. Architected AI threat detection systems in Rust & Python. GCP ACE & 3x Oracle Cloud Certified.",
  },
  stats: [
    {
      label: "Software Experience",
      value: "1.5+ Yrs",
      description: "Full-stack development at Accenture serving 100k+ users",
    },
    {
      label: "Red Team Rank",
      value: "Top 5%",
      description: "Global rank on TryHackMe (100+ labs solved)",
    },
    {
      label: "Cloud Certifications",
      value: "4x Certified",
      description: "GCP ACE & 3x Oracle Cloud Professional",
    },
    {
      label: "Security Auditing",
      value: "30+ Fixed",
      description: "Critical SAST/DAST remediations across 10,000+ LOC",
    },
    {
      label: "System Reliability",
      value: "99.9% Uptime",
      description: "50k+ daily transactions with 100% on-time delivery",
    },
  ],
  certifications: [
    {
      id: "gcp-ace",
      name: "Google Associate Cloud Engineer (GCP ACE)",
      issuer: "Google Cloud Platform",
      validity: "2025–2028",
      badgeColor: "#4285F4",
      verified: true,
    },
    {
      id: "oci-dev",
      name: "Oracle Cloud Infrastructure Developer Professional",
      issuer: "Oracle",
      validity: "2025–2027",
      badgeColor: "#F80000",
      verified: true,
    },
    {
      id: "oci-ds",
      name: "Oracle Cloud Infrastructure Data Science Professional",
      issuer: "Oracle",
      validity: "2025–2027",
      badgeColor: "#F80000",
      verified: true,
    },
    {
      id: "oracle-siebel",
      name: "Oracle Siebel Associate",
      issuer: "Oracle",
      validity: "2025–2027",
      badgeColor: "#00758F",
      verified: true,
    },
  ],
  experience: [
    {
      company: "Accenture",
      role: "Associate Software Engineer",
      location: "Pune, IN",
      period: "Jan 2024 – Present",
      bullets: [
        "Architected full-stack React/Node.js solutions across 15+ Agile sprints, serving 100k+ active users and boosting engagement by 25%.",
        "Audited 10,000+ lines of code and performed SAST/DAST security testing across 10+ repositories, remediating 30+ critical vulnerabilities.",
        "Integrated 12+ third-party financial APIs handling 50k+ daily transactions with 99.9% uptime and zero defect leakage.",
      ],
    },
  ],
  projects: [
    {
      id: "guard-shield",
      title: "Guard Shield",
      subtitle: "AI IDS/IPS System",
      category: "Systems & Security",
      tags: ["Tauri", "Python", "ML", "Rust"],
      description: [
        "Built a real-time Intrusion Detection & Prevention System (IDS/IPS) using a custom ML anomaly model to automatically flag and block malicious network traffic.",
        "Packaged lightweight desktop binaries via Tauri (Windows, macOS, Linux) with a minimal attack surface.",
      ],
      githubUrl: "https://github.com",
      featured: true,
      metrics: "Real-time AI threat detection & automated blocking",
    },
    {
      id: "webcraft-pro",
      title: "WebCraft Pro",
      subtitle: "DevOps & Builder Portal",
      category: "Full-Stack Architecture",
      tags: ["Next.js", "Node.js", "React", "RBAC", "CI/CD"],
      description: [
        "Engineered an enterprise workflow portal featuring multi-tenant RBAC, a no-code website builder, and automated 1-click CI/CD deployment pipelines.",
        "Designed secure API endpoints enforcing role-based access control and zero-trust authentication.",
      ],
      githubUrl: "https://github.com",
      featured: true,
      metrics: "Multi-tenant RBAC with automated CI/CD pipeline",
    },
  ],
  additionalResearch: [
    {
      title: "Crowdsourced Bug Bounty",
      description:
        "Conducted web application security testing (OWASP Top 10) on production systems via Flipkart's Bug Bounty program.",
    },
    {
      title: "Red Team & Exploitation Labs",
      description:
        "Top 5% Global rank on TryHackMe (100+ labs in Linux privilege escalation, Wireshark, and web exploitation).",
    },
    {
      title: "Smart India Hackathon",
      description:
        "Led team to national runner-up finish for innovative software solutions.",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "Rust", "C++", "Java", "Bash"],
    },
    {
      category: "Frameworks & Runtimes",
      items: ["React", "Next.js", "Node.js", "Express.js", "Tauri"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "GCP (Certified)",
        "Oracle OCI (Certified)",
        "Docker",
        "Linux",
        "CI/CD Pipelines",
        "IAM",
      ],
    },
    {
      category: "Red Teaming & Security",
      items: [
        "Penetration Testing",
        "Web Exploitation",
        "Burp Suite",
        "Wireshark",
        "Nmap",
        "Metasploit",
        "OWASP Top 10",
      ],
    },
    {
      category: "Engineering Practices",
      items: [
        "System Design",
        "REST APIs",
        "Secure SDLC",
        "SAST/DAST",
        "Agile/Scrum",
        "Git",
      ],
    },
  ],
  education: [
    {
      degree: "MSc in Information Security",
      institution: "IGNOU",
      location: "Delhi",
      period: "2024 – Present",
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "MSI, GGSIPU",
      location: "Delhi",
      period: "2021 – 2024",
    },
  ],
  softSkills: [
    {
      title: "Leadership",
      description: "Led runner-up team in nation-wide hackathon.",
    },
    {
      title: "Management",
      description: "Managed training camps in voluntary cadet service for 3 years.",
    },
    {
      title: "Communication",
      description: "Hosted university and tech events.",
    },
  ],
  profiles: [
    {
      platform: "TryHackMe",
      username: "Top 5% Global",
      url: "https://tryhackme.com",
    },
    {
      platform: "HackerRank",
      username: "lakshya_paramou1",
      url: "https://hackerrank.com/lakshya_paramou1",
    },
    {
      platform: "LeetCode",
      username: "user3877M",
      url: "https://leetcode.com/user3877M",
    },
    {
      platform: "GitHub",
      username: "Lakshya",
      url: "https://github.com",
    },
    {
      platform: "LinkedIn",
      username: "Lakshya",
      url: "https://linkedin.com",
    },
  ],
};
