export default function MenuButton(props) {

    return (
        <button
            className='h-8 w-8 rounded-[3px] border-[3px] border-slate-950'
            onClick={props.onClick}
        >
            <div
                className={`
                ml-1.5 mt-0 h-[3px] w-[15px] transform rounded-[3px] bg-slate-950 transition-all duration-200
                ${props.clicked
                        ? '-translate-x-px -rotate-[45deg]'
                        : 'rotate-45'
                    }
                `}
            ></div>
            <div
                className={`
                ml-1.5 mt-1.5 h-[3px] w-[15px]  transform rounded-[3px] bg-slate-950 transition-all duration-200
                ${props.clicked
                        ? '-translate-x-px rotate-[45deg]'
                        : '-rotate-45'
                    }
                `}
            ></div>
        </button>
    );
}
