import Image from "next/image";

export default function Auth() {
    return (
        <section
        className="w-screen h-screen flex flex-col justify-center items-center"
            style={{
                backgroundImage: "url(/images/design/suit.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <form
            className="bg-white rounded-3xl p-8 w-fit"
            action="">
                {/* Branding */}
                <article className="flex flex-col justify-center items-center mb-4 text-center">
                    <Image
                        src="/images/design/logo.png"
                        alt="Reuh logo"
                        width={50}
                        height={50}
                    />
                    <article>
                        <h2 className="text-4xl font-bold">
                            Reuh
                        </h2>
                        <p className="text-dullDark">Your all in one toolkit for <br />professional growth</p>
                    </article>
                </article>

                <article className="flex flex-col mb-2">
                    {/* Fields */}

                    {/* Sign in with email btn */}
                    <button className="text-white font-medium flex justify-center items-center bg-gradient-to-r from-purple-600 to-primaryLight rounded-xl  py-2 px-16">Sign in with email</button>
                </article>

                {/* Or */}
                <article className="flex mb-2 font-medium items-center justify-center gap-1">
                    <article className="w-16 h-[1px] bg-dullLight"></article>
                    <p className="text-dullLight">Or</p>
                    <article className="w-16 h-[1px] bg-dullLight"></article>
                </article>

                {/* Sign in with google */}
                <button className="flex font-medium gap-2 rounded-xl px-16 py-2 bg-white shadow-lg transition duration-300">
                    Sign in with google
                </button>
            </form>
        </section>
    )
}