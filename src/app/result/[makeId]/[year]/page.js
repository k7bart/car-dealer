import fetchAllMakes from '@/app/functions/fetchAllMakes';
import Result from './Result';
import Page from '@/app/components/Page';
import { Suspense } from 'react';

export async function generateStaticParams() {
    const data = await fetchAllMakes();

    const staticPaths = data.map(({ MakeId }) => ({
        params: { makeId: MakeId },
    }));

    return staticPaths;
}

const ResultPage = ({ params }) => {
    return (
        <Page title="Result">
            <Suspense fallback={<div>Loading...</div>}>
                <Result params={params} />
            </Suspense>
        </Page>
    );
};

export default ResultPage;
