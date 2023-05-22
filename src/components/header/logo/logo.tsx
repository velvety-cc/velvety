import Link from 'next/link';

export default function Logo() {
    return (
        <div className='group flex w-full flex-row items-end justify-start self-start pr-5'>
            <Link href='/'>
                <div className='inline-block w-fit text-3xl font-semibold text-slate-950 group-hover:cursor-pointer'>
                    VELVETY
                </div>
                <div className='ml-px inline-block w-fit text-base font-semibold text-slate-950 group-hover:cursor-pointer'>
                    &copy; 2023
                </div>
            </Link>
        </div>
    );
}
