// import Link from 'next/link';

// export default function NavButton(props) {
//     function renderNavButton(clicked: boolean) {
//         switch (clicked) {
//             // Button clicked
//             case true:
//                 return (
//                     <div>
//                         <Link
//                             href={props.route}
//                             className='text-2xl font-medium text-slate-950'
//                         >
//                             {props.routeName}
//                         </Link>
//                         <div className='mt-1.5 h-[3px] w-10 rounded-full bg-slate-950'></div>
//                     </div>
//                 );

//             // Button not clicked
//             case false:
//                 return (
//                     <div>
//                         <Link
//                             href={props.route}
//                             className='text-2xl font-medium text-neutral-400 transition-all duration-200 group-hover:text-slate-950 group-hover:transition-all group-hover:duration-200'
//                         >
//                             {props.routeName}
//                         </Link>
//                         <div className='mt-1.5 h-[3px] w-8 rounded-full bg-neutral-400 transition-all duration-200 group-hover:w-10 group-hover:bg-slate-950 group-hover:transition-all group-hover:duration-200'></div>
//                     </div>
//                 );
//         }
//     }

//     return (
//         <li className='group w-full hover:cursor-pointer'>
//             {renderNavButton(props.clicked)}
//         </li>
//     );
// }

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavButtonProps {
  route: string;
  routeName: string;
  clicked: boolean;
}

export default function NavButton({
  route,
  routeName,
  clicked,
}: NavButtonProps) {
  const spring = { type: "spring", stiffness: 400, damping: 30 };

  // Define how the components should look in different states
  const textVariants = {
    inactive: { color: "#a3a3a3" }, // neutral-400
    active: { color: "#020617" }, // slate-950
    hover: { color: "#020617" },
  };

  const underlineVariants = {
    inactive: { width: 32, backgroundColor: "#a3a3a3" },
    active: { width: 40, backgroundColor: "#020617" },
    hover: { width: 40, backgroundColor: "#020617" },
  };

  return (
    <motion.li
      className="w-full list-none"
      initial={false}
      animate={clicked ? "active" : "inactive"}
      whileHover="hover"
    >
      <Link href={route} className="inline-block w-full">
        <motion.span
          variants={textVariants}
          transition={{ duration: 0.2 }}
          className="text-2xl font-medium"
        >
          {routeName}
        </motion.span>

        <motion.div
          variants={underlineVariants}
          transition={spring}
          className="mt-1.5 h-[3px] rounded-full"
        />
      </Link>
    </motion.li>
  );
}
