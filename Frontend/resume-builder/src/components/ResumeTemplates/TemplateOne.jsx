// import React, { useEffect, useRef, useState }  from 'react'
// import {
//     LuMapPinHouse,
//     LuMail,
//     LuPhone,
//     LuRss,
//     LuGithub,
//     LuUser,
// } from "react-icons/lu";
// import { RiLinkedinLine } from "react-icons/ri";
// import ContactInfo from '../ResumeSections/ContactInfo';
// import EducationInfo from '../ResumeSections/EducationInfo';
// import { formatYearMonth } from '../../utils/helper';
// import LanguageSection from '../ResumeSections/LanguageSection';
// import WorkExperience from '../ResumeSections/WorkExperience';
// import ProjectInfo from '../ResumeSections/ProjectInfo';
// import SkillSection from '../ResumeSections/SkillSection';
// import CertificationInfo from '../ResumeSections/CertificationInfo';


// const DEFAULT_THEME = ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"];

// const Title = ({ text, color }) => {
//     return (
//         <div className="relative w-fit mb-2.5">
//             <span
//             className="absolute bottom-0 left-0 w-full h-2"
//             style={{ backgroundColor: color }}
//             ></span>
//             <h2 className={`relative text-sm font-bold`}>{text}</h2>
//         </div>
//     );
// };
// const TemplateOne = ({resumeData, colorPalette, containerWidth }) => {
//     const themeColors = colorPalette?.length > 0 ? colorPalette : DEFAULT_THEME;

//     const resumeRef = useRef(null);
//     const [baseWidth, setBaseWidth] = useState(800);
//     const [scale, setScale] = useState(1);

//     useEffect(() => {
//         // Calculate the scale factor based on the container width
//         const actualBaseWidth = resumeRef.current.offsetWidth;
//         setBaseWidth(actualBaseWidth);
//         setScale(containerWidth / baseWidth);
//     }, [containerWidth]);

//     return <div
//     ref={resumeRef}
//     className="p-3 bg-white"
//     style={{
//         transform: containerWidth > 0 ? `scale(${scale})` : "none",
//         transformOrigin: "top left",
//         width: containerWidth > 0 ? `${baseWidth}px` : "auto",
//         height: "auto",
//     }}
//     >
//         <div className="grid grid-cols-12 gap-8">
//             <div
//             className="col-span-4 py-10"
//             style={{ backgroundColor: themeColors[0] }}
//             >
//                 <div className="flex flex-col items-center px-2">
//                    <div
//                    className="w-[100px] h-[100px] max-w-[110px] max-h-[110px] rounded-full flex items-center justify-center"
//                    style={{ backgroundColor: themeColors[1] }}
//                    >
//                     {resumeData.profileInfo.profilePreviewUrl ? (
//                         <img
//                          src={resumeData.profileInfo.profilePreviewUrl}
//                          className="w-[90px] h-[90px] rounded-full"
//                          />
//                     ) : (
//                         <div
//                         className="w-[90px] h-[90px] flex items-center justify-center text-5xl rounded-full"
//                         style={{ color: themeColors[4] }}
//                         >
//                             <LuUser />
//                         </div>
//                     )}
//                    </div>

//                    <h2 className="text-xl font-bold mt-3">
//                       {resumeData.profileInfo.fullName}
//                    </h2>
//                    <p className="text-sm text-center">
//                     {resumeData.profileInfo.designation}
//                    </p>
//                 </div>

//                 <div className="my-6 mx-6">
//                     <div className="flex flex-col gap-4">
//                         <ContactInfo
//                         icon={<LuMapPinHouse />}
//                         iconBG={themeColors[2]}
//                         value={resumeData.contactInfo.location}
//                         />

//                          <ContactInfo
//                         icon={<LuMail />}
//                         iconBG={themeColors[2]}
//                         value={resumeData.contactInfo.email}
//                         />

