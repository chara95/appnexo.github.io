
const defaultConfig = {
    background_color: "#f8fafc",
    surface_color: "#ffffff",
    text_color: "#1e293b",
    primary_action_color: "#3b82f6",
    secondary_action_color: "#8b5cf6",
    font_family: "system-ui",
    font_size: 16,
    developer_name: "appnexo",
    tagline: "Creando soluciones digitales innovadoras",
    bio: "Soy un desarrollador apasionado por crear soluciones innovadoras que mejoran la vida de las personas. Con experiencia en desarrollo web y móvil, me encanta transformar ideas en productos digitales funcionales y atractivos. Siempre estoy explorando nuevas tecnologías y metodologías para ofrecer las mejores soluciones a mis clientes.",
    email: "dpsservicio@gmail.com",
    apps_section_title: "Mis Aplicaciones",
    about_section_title: "Sobre Mí",
    skills_section_title: "Habilidades",
    app1_name: "TaskManager Pro",
    app1_description: "Aplicación de gestión de tareas con sincronización en tiempo real y colaboración en equipo.",
    app1_tech: "React, Firebase, Tailwind CSS",
    app2_name: "E-Commerce Hub",
    app2_description: "Plataforma de comercio electrónico con pasarela de pagos integrada y panel de administración.",
    app2_tech: "Next.js, Stripe, MongoDB",
    app3_name: "FitTracker",
    app3_description: "App móvil para seguimiento de ejercicios, nutrición y progreso físico con análisis detallados.",
    app3_tech: "React Native, Node.js, PostgreSQL",
    skill1: "JavaScript",
    skill2: "React",
    skill3: "Node.js",
    skill4: "Python",
    skill5: "MongoDB",
    skill6: "Docker"
};

async function onConfigChange(config) {
    const customFont = config.font_family || defaultConfig.font_family;
    const baseFontStack = 'system-ui, -apple-system, sans-serif';
    const baseSize = config.font_size || defaultConfig.font_size;

    const backgroundColor = config.background_color || defaultConfig.background_color;
    const surfaceColor = config.surface_color || defaultConfig.surface_color;
    const textColor = config.text_color || defaultConfig.text_color;
    const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
    const secondaryColor = config.secondary_action_color || defaultConfig.secondary_action_color;

    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
    document.body.style.fontSize = `${baseSize}px`;

    const wrapper = document.getElementById('app-wrapper');
    wrapper.style.background = backgroundColor;
    wrapper.style.color = textColor;

    const header = document.querySelector('header');
    header.style.background = `linear-gradient(135deg, ${primaryColor}15 0%, ${secondaryColor}15 100%)`;

    const avatar = document.querySelector('header .w-32');
    avatar.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
    avatar.style.color = surfaceColor;

    document.getElementById('developer-name').textContent = config.developer_name || defaultConfig.developer_name;
    document.getElementById('developer-name').style.fontSize = `${baseSize * 3.75}px`;
    document.getElementById('developer-name').style.color = textColor;

    document.getElementById('tagline').textContent = config.tagline || defaultConfig.tagline;
    document.getElementById('tagline').style.fontSize = `${baseSize * 1.5}px`;
    document.getElementById('tagline').style.color = textColor;

    const contactBtn = document.getElementById('contact-email');
    contactBtn.href = `mailto:${config.email || defaultConfig.email}`;
    contactBtn.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
    contactBtn.style.color = surfaceColor;
    contactBtn.style.fontSize = `${baseSize * 1.125}px`;

    document.getElementById('apps-section-title').textContent = config.apps_section_title || defaultConfig.apps_section_title;
    document.getElementById('apps-section-title').style.fontSize = `${baseSize * 2.5}px`;
    document.getElementById('apps-section-title').style.color = textColor;

    document.getElementById('about-section-title').textContent = config.about_section_title || defaultConfig.about_section_title;
    document.getElementById('about-section-title').style.fontSize = `${baseSize * 2.5}px`;
    document.getElementById('about-section-title').style.color = textColor;

    document.getElementById('skills-section-title').textContent = config.skills_section_title || defaultConfig.skills_section_title;
    document.getElementById('skills-section-title').style.fontSize = `${baseSize * 2.5}px`;
    document.getElementById('skills-section-title').style.color = textColor;

    document.getElementById('bio').textContent = config.bio || defaultConfig.bio;
    document.getElementById('bio').style.fontSize = `${baseSize * 1.25}px`;
    document.getElementById('bio').style.color = textColor;

    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach(card => {
        card.style.background = surfaceColor;
        card.style.color = textColor;
    });

    document.getElementById('app1-name').textContent = config.app1_name || defaultConfig.app1_name;
    document.getElementById('app1-name').style.fontSize = `${baseSize * 1.5}px`;
    document.getElementById('app1-name').style.color = textColor;

    document.getElementById('app1-description').textContent = config.app1_description || defaultConfig.app1_description;
    document.getElementById('app1-description').style.fontSize = `${baseSize}px`;
    document.getElementById('app1-description').style.color = textColor;

    document.getElementById('app1-tech').textContent = config.app1_tech || defaultConfig.app1_tech;
    document.getElementById('app1-tech').style.fontSize = `${baseSize * 0.875}px`;
    document.getElementById('app1-tech').style.color = primaryColor;

    document.getElementById('app2-name').textContent = config.app2_name || defaultConfig.app2_name;
    document.getElementById('app2-name').style.fontSize = `${baseSize * 1.5}px`;
    document.getElementById('app2-name').style.color = textColor;

    document.getElementById('app2-description').textContent = config.app2_description || defaultConfig.app2_description;
    document.getElementById('app2-description').style.fontSize = `${baseSize}px`;
    document.getElementById('app2-description').style.color = textColor;

    document.getElementById('app2-tech').textContent = config.app2_tech || defaultConfig.app2_tech;
    document.getElementById('app2-tech').style.fontSize = `${baseSize * 0.875}px`;
    document.getElementById('app2-tech').style.color = primaryColor;

    document.getElementById('app3-name').textContent = config.app3_name || defaultConfig.app3_name;
    document.getElementById('app3-name').style.fontSize = `${baseSize * 1.5}px`;
    document.getElementById('app3-name').style.color = textColor;

    document.getElementById('app3-description').textContent = config.app3_description || defaultConfig.app3_description;
    document.getElementById('app3-description').style.fontSize = `${baseSize}px`;
    document.getElementById('app3-description').style.color = textColor;

    document.getElementById('app3-tech').textContent = config.app3_tech || defaultConfig.app3_tech;
    document.getElementById('app3-tech').style.fontSize = `${baseSize * 0.875}px`;
    document.getElementById('app3-tech').style.color = primaryColor;

    const skills = ['skill1', 'skill2', 'skill3', 'skill4', 'skill5', 'skill6'];
    skills.forEach(skillId => {
        const element = document.getElementById(skillId);
        element.textContent = config[skillId] || defaultConfig[skillId];
        element.style.fontSize = `${baseSize * 1.125}px`;
        element.style.background = `linear-gradient(135deg, ${primaryColor}20 0%, ${secondaryColor}20 100%)`;
        element.style.color = textColor;
    });

    const aboutSection = document.querySelector('#bio').parentElement;
    aboutSection.style.background = surfaceColor;
    aboutSection.style.color = textColor;

    const footer = document.querySelector('footer');
    footer.style.background = `linear-gradient(135deg, ${primaryColor}10 0%, ${secondaryColor}10 100%)`;
    footer.style.color = textColor;
    footer.style.fontSize = `${baseSize * 1.125}px`;
}

