import {
    Config,
    ContentObject,
    ContentObjectType,
    GlobalProps,
    PageComponentProps,
    PostLayout,
    ProjectLayout,
    WorkLayout,
    RecentPostsSection,
    RecentProjectsSection,
    PostFeedLayout,
    ProjectFeedLayout
} from '@/types';
import { deepMapObject } from './data-utils';
import { ConfigModel } from '.stackbit/models/Config';
const log_verbose = false

export function resolveStaticProps(urlPath: string, allData: ContentObject[]): PageComponentProps {
    log_verbose && console.log('Resolving static props for urlPath:', urlPath);
    const originalPage = allData.find((obj) => obj.__metadata.urlPath === urlPath);
    log_verbose && console.log('OG Page: ', originalPage);
    const globalProps: GlobalProps = {
        site: allData.find((obj) => obj.__metadata.modelName === ConfigModel.name) as Config
    };

    function enrichContent(value: any) {
        const type = value?.__metadata?.modelName;
        if (type && PropsResolvers[type]) {
            const resolver = PropsResolvers[type];
            return resolver(value, allData);
        } else {
            return value;
        }
    }
    log_verbose &&  console.log('Ready to enrich Page... ');
    log_verbose && console.log('enrichContent =  ', enrichContent);
    log_verbose && console.log('originalPage =  ', originalPage.type);
    const enrichedPage = deepMapObject(originalPage, enrichContent) as ContentObject;
    return {
        ...enrichedPage,
        global: globalProps
    };
}

type ResolverFunction = (props: ContentObject, allData: ContentObject[]) => ContentObject;

const PropsResolvers: Partial<Record<ContentObjectType, ResolverFunction>> = {
    PostFeedLayout: (props, allData) => {
        const allPosts = getAllPostsSorted(allData);
        return {
            ...(props as PostFeedLayout),
            items: allPosts
        };
    },
    RecentPostsSection: (props, allData) => {
        const recentPosts = getAllPostsSorted(allData).slice(0, (props as RecentPostsSection).recentCount || 3);
        return {
            ...props,
            posts: recentPosts
        };
    },
    ProjectLayout: (props, allData) => {
        const allProjects = getAllProjectsSorted(allData);
        const currentProjectId = props.__metadata?.id;
        const currentProjectIndex = allProjects.findIndex((project) => project.__metadata?.id === currentProjectId);
        const nextProject = currentProjectIndex > 0 ? allProjects[currentProjectIndex - 1] : null;
        const prevProject = currentProjectIndex < allProjects.length - 1 ? allProjects[currentProjectIndex + 1] : null;
        return {
            ...props,
            prevProject,
            nextProject
        };
    },
    ProjectFeedLayout: (props, allData) => {
        //console.log("props: ", props)
        var allProjects = [];
        if (props.hasOwnProperty('isJobs') && props['isJobs']) {
            allProjects = getAllJobsSorted(allData);
        } else {
            allProjects = getAllProjectsSorted(allData);
        }
        return {
            ...(props as ProjectFeedLayout),
            items: allProjects
        };
    },
    RecentProjectsSection: (props, allData) => {
        const recentProjects = getAllProjectsSorted(allData).slice(0, (props as RecentProjectsSection).recentCount || 3);
        return {
            ...props,
            projects: recentProjects
        };
    }
};

function getAllPostsSorted(objects: ContentObject[]) {
    const all = objects.filter((object) => object.__metadata?.modelName === 'PostLayout') as PostLayout[];
    const sorted = all.sort((postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime());
    return sorted;
}

function getAllProjectsSorted(objects: ContentObject[]) {
    const all = objects.filter((object) => object.__metadata?.modelName === 'ProjectLayout' && (object as ProjectLayout).job != true) as ProjectLayout[];
    const sorted = all.sort((projectA, projectB) => new Date(projectB.date).getTime() - new Date(projectA.date).getTime());
    return sorted;
}

function getAllJobsSorted(objects: ContentObject[]) {
    const all = objects.filter((object) => object.__metadata?.modelName === 'WorkLayout' && (object as WorkLayout).job == true) as WorkLayout[];
    const sorted = all.sort((projectA, projectB) => new Date(projectB.date).getTime() - new Date(projectA.date).getTime());
    return sorted;
}
