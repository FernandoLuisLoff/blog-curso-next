import { revalidateExampleAction } from '@/actions/revalidate-example';
import { formatHour } from '@/utils/format-datetime';
// import { revalidatePath, revalidateTag } from 'next/cache';

// revalidatePath('/exemplo/[id]');
// revalidateTag('exemplo-tag', 'seconds');

export const dynamic = 'force-static';
// export const dynamicParams = true;

// export const revalidate = 10;

// export async function generateStaticParams() {
//     return [{id: '1'}, {id: '2'}];
// }

export default async function ExemploDynamicPage({
    params,
}: {
    params: Promise<{id: string}>;
}) {
    const { id } = await params;
    const hour = formatHour(Date.now());

    return (
        <main className='min-h-[600px] text-4xl font-bold'>
            <div>
                Hora: {hour} (ID: {id})
            </div>
            <form action={revalidateExampleAction}>
                <input type="hidden" name="path" defaultValue={`/exemplo/${id}`} />
                <button
                    className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer"
                    type="submit"
                >
                        Revalidar
                </button>
            </form>
        </main>
    );
}