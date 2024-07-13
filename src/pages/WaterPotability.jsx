import { Card, Button, TextInput } from "flowbite-react"
import Layout from '../components/Layout';

export default function WaterPotability() {
    document.title = "Water Potability"

    return (
        <Layout>
            <h1 className="text-xl font-bold mb-7">WATER POTABILITY CLASSIFICATION (KLASIFIKASI  KELAYAKAN AIR MINUM)</h1>
            <div className="p-6 space-y-4 mb-4 w-full h-auto bg-white rounded-lg overflow-hidden drop-shadow">
                <span className="text-black font-bold">Klasifikasi Dataset Water Potability menggunakan algoritma Random Forest Classifier</span>
                <Button className="bg-[#3C66FD] hover:!bg-[#2749c5] w-48">Generate random data</Button>

                <form>
                    <div className="grid grid-cols-2 gap-1 w-full">
                        <div className="flex flex-col mb-4">
                            <TextInput name="ph" type="number" step="0.001" min="0" max="1" placeholder="ph" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <TextInput name="hardness" type="number" step="0.001" min="0" max="1" placeholder="hardness" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <TextInput name="solids" type="number" step="0.001" min="0" max="1" placeholder="solids" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <TextInput name="chloramines" type="number" step="0.001" min="0" max="1" placeholder="chloramines" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <TextInput name="sulfate" type="number" step="0.001" min="0" max="1" placeholder="sulfate" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <TextInput name="conductivity" type="number" step="0.001" min="0" max="1" placeholder="conductivity" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <TextInput name="organic_carbon" type="number" step="0.001" min="0" max="1" placeholder="organic_carbon" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <TextInput name="trihalomethanes" type="number" step="0.001" min="0" max="1" placeholder="trihalomethanes" required />
                        </div>
                    </div>
                    <TextInput name="trihalomethanes" type="number" step="0.001" min="0" max="1" placeholder="trihalomethanes" required />

                    <Button className="mt-4 w-full bg-[#3C66FD] hover:!bg-[#2749c5]" type="submit">Submit</Button>
                </form>
            </div>

        </Layout>

    );
}
