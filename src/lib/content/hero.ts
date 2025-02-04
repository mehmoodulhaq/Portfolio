import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Mehmoodul Haq.',
    tagline: 'I create visually pleasing interfaces for the web.',
    description:
    "I'm a passionate Full-Stack web developer with experience in web applications using React.js, React Native, and Next.js with TypeScript, TailwindCSS, NativeBase, and UI/UX design.",
    specialText: 'Currently available for remote & onsite',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};