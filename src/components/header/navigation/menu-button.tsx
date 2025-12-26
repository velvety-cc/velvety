// export default function MenuButton(props) {
//   return (
//     <button
//       className="h-8 w-8 rounded-[3px] border-[3px] border-slate-950"
//       onClick={props.onClick}
//     >
//       <div
//         className={`
//                 ml-1.5 mt-0 h-[3px] w-[15px] transform rounded-[3px] bg-slate-950 transition-all duration-200
//                 ${
//                   props.clicked
//                     ? "-translate-x-px -rotate-[45deg]"
//                     : "rotate-45"
//                 }
//                 `}
//       ></div>
//       <div
//         className={`
//                 ml-1.5 mt-1.5 h-[3px] w-[15px]  transform rounded-[3px] bg-slate-950 transition-all duration-200
//                 ${
//                   props.clicked
//                     ? "-translate-x-px rotate-[45deg]"
//                     : "-rotate-45"
//                 }
//                 `}
//       ></div>
//     </button>
//   );
// }

"use client";

import { motion } from "framer-motion";

interface MenuButtonProps {
  onClick: () => void;
  clicked: boolean;
}

export default function MenuButton({ onClick, clicked }: MenuButtonProps) {
  // Spring physics for a snappy, Vercel-like feel
  const spring = { type: "spring", stiffness: 500, damping: 50 };

  return (
    <button
      onClick={onClick}
      className="relative h-8 w-8 flex items-center justify-center rounded-[3px] border-[3px] border-slate-950 bg-white"
    >
      <motion.div
        className="relative h-4 w-4"
        animate={{ x: clicked ? -2 : 0 }}
        transition={spring}
      >
        {/* Top Line */}
        <motion.span
          className="absolute inset-x-0 top-1 h-[3px] w-full rounded-full bg-slate-950"
          initial={false}
          animate={clicked ? { rotate: -35, y: -6 } : { rotate: 35, y: 3.3 }}
          transition={spring}
          style={{ originX: "100%", originY: "50%" }}
        />

        {/* Bottom Line */}
        <motion.span
          className="absolute inset-x-0 bottom-1 h-[3px] w-full rounded-full bg-slate-950"
          initial={false}
          animate={clicked ? { rotate: 35, y: 6 } : { rotate: -35, y: -3.3 }}
          transition={spring}
          style={{ originX: "100%", originY: "50%" }}
        />
      </motion.div>
    </button>
  );
}
