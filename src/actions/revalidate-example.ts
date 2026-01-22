'use server';

export async function revalidateExampleAction(formData: FormData) {
    const path = formData.get('path') || '';
    console.log('Estou em server action', path);
}