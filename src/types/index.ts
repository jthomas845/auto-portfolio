import { Config, ContentObject, PostFeedLayout, PostLayout, WorkLayout } from './generated';

export * from './base';
export * from './generated';

export type GlobalProps = {
    site: Config;
};

export type PageComponentProps = ContentObject & {
    global: GlobalProps;
};
