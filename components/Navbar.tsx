import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../public/images/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useUserStore } from "../store";
import { signIn, signOut } from "next-auth/react";

const applyStatus = {
  PENDING: "تحت المراجعة",
  ACCEPTED: "تم قبولها",
  REFUSED: "تم رفضها",
};

function LoadingSpinner() {
  return (
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-dashed border-primary"></div>
  );
}

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading, error } = useUserStore();

  useEffect(() => {
    const body = typeof window && document.getElementById("root");
    if (body) {
      body.style.overflow = mobileNavOpen ? "hidden" : "auto";
    }
  }, [mobileNavOpen]);

  return (
    <nav className="relative h-[55px] md:h-[75px]">
      <div className="fixed inset-x-0 top-0 z-40 flex h-[55px] items-center justify-center bg-root opacity-90 backdrop-blur-lg md:h-[75px]">
        <div className="container mx-auto flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={Logo} alt="brand logo" className="h-10 w-10"></Image>
            <h1 className="text-xl font-bold">وولف لاند</h1>
          </Link>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href={"/"}
              className="hidden items-center gap-2 transition hover:text-white/80 active:text-white/60 md:flex"
            >
              <HomeIcon className="h-5 w-5"></HomeIcon>
              <span>الرئيسية</span>
            </Link>
            <Link
              href={"/rules"}
              className="flex items-center gap-2 transition hover:text-white/80 active:text-white/60"
            >
              <QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
              <span>القوانين</span>
            </Link>

            {typeof window !== "undefined" && user?.id ? (
              <DropdownMenu.Root
                open={menuOpen}
                onOpenChange={(value) => setMenuOpen(value)}
              >
                <DropdownMenu.Trigger asChild>
                  <button
                    dir="ltr"
                    className="z-50 flex items-center gap-1 rounded-md p-1 transition hover:bg-root-100 active:bg-root-200"
                  >
                    <img
                      src={user.profile?.avatar}
                      alt={`${user.profile?.username}'s image`}
                      className="h-8 w-8 rounded-full"
                    />
                    <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
                  </button>
                </DropdownMenu.Trigger>
                <AnimatePresence>
                  {menuOpen && (
                    <DropdownMenu.Portal className="z-50" forceMount={true}>
                      <DropdownMenu.Content asChild forceMount={true}>
                        <motion.div
                          dir="ltr"
                          className="z-50 mt-2 flex flex-col gap-4 rounded-md bg-root-100 p-4"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: "spring", duration: 0.3 }}
                        >
                          {!user?.activated &&
                            !user?.locked &&
                            (user.userApplyApplication ? (
                              <div className="flex select-none items-center justify-end gap-1 py-1">
                                <span>
                                  {
                                    applyStatus[
                                      user.userApplyApplication.status
                                    ]
                                  }
                                </span>
                                <span className="font-bold">: حالة تقديمك</span>
                              </div>
                            ) : (
                              <DropdownMenu.Item asChild>
                                <Link
                                  href={"/apply"}
                                  className="btn-primary  w-full place-self-end self-end text-center"
                                >
                                  <span>أنضم لنا</span>
                                </Link>
                              </DropdownMenu.Item>
                            ))}

                          {user?.admin && (
                            <DropdownMenu.Item asChild>
                              <Link
                                href={"/dashboard"}
                                className="btn-primary w-full place-self-end self-end text-center"
                              >
                                <span>لوحة التحكم</span>
                              </Link>
                            </DropdownMenu.Item>
                          )}

                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <div className="h-10 w-10">
                                <img
                                  src={user.profile?.avatar}
                                  alt={`${user.profile?.username}'s image`}
                                  className=" rounded-full"
                                />
                              </div>
                              <span>{user.profile?.username}</span>
                            </div>
                            <DropdownMenu.Item asChild>
                              <button
                                onClick={() => signOut()}
                                className="btn-secondary-outline w-full"
                              >
                                <span>تسجيل الخروج</span>
                              </button>
                            </DropdownMenu.Item>
                          </div>
                        </motion.div>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  )}
                </AnimatePresence>
              </DropdownMenu.Root>
            ) : loading ? (
              <LoadingSpinner />
            ) : (
              <button
                disabled={!!error}
                onClick={() => signIn("discord")}
                className="btn-primary"
              >
                <span>{error ? error : "تسجيل الدخول"}</span>
              </button>
            )}
          </div>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="flex items-center justify-center rounded-md p-1 transition hover:bg-root-100 active:bg-root-200 md:hidden"
          >
            {user ? (
              <div dir="ltr" className="flex items-center gap-1">
                <img
                  src={user.profile?.avatar}
                  alt={`${user.profile?.username}'s image`}
                  className="h-8 w-8 rounded-full"
                />
                <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
              </div>
            ) : loading ? (
              <LoadingSpinner />
            ) : (
              <Bars3Icon className="h-6 w-6 "></Bars3Icon>
            )}
          </button>
        </div>
      </div>
      <div className="fixed inset-x-0 top-0 z-30 h-[55px] backdrop-blur md:h-[75px]"></div>

      {typeof window !== "undefined" && (
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ bottom: 0, opacity: 0 }}
              animate={{ top: 0, opacity: 1 }}
              exit={{
                bottom: 0,
                top: typeof window ? window.innerHeight : 900,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                damping: 15,
                duration: 0.1,
              }}
              className="container fixed inset-x-0 z-[35] mx-auto flex flex-col items-center justify-between gap-4 bg-root/95 backdrop-blur-lg md:hidden"
            >
              <div className="flex w-full flex-col items-center gap-4">
                <div className="h-[55px] md:h-[75px]"></div>
                <Link
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  href={"/"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-root-100 py-2 text-center transition hover:bg-root-200  hover:text-white/80 active:text-white/60"
                >
                  <HomeIcon className="h-5 w-5"></HomeIcon>
                  <span>الرئيسية</span>
                </Link>
                <Link
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  href={"/rules"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-root-100 py-2 text-center transition hover:bg-root-200 hover:text-white/80 active:text-white/60"
                >
                  <QuestionMarkCircleIcon className="h-5 w-5"></QuestionMarkCircleIcon>
                  <span>القوانين</span>
                </Link>
              </div>

              <div className="mb-4 flex w-full flex-col  gap-4">
                {!user?.activated &&
                  !user?.locked &&
                  (user?.userApplyApplication ? (
                    <div className="flex select-none items-center justify-center gap-1 py-1">
                      <span className="font-bold">حالة تقديمك : </span>
                      <span>
                        {applyStatus[user.userApplyApplication.status]}
                      </span>
                    </div>
                  ) : (
                    <Link
                      onClick={() => setMobileNavOpen(!mobileNavOpen)}
                      href={"/apply"}
                      className="btn-primary w-full place-self-end self-end text-center"
                    >
                      <span>أنضم لنا</span>
                    </Link>
                  ))}

                {user?.admin && (
                  <Link
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    href={"/dashboard"}
                    className="btn-primary w-full place-self-end self-end text-center"
                  >
                    <span>لوحة التحكم</span>
                  </Link>
                )}

                {user ? (
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => signOut()}
                      className="btn-secondary-outline w-full"
                    >
                      <span>تسجيل الخروج</span>
                    </button>
                    <div dir="ltr" className="flex items-center gap-2 pr-2">
                      <img
                        src={user.profile?.avatar}
                        alt={`${user.profile?.username}'s image`}
                        className="min-w-10 min-h-10 h-10 w-10 rounded-full"
                      />
                      <span>{user.profile?.username}</span>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => signIn("discord")}
                    className="btn-primary-outline w-full place-self-end self-end text-center"
                  >
                    <span>تسجيل الدخول</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </nav>
  );
}

export default Navbar;
