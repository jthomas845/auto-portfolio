import { DynamicComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { allContent } from '../utils/content';
import { PageComponentProps } from '@/types';

const Page: React.FC<PageComponentProps> = (props) => {
    return <DynamicComponent {...props} />;
};

export function getStaticPaths() {
    const allData = allContent();
    const paths = allData.map((obj) => obj.__metadata.urlPath).filter(Boolean);
    return { paths, fallback: false };
}

export function getStaticProps({ params }) {
    const allData = allContent();
    const slug = params?.slug || [];  // ensure slug is always an array
    const urlPath = '/' + slug.join('/');  // join if it's an array, falls back to '/' for homepage
    //const urlPath = '/' + (params.slug || []).join('/');
    console.log(`params: ${JSON.stringify(params)}`)
    console.log("if youre reaidng this its NOT resolved yet")
    const props = resolveStaticProps(urlPath, allData);
    console.log("if youre reaidng this IT HAS resolved well")
    //console.log(`resolved props: ${JSON.stringify(props)}`)
    return { props };
}

export default Page;
