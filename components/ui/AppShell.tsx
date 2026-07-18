"use client";

import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface AppShellProps {
  children: ReactNode;
}

const AppShell: FC<AppShellProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(8px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 0.45, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default AppShell;
