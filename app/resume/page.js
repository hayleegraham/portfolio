import Resume from "@/app/components/Resume";

export default function ResumePage() {


    return (
        <div className="flex flex-col justify-center pt-10">
            <div className="w-[1200px] flex justify-center self-center">
                <h2 className="text-2xl font-bold self-start">RESUME</h2>
            </div>
            <Resume />
        </div>

    );
}
