import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


export const projectsSection: ProjectsSectionType = {
    title: 'My Own Projects',
    projects: [
    {
        id: getId(),
        name: 'Poultry Management Api',
        url: 'https://brief-lesli-permamotive-1b1656c0.koyeb.app/api',
        repo: 'https://github.com/mehmoodulhaq/poultry-shield-server',
        img: '/poultrymanagementapi.png',
        year: 2024,
        tags: ['NestJs', 'KnexJs', 'Swagger', 'PostgresSQL'],
    },
    ],
};