async function init() {
    if (window.elementSdk) {
        await window.elementSdk.init({
            defaultConfig,
            onConfigChange,
            mapToCapabilities: (config) => ({
                recolorables: [
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => {
                            config.background_color = value;
                            window.elementSdk.setConfig({ background_color: value });
                        }
                    },
                    {
                        get: () => config.surface_color || defaultConfig.surface_color,
                        set: (value) => {
                            config.surface_color = value;
                            window.elementSdk.setConfig({ surface_color: value });
                        }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => {
                            config.text_color = value;
                            window.elementSdk.setConfig({ text_color: value });
                        }
                    },
                    {
                        get: () => config.primary_action_color || defaultConfig.primary_action_color,
                        set: (value) => {
                            config.primary_action_color = value;
                            window.elementSdk.setConfig({ primary_action_color: value });
                        }
                    },
                    {
                        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                        set: (value) => {
                            config.secondary_action_color = value;
                            window.elementSdk.setConfig({ secondary_action_color: value });
                        }
                    }
                ],
                borderables: [],
                fontEditable: {
                    get: () => config.font_family || defaultConfig.font_family,
                    set: (value) => {
                        config.font_family = value;
                        window.elementSdk.setConfig({ font_family: value });
                    }
                },
                fontSizeable: {
                    get: () => config.font_size || defaultConfig.font_size,
                    set: (value) => {
                        config.font_size = value;
                        window.elementSdk.setConfig({ font_size: value });
                    }
                }
            }),
            mapToEditPanelValues: (config) => new Map([
                ["developer_name", config.developer_name || defaultConfig.developer_name],
                ["tagline", config.tagline || defaultConfig.tagline],
                ["bio", config.bio || defaultConfig.bio],
                ["email", config.email || defaultConfig.email],
                ["apps_section_title", config.apps_section_title || defaultConfig.apps_section_title],
                ["about_section_title", config.about_section_title || defaultConfig.about_section_title],
                ["skills_section_title", config.skills_section_title || defaultConfig.skills_section_title],
                ["app1_name", config.app1_name || defaultConfig.app1_name],
                ["app1_description", config.app1_description || defaultConfig.app1_description],
                ["app1_tech", config.app1_tech || defaultConfig.app1_tech],
                ["app2_name", config.app2_name || defaultConfig.app2_name],
                ["app2_description", config.app2_description || defaultConfig.app2_description],
                ["app2_tech", config.app2_tech || defaultConfig.app2_tech],
                ["app3_name", config.app3_name || defaultConfig.app3_name],
                ["app3_description", config.app3_description || defaultConfig.app3_description],
                ["app3_tech", config.app3_tech || defaultConfig.app3_tech],
                ["skill1", config.skill1 || defaultConfig.skill1],
                ["skill2", config.skill2 || defaultConfig.skill2],
                ["skill3", config.skill3 || defaultConfig.skill3],
                ["skill4", config.skill4 || defaultConfig.skill4],
                ["skill5", config.skill5 || defaultConfig.skill5],
                ["skill6", config.skill6 || defaultConfig.skill6]
            ])
        });
    }
}

init();