//                          <ContactInfo
//                         icon={<LuPhone />}
//                         iconBG={themeColors[2]}
//                         value={resumeData.contactInfo.phone}
//                         />

//                         {resumeData.contactInfo.linkedin && (
//                             <ContactInfo 
//                              icon={<RiLinkedinLine />}
//                              iconBG={themeColors[2]}
//                              value={resumeData.contactInfo.linkedin}
//                             />
//                         )}

//                         {resumeData.contactInfo.github && (
//                              <ContactInfo 
//                              icon={<LuGithub />}
//                              iconBG={themeColors[2]}
//                              value={resumeData.contactInfo.github}
//                             />
//                         )}

//                         <ContactInfo 
//                              icon={<LuRss />}
//                              iconBG={themeColors[2]}
//                              value={resumeData.contactInfo.website}
//                             />
//                     </div>

//                     <div className="mt-5">
//                         <Title text="Education" color={themeColors[1]} />

//                         {resumeData.education.map((data, index) => (
//                             <EducationInfo 
//                               key={`education_${index}`}
//                               degree={data.degree}
//                               institution={data.institution}
//                               duration={`${formatYearMonth(
//                                 data.startDate
//                               )} - ${formatYearMonth(data.endDate)}`}
//                             />
//                         ))}
//                     </div>

//                     <div className="mt-5">
//                         <Title text="Languages" color={themeColors[1]}/>

//                         <LanguageSection
//                           languages={resumeData.languages}
//                           accentColor={themeColors[3]}
//                           bgColor={themeColors[2]}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="mx-10 pb-5">

//                 <div>
//                     <Title text="Professional Summary" color={themeColors[1]} />
//                     <p className="text-sm font-medium">
//                         {resumeData.profileInfo.summary}
//                     </p>
//                 </div>

//                 <div className="mt-4">
//                     <Title text="Work Experience" color={themeColors[1]} />

//                     {resumeData.workExperience.map((data, index) => (
//                         <WorkExperience
//                            key={`work_${index}`}
//                            company={data.company}
//                            role={data.role}
//                            duration={`${formatYearMonth(
//                               data.startDate
//                            )} - ${formatYearMonth(data.endDate)}`}
//                            durationColor={themeColors[4]}
//                            description={data.description}
//                         />
//                     ))}
//                 </div>

//                 <div className="mt-4">
//                     <Title text="Projects" color={themeColors[1] } />

//                     {resumeData.projects.map((project, index) => (
//                         <ProjectInfo
//                           key={`project_${index}`}
//                           title={project.title}
//                           description={project.description}
//                           githubLink={project.github}
//                           liveDemoUrl={project.liveDemo}
//                           bgColor={themeColors[2]}
//                         />
//                     ))}
//                 </div>

//                 <div className="mt-4">
//                     <Title text="Skills" color={themeColors[1]} />

//                     <SkillSection
//                       skills={resumeData.skills}
//                       accentColor={themeColors[3]}
//                       bgColor={themeColors[2]}
//                     />
//                 </div>

//                 <div className="mt-4">
//                     <Title text="Certifications" color={themeColors[1]} />

//                     <div className="grid grid-cols-2 gap-2">
//                         {resumeData.certifications.map((data, index) => (
//                             <CertificationInfo
//                                key={`cert_${index}`}
//                                title={data.title}
//                                issuer={data.issuer}
//                                year={data.year}
//                                bgColor={themeColors[2]}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                {resumeData.interests.length > 0 && resumeData.interests[0] != "" && ( 
//                 <div className="mt-4">
//                     <Title text="Interests" color={themeColors[1]} />

//                     <div className="flex items-center flex-wrap gap-3 mt-4">
//                         {resumeData.interests.map((interest, index) => {
//                             if (!interest) return null;
//                             return (
//                                 <div 
//                                 key={`interest_${index}`}
//                                 className="text-[10px] font-medium py-1 px-3 rounded-lg"
//                                 style={{ backgroundColor: themeColors[2] }}
//                                 >
//                                     {interest}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             )}
//             </div>
//         </div>
//     </div>
  
