import Logo from "@/components/Logo";
import Image from "next/image";

const Login = () => {
  return (
    <section class="">
      <div class="flex flex-col items-center justify-center gap-y-10 px-6 py-8 mx-auto md:h-[85vh] lg:py-4">
        {/* <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-[#2400b5] dark:text-white"
        >
          <Image class="w-8 h-8 mr-2" src="" alt="logo" />
          RecFlix
        </a> */}
        <Logo />
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 card_bg">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-[#2400b5] md:text-2xl ">
              Login
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-[#2400b5]"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-[#2400b5] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-[#2400b5] dark:placeholder-gray-400"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-[#2400b5]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-[#2400b5] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-[#2400b5] dark:placeholder-gray-400"
                  required=""
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-[#2400b5]">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                class="w-full text-[#eaf5ff] bg-[#2400b5] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p class="text-sm font-light text-gray-700 ">
                Don't have an account yet?{" "}
                <a
                  href="./register"
                  class="font-medium text-primary-600 hover:underline"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
