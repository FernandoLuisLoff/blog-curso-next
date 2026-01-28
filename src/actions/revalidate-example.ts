'use server';

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateExampleAction(formData: FormData) {
    const path = formData.get('path')?.toString() || '';
    console.log('Estou em server action', path);

    // revalidatePath(path);
    revalidateTag('randomuser', 'active');
}