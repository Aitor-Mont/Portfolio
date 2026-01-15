
import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      desc: 'Interfaces modernas y reactivas',
      icon: 'desktop_windows',
      items: [
        { name: 'Angular', level: '90%', color: '#dd0031' },
        { name: 'TypeScript', level: '95%', color: '#3178c6' },
        { name: 'Tailwind CSS', level: '85%', color: '#38bdf8' }
      ]
    },
    {
      title: 'Backend',
      desc: 'Lógica de servidor robusta',
      icon: 'terminal',
      items: [
        { name: 'Java + Spring', level: '85%', color: '#f89820' },
        { name: 'Node.js', level: '80%', color: '#68a063' },
        { name: 'Express', level: '75%', color: '#ffffff' }
      ]
    },
    {
      title: 'Bases de Datos',
      desc: 'Almacenamiento y optimización',
      icon: 'storage',
      items: [
        { name: 'MongoDB', level: '85%', color: '#4db33d' },
        { name: 'MySQL', level: '80%', color: '#00758f' },
        { name: 'PostgreSQL', level: '80%', color: '#336791' }
      ]
    },
    {
      title: 'DevOps & Tools',
      desc: 'CI/CD y Metodologías ágiles',
      icon: 'all_inclusive',
      chips: ['Docker', 'Git / GitHub', 'Scrum', 'Kanban', 'Jira']
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-surface-dark p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <div className="flex items-center gap-5 border-b border-slate-800 pb-6 mb-8">
                <div className="p-3.5 rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[32px]">{group.icon}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">{group.title}</h4>
                  <p className="text-sm text-[#9da9b8]">{group.desc}</p>
                </div>
              </div>

              {group.items ? (
                <div className="space-y-6">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm text-white">{skill.name}</span>
                        <span className="text-xs text-[#9da9b8] font-medium">{skill.level}</span>
                      </div>
                      <div className="w-full bg-background-dark h-2 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000" 
                          style={{ width: skill.level, backgroundColor: skill.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2.5">
                  {group.chips?.map((chip) => (
                    <span key={chip} className="px-4 py-2 rounded-full bg-background-dark border border-slate-800 text-sm font-bold text-[#9da9b8] hover:text-primary hover:border-primary transition-colors cursor-default">
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