// };

// export default TemplateOne;
















// const TemplateOne = ({ resumeData, colorPalette, containerWidth }) => {
//   const resumeRef = useRef(null);
//   const [baseWidth, setBaseWidth] = useState(800);
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     if (resumeRef.current) {
//       const actualBaseWidth = resumeRef.current.offsetWidth;
//       setBaseWidth(actualBaseWidth);
//       setScale(containerWidth / actualBaseWidth);
//     }
//   }, [containerWidth]);

//   return (
//     <div
//       ref={resumeRef}
//       className="bg-white font-sans"
//       style={{
//         transform: containerWidth ? `scale(${scale})` : "none",
//         transformOrigin: "top left",
//         width: containerWidth ? `${baseWidth}px` : "auto",
//       }}
//     >
//       {/* Top Header Strip */}
//       <div className="bg-[#5B2245] text-white px-12 py-8">
//         <h1 className="text-3xl font-bold tracking-widest uppercase">
//           {resumeData.profileInfo.fullName}
//         </h1>
//         <p className="text-sm mt-2 tracking-wider uppercase">
//           {resumeData.profileInfo.designation}
//         </p>
//       </div>

//       <div className="grid grid-cols-12">
//         {/* LEFT SIDEBAR */}
//         <div className="col-span-4 bg-[#EDE9EC] px-8 py-10">
//           {/* Profile Image */}
//           <div className="flex justify-center mb-8">
//             <div className="w-36 h-36 rounded-full border-4 border-[#5B2245] overflow-hidden">
//               {resumeData.profileInfo.profilePreviewUrl ? (
//                 <img
//                   src={resumeData.profileInfo.profilePreviewUrl}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center text-5xl text-[#5B2245]">
//                   <LuUser />
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Contact */}
//           <h2 className="text-[#5B2245] font-bold tracking-widest mb-4">
//             CONTACT
//           </h2>

//           <div className="space-y-3 text-sm text-gray-800">
//             <p>{resumeData.contactInfo.phone}</p>
//             <p>{resumeData.contactInfo.email}</p>
//             <p>{resumeData.contactInfo.location}</p>
//             <p>{resumeData.contactInfo.website}</p>
//           </div>

//           {/* Skills */}
//           <div className="mt-8">
//             <h2 className="text-[#5B2245] font-bold tracking-widest mb-4">
//               TECH SKILLS
//             </h2>

//             <ul className="space-y-2 text-sm">
//               {resumeData.skills.map((skill, i) => (
//                 <li key={i}>• {skill.name}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Languages */}
//           <div className="mt-8">
//             <h2 className="text-[#5B2245] font-bold tracking-widest mb-4">
//               LANGUAGES
//             </h2>

//             <ul className="space-y-2 text-sm">
//               {resumeData.languages.map((lang, i) => (
//                 <li key={i}>
//                   • {lang.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="col-span-8 px-12 py-10 text-[#2E2E2E]">
//           {/* Profile */}
//           <Section title="PROFILE">
//             <p className="text-sm leading-relaxed">
//               {resumeData.profileInfo.summary}
//             </p>
//           </Section>

//           {/* Education */}
//           <Section title="EDUCATION">
//             {resumeData.education.map((edu, i) => (
//               <div key={i} className="mb-4">
//                 <div className="flex justify-between">
//                   <h3 className="font-semibold">
//                     {edu.degree}
//                   </h3>
//                   <span className="text-sm">
//                     {formatYearMonth(edu.startDate)} -{" "}
//                     {formatYearMonth(edu.endDate)}
//                   </span>
//                 </div>
//                 <p className="text-sm">{edu.institution}</p>
//               </div>
//             ))}
//           </Section>

