import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const file = data.get('file');

        if(file.name === null){
            return {
                success: false
            }
        }

        throw redirect(301, `/${file.name}`);
        
    }
}