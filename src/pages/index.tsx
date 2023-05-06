import Layout from "@/layouts/Layout";
import ProjectsData from "@/constant/Projects";
import ProjectCards from "@/components/ProjectCards";

export default function Home() {
    return (
        <Layout title="UX Profile | Nathanael P Ganata">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center md:gap-10 w-10/12 mx-auto justify-center ">
                {ProjectsData.map((v, i) => (
                    <ProjectCards {...v} key={i} />
                ))}
            </div>
        </Layout>
    );
}