//           {/* Projects */}
//           <Section title="PROJECTS">
//             {resumeData.projects.map((project, i) => (
//               <div key={i} className="mb-4">
//                 <div className="flex justify-between">
//                   <h3 className="font-semibold">{project.title}</h3>
//                 </div>
//                 <p className="text-sm mt-1">{project.description}</p>
//               </div>
//             ))}
//           </Section>

//           {/* Certifications */}
//           <Section title="Certifications">
//             {resumeData.certifications.map((cert, i) => (
//               <p key={i} className="text-sm mb-2">
//                 • {cert.title} - {cert.issuer}
//               </p>
//             ))}
//           </Section>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Section = ({ title, children }) => (
//   <div className="mb-8">
//     <h2 className="text-[#5B2245] font-bold tracking-widest border-b border-[#5B2245] pb-1 mb-4">
//       {title}
//     </h2>
//     {children}
//   </div>
// );


// export default TemplateOne;











import React, { useEffect, useRef, useState } from 'react';
import {
    LuMapPinHouse,
    LuMail,
    LuPhone,
    LuRss,
    LuGithub,
    LuUser,
} from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";

import ContactInfo from '../ResumeSections/ContactInfo';
import EducationInfo from '../ResumeSections/EducationInfo';
import { formatYearMonth } from '../../utils/helper';
import LanguageSection from '../ResumeSections/LanguageSection';
import WorkExperience from '../ResumeSections/WorkExperience';
import ProjectInfo from '../ResumeSections/ProjectInfo';
import SkillSection from '../ResumeSections/SkillSection';
import CertificationInfo from '../ResumeSections/CertificationInfo';

const DEFAULT_THEME = ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"];

const Title = ({ text, color }) => (
    <div className="relative w-fit mb-3">
        <span
            className="absolute bottom-0 left-0 w-full h-2 rounded"
            style={{ backgroundColor: color }}
        ></span>
        <h2 className="relative text-sm font-bold">{text}</h2>
    </div>
);

