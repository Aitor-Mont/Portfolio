import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: 'FRONTEND',
      desc: 'Interfaces modernas y reactivas',
      skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
      ]
    },
    {
      title: 'BACKEND',
      desc: 'Lógica de servidor robusta',
      skills: [
        { name: 'Java + Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true }
      ]
    },
    {
      title: 'BASES DE DATOS',
      desc: 'Almacenamiento y optimización',
      skills: [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
      ]
    },
    {
      title: 'DEVOPS & TOOLS',
      desc: 'CI/CD y Metodologías ágiles',
      skills: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Git / GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
        { name: 'Scrum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg' },
        { name: 'Kanban', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
        { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' }
      ]
    }
  ];

  return (
    <div className="bg-[#161b22] border-y border-surface-border py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Expertise Técnico</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Mis Habilidades</h3>
          <p className="text-[#9da9b8] text-lg max-w-2xl mx-auto leading-relaxed">
            Un conjunto de herramientas completo para abordar proyectos de principio a fin, combinando un frontend robusto con un backend escalable.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="relative overflow-hidden rounded-xl border border-slate-700/50 bg-[#1c242f] p-6 md:p-8 transition-all hover:border-slate-600"
            >
              {/* Card Header */}
              <div className="mb-8">
                <h4 className="text-white font-bold text-lg tracking-wide">
                  {group.title}: <span className="font-normal text-[#9da9b8]">{group.desc}</span>
                </h4>
              </div>

              {/* Skills Icons */}
              <div className="flex flex-wrap items-end gap-6 md:gap-10">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`w-12 h-12 md:w-14 md:h-14 object-contain ${skill.invert ? 'invert' : ''}`}
                    />
                    <span className="text-[#9da9b8] text-sm text-center whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
