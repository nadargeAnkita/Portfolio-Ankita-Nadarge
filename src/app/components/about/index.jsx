import clsx from 'clsx';
import React from 'react';


const ItemLayout = ({ children, className }) => {
    return (<div className={clsx('custom-bg space-y-8 p-8 rounded-xl flex items-center justify-center', className)}>
        {children}  </div>
    );
};


const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-8 w-full'>

                <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-4xl text-left w-full capitalize text-accent'>
                        Architect of Enchantment
                    </h2>
                    <p className=' text-white'>
                    My academic journey at Shivaji University is carving a path in computer science, underscored by a keen interest in data analytics and web development technologies. My internships have been a practical extension of this knowledge, particularly with Innovate Intern, where I immersed myself in data science and analytics, leveraging my skills in Tailwind CSS, Next.js, and React.js to deliver insightful solutions.

The training programs at VaultofCodes and Edunet Foundation have further solidified my technical prowess, allowing me to take on complex web and cloud-based projects. These experiences have not only reinforced my understanding of modern tech stacks but also my commitment to contributing to innovative solutions within the tech industry.
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-3xl'>
                        Eduction:<br /> <sub className='font-semibold text-base text-white'>
                            Pursuing B.Tech(3-Year) in Computer Science and Technology
                        </sub>
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-3xl'>
                        Language:<br /> <sub className='font-semibold text-base text-white'>
                            1. English 2. Marathi 3. Hindi
                        </sub>
                    </p>
                </ItemLayout>


                <ItemLayout className={"col-span-4 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs/?username=nadargeAnkita&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Ankita" loading='lazy' />
                </ItemLayout>


                <ItemLayout className={"col-span-8 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=nadargeAnkita&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Ankita" loading='lazy' />
                </ItemLayout>


                <ItemLayout className={"col-span-8"}>
                    <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,html,css,c,cpp,git,github,java,linux,mongodb,mysql,nextjs,nodejs,npm,postman,py,react,tailwind,ubuntu,vscode,vite" alt="Ankita" loading='lazy' />
                </ItemLayout>


                <ItemLayout className={"col-span-4 !p-0"}>
                    <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=nadargeAnkita&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="Ankita" loading='lazy' />
                </ItemLayout>


            </div>
        </section>
    );
}

export default AboutDetails;
