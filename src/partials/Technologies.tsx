import { GradientText, Section } from "astro-boilerplate-components";
import 'devicon/devicon.min.css';

const Technologies = () => (
  <section id="technologies">
    <Section
      title={
        <>
          <GradientText>Technologies</GradientText>
        </>
      }
    >

      {/* ai and robotics */}
      <div
        x-data="{}"
        x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-10 mt-5"
      >
        <ul x-ref="logos" className="flex items-center justify-center md:justify-start animate-infinite-scroll-1 space-x-8">

          <li><i className="devicon-arduino-plain-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-jupyter-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-matplotlib-plain-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-numpy-plain-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-pandas-plain-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-python-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-pytorch-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-ros-original-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-scikitlearn-plain-wordmark colored text-9xl"></i></li>

          <li><i className="devicon-arduino-plain-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-jupyter-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-matplotlib-plain-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-numpy-plain-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-pandas-plain-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-python-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-pytorch-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-ros-original-wordmark colored text-9xl filter brightness-200"></i></li>
          <li><i className="devicon-scikitlearn-plain-wordmark colored text-9xl"></i></li>

        </ul>
      </div>

      {/* others */}
      <div
        x-data="{}"
        x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-10 mt-10"
      >
        <ul x-ref="logos" className="flex items-center justify-center md:justify-start animate-infinite-scroll-2 space-x-8">

          <li><i className="devicon-c-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-csharp-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-cplusplus-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-css3-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-html5-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-java-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-javascript-plain colored text-7xl"></i></li>
          <li><i className="devicon-php-plain colored text-7xl"></i></li>

          <li><i className="devicon-c-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-csharp-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-cplusplus-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-css3-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-html5-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-java-plain-wordmark colored text-7xl"></i></li>
          <li><i className="devicon-javascript-plain colored text-7xl"></i></li>
          <li><i className="devicon-php-plain colored text-7xl"></i></li>

        </ul>
      </div>

      {/* tools and envs */}
      <div
        x-data="{}"
        x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-5 mt-10"
      >
        <ul x-ref="logos" className="flex items-center justify-center md:justify-start animate-infinite-scroll-3 space-x-8">

          <li><i className="devicon-androidstudio-plain-wordmark text-9xl text-green-500"></i></li>
          <li><i className="devicon-bash-plain text-8xl"></i></li>
          <li><i className="devicon-git-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-latex-plain text-9xl text-white"></i></li>
          <li><i className="devicon-markdown-original text-8xl"></i></li>
          <li><i className="devicon-phpstorm-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-trello-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-vscode-plain-wordmark colored text-7xl"></i></li>

          <li><i className="devicon-androidstudio-plain-wordmark text-9xl text-green-500"></i></li>
          <li><i className="devicon-bash-plain text-8xl"></i></li>
          <li><i className="devicon-git-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-latex-plain text-9xl text-white"></i></li>
          <li><i className="devicon-markdown-original text-8xl"></i></li>
          <li><i className="devicon-phpstorm-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-trello-plain-wordmark colored text-9xl"></i></li>
          <li><i className="devicon-vscode-plain-wordmark colored text-7xl"></i></li>

        </ul>
      </div>

    </Section >
  </section>
);

export { Technologies };