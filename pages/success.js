import Layout from "../components/Layout";
import OderModal from "../components/OderModal";

export default function Success() {
    return (
        <Layout>
            <OderModal opened={true} PaymentMethod={1} />
        </Layout>
    )
}