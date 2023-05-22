import Link from 'next/link';

export default function NavButton(props) {
    function renderNavButton(clicked: boolean) {
        switch (clicked) {
            // Button clicked
            case true:
                return (
                    <div>
                        <Link
                            href={props.route}
                            className='text-2xl font-medium text-slate-950'
                        >
                            {props.routeName}
                        </Link>
                        <div className='mt-1.5 h-[3px] w-10 rounded-full bg-slate-950'></div>
                    </div>
                );

            // Button not clicked
            case false:
                return (
                    <div>
                        <Link
                            href={props.route}
                            className='text-2xl font-medium text-neutral-400 transition-all duration-200 group-hover:text-slate-950 group-hover:transition-all group-hover:duration-200'
                        >
                            {props.routeName}
                        </Link>
                        <div className='mt-1.5 h-[3px] w-8 rounded-full bg-neutral-400 transition-all duration-200 group-hover:w-10 group-hover:bg-slate-950 group-hover:transition-all group-hover:duration-200'></div>
                    </div>
                );
        }
    }

    return (
        <li className='group w-full hover:cursor-pointer'>
            {renderNavButton(props.clicked)}
        </li>
    );
}
