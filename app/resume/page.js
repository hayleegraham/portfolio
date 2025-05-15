import Resume from "@/app/components/Resume";

export default function ResumePage() {


    return (
        <div className="flex flex-col justify-center pt-10 lg:w-[80%] w-[90%] self-center">
            <div className="w-full flex justify-center self-center">
                <h2 className="text-2xl font-bold self-start">RESUME</h2>
            </div>
            <Resume />
        </div>

    );
}