const TemplateOne = ({ resumeData, colorPalette, containerWidth }) => {
    const themeColors = colorPalette?.length > 0 ? colorPalette : DEFAULT_THEME;

    const resumeRef = useRef(null);
    const [baseWidth, setBaseWidth] = useState(800);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (!resumeRef.current) return;
        const actualBaseWidth = resumeRef.current.offsetWidth;
        setBaseWidth(actualBaseWidth);
        setScale(containerWidth / actualBaseWidth);
    }, [containerWidth]);

    return (
        <div
            ref={resumeRef}
            className="p-5 bg-white"
            style={{
                transform: containerWidth > 0 ? `scale(${scale})` : "none",
                transformOrigin: "top left",
                width: containerWidth > 0 ? `${baseWidth}px` : "auto",
            }}
        >
            <div className="grid grid-cols-12 gap-8">
                {/* Sidebar */}
                <div className="col-span-4 py-10 flex flex-col items-center bg-white rounded-lg" style={{ backgroundColor: themeColors[0] }}>
                    {/* Profile Photo */}
                    <div className="w-[100px] h-[100px] max-w-[110px] max-h-[110px] rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: themeColors[1] }}
                    >
                        {resumeData.profileInfo.profilePreviewUrl ? (
                            <img
                                src={resumeData.profileInfo.profilePreviewUrl}
                                className="w-[90px] h-[95px] rounded-full"
                            />
                        ) : (
                            <div
                                className="w-[90px] h-[90px] flex items-center justify-center text-5xl rounded-full"
                                style={{ color: themeColors[4] }}
                            >
                                <LuUser />
                            </div>
                        )}
                    </div>

                    <h2 className="text-xl font-bold">{resumeData.profileInfo.fullName}</h2>
                    <p className="text-sm text-center mb-6">{resumeData.profileInfo.designation}</p>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3 w-full px-6 mb-6">
                        <ContactInfo icon={<LuMapPinHouse />} iconBG={themeColors[2]} value={resumeData.contactInfo.location} />
                        <ContactInfo icon={<LuMail />} iconBG={themeColors[2]} value={resumeData.contactInfo.email} />
                        <ContactInfo icon={<LuPhone />} iconBG={themeColors[2]} value={resumeData.contactInfo.phone} />
                        {resumeData.contactInfo.linkedin && <ContactInfo icon={<RiLinkedinLine />} iconBG={themeColors[2]} value={resumeData.contactInfo.linkedin} />}
                        {resumeData.contactInfo.github && <ContactInfo icon={<LuGithub />} iconBG={themeColors[2]} value={resumeData.contactInfo.github} />}
                        <ContactInfo icon={<LuRss />} iconBG={themeColors[2]} value={resumeData.contactInfo.website} />
                    </div>

                    {/* Education */}
                    <div className="w-full px-6 mb-6">
                        <Title text="Education" color={themeColors[1]} />
                        <div className="flex flex-col gap-3">
                            {resumeData.education.map((data, index) => (
                                <EducationInfo
                                    key={`education_${index}`}
                                    degree={data.degree}
                                    institution={data.institution}
                                    duration={`${formatYearMonth(data.startDate)} - ${formatYearMonth(data.endDate)}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="w-full px-6 mb-6">
                        <Title text="Languages" color={themeColors[1]} />
                        <LanguageSection
                            languages={resumeData.languages}
                            accentColor={themeColors[3]}
                            bgColor={themeColors[2]}
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-8 flex flex-col space-y-6">
                    {/* Professional Summary */}
                    <div className="p-4 border-[0.0px] rounded-lg bg-white">
                        <Title text="Professional Summary" color={themeColors[1]} />
                        <p className="text-sm font-medium">{resumeData.profileInfo.summary}</p>
                    </div>

                    {/* Work Experience */}
                    <div className="p-4 border-[0.0px] rounded-lg bg-white">
                        <Title text="Work Experience" color={themeColors[1]} />
                        <div className="flex flex-col gap-4">
                            {resumeData.workExperience.map((data, index) => (
                                <WorkExperience
                                    key={`work_${index}`}
                                    company={data.company}
                                    role={data.role}
                                    duration={`${formatYearMonth(data.startDate)} - ${formatYearMonth(data.endDate)}`}
                                    durationColor={themeColors[4]}
                                    description={data.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="p-4 border-[0.0px] rounded-lg bg-white">
                        <Title text="Projects" color={themeColors[1]} />
                        <div className="flex flex-col gap-4">
                            {resumeData.projects.map((project, index) => (
                                <ProjectInfo
                                    key={`project_${index}`}
                                    title={project.title}
                                    description={project.description}
                                    githubLink={project.github}
                                    liveDemoUrl={project.liveDemo}
                                    bgColor={themeColors[2]}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="p-4 border-[0.0px] rounded-lg bg-white">
                        <Title text="Skills" color={themeColors[1]} />
                        <SkillSection
                            skills={resumeData.skills}
                            accentColor={themeColors[3]}
                            bgColor={themeColors[2]}
                        />
                    </div>

                    {/* Certifications */}
                    <div className="p-4 border-[0.0px] rounded-lg bg-white">
                        <Title text="Certifications" color={themeColors[1]} />
                        <div className="grid grid-cols-2 gap-2">
                            {resumeData.certifications.map((data, index) => (
                                <CertificationInfo
                                    key={`cert_${index}`}
                                    title={data.title}
                                    issuer={data.issuer}
                                    year={data.year}
                                    bgColor={themeColors[2]}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    {resumeData.interests.length > 0 && resumeData.interests[0] !== "" && (
                        <div className="p-4 border-[0.0px] rounded-lg bg-white">
                            <Title text="Interests" color={themeColors[1]} />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {resumeData.interests.map((interest, index) => {
                                    if (!interest) return null;
                                    return (
                                        <div
                                            key={`interest_${index}`}
                                            className="text-[10px] font-medium py-1 px-3 rounded-lg"
                                            style={{ backgroundColor: themeColors[2] }}
                                        >
                                            {interest}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TemplateOne;
