import VehicleSelector from './components/VehicleSelector';
import Page from './components/Page';

export default function Home() {
    return (
        <Page title="Select a car">
            <VehicleSelector />
        </Page>
    );
}
