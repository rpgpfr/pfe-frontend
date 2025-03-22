import ProfileForm from "@/components/ProfileForm/ProfileForm";

export default function Profile() {
    return (
        <div className="border rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
                <StatCard title="campagnes créées" value={0} />
                <StatCard title="cartes créées" value={0} />
                <StatCard title="personnages créés" value={0} />
                <StatCard title="ressources créées" value={0} />
            </div>
            <div className="border-blue-500 mt-6 h-[500px] overflow-hidden"> {/* Set a fixed height */}
                <ProfileForm initialData={{}} />
            </div>
        </div>
    );
}

function StatCard({ title, value }: { title: string; value: number }) {
    return (
        <div className="border rounded-lg p-6">
            <div className="text-center">
                <div className="text-4xl font-normal text-green-500">{value}</div>
                <div className="text-base text-gray-800 mt-2">{title}</div>
            </div>
        </div>
    );
}
