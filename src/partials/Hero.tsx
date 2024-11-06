import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
    <Section>
      <HeroAvatar
        title={
          <div className="text-8xl">
            Hi there,<br />I'm <GradientText>Jury</GradientText> 👋
          </div>
        }
        description={
          <div className="text-3xl">
            I'm a graduate student in <GradientText>Artificial Intelligence</GradientText> and co-organizer of <GradientText>Neural Wave</GradientText>,
            the first AI hackathon in Lugano.
          </div>
        }
        avatar={
          <img
            className="h-70 w-80 rounded-full"
            src="./assets/images/profile_4.jpeg"
            alt="Avatar image"
            loading="lazy"
          />
        }
        socialButtons={
          <div className="flex justify-center items-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/jury-andrea-d-onofrio-905118298/">
              <HeroSocial
                src="./assets/images/linkedin-brands-solid.svg"
                alt="Linkedin icon"
              />
            </a>
            <a href="https://github.com/JuryAndrea">
              <HeroSocial
                src="./assets/images/github-brands-solid.svg"
                alt="GitHub icon"
              />
            </a>

            <a href="https://neuralwave.ch/#/">
              <HeroSocial
                src="./assets/images/neuralwave.png"
                alt="GitHub icon"
              />
            </a>

            

          </div>
        }
      />
    </Section>
);

export { Hero };
