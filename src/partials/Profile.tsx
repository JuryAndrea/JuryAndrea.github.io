import { Section, GradientText } from 'astro-boilerplate-components';


const Profile = () => (
  <Section>
    {/* <p className="text-white-500 italic">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p> */}

    <div className="flex flex-wrap">
      <div className="w-1/2 md:w-1/3 space-y-4 text-lg">
        <p>➤ <strong>Birthday:</strong> 3 May 1999</p>
        <p>➤ <strong>Phone:</strong> <a href="tel:+41 76 594 45 29" className="text-white hover:text-yellow-400 hover:underline transition duration-300">+41 76 594 45 29</a></p>
        <p>➤ <strong>City:</strong> Lugano, Switzerland</p>
      </div>
      <div className="w-1/2 md:w-1/3 space-y-4 mb-4 text-lg">
        <p>➤ <strong>Age:</strong> 25</p>
        <p>➤ <strong>Degree:</strong> MSc in Artificial Intelligence</p>
        <p>➤ <strong>Email:</strong> <a href="mailto:jury.donofrio@gmail.com" className="text-white hover:text-yellow-400 hover:underline transition duration-300" title="mailto:jury.donofrio@gmail.com" >jury.donofrio@gmail.com</a></p>
      </div>
    </div>

    <p className="leading-relaxed mt-4 text-lg text-justify">
      <GradientText>Master’s in Artificial Intelligence</GradientText> from <a href="https://www.usi.ch/en/education/master/artificial-intelligence" className="text-electric-blue hover:underline underline" target="_blank" rel="noopener noreferrer"> Università della Svizzera italiana</a> and a solid background in <GradientText> Informatics</GradientText>, I am passionate about transforming complex ideas into practical,
      real-world solutions. My recent master thesis,
      focused on a <GradientText>CNN-based obstacle avoidance system</GradientText> for nano-drones at the <a href="https://www.idsia.ch" className="text-electric-blue hover:underline underline" target="_blank" rel="noopener noreferrer">Dalle Molle Institute for Artificial Intelligence USI-SUPSI (IDSIA)</a>
      <GradientText> Robotics Lab</GradientText>, challenging me to merge cutting-edge
      <GradientText> vision-depth fusion techniques</GradientText> with compact, resource-constrained environments.
    </p>

    <p className="mt-4 leading-relaxed text-lg text-justify">
      Currently, I am eager to expand my expertise in <GradientText>machine learning</GradientText>,
      <GradientText> computer vision</GradientText>, and <GradientText>robotics</GradientText> through <em className='text-role-yellow'>collaborative projects</em>,
      <em className='text-role-yellow'> internships</em>, and <em className='text-role-yellow'>junior positions</em> at the forefront of technology.
      I am especially interested in fields where innovation can make a significant impact,
      such as <GradientText>automotive</GradientText>, <GradientText>bio-medicine</GradientText>, and <GradientText>sports technology</GradientText>.
      Driven by a commitment to pushing technological boundaries, I’m excited to contribute to the
      autonomous revolution and be part of transformative advancements.
    </p>

  </Section>
);

export { Profile };
