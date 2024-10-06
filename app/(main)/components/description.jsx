import DataSettings from "@/app/layout/dataSetting/settings";


export default async function Description() {

    const setting = await DataSettings()

    return (
        <div dangerouslySetInnerHTML={{ __html: setting.description }}></div>
    )
}